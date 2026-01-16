import zipfile
import xml.etree.ElementTree as ET
import json
import re
import os

def extract_text_from_docx(docx_path):
    """Refined extraction to handle various formatting issues."""
    with zipfile.ZipFile(docx_path) as z:
        xml_content = z.read('word/document.xml')
    
    tree = ET.fromstring(xml_content)
    # Namespace for Word XML
    namespaces = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
    
    paragraphs = []
    for p in tree.findall('.//w:p', namespaces):
        texts = [node.text for node in p.findall('.//w:t', namespaces) if node.text]
        if texts:
            paragraphs.append(''.join(texts))
            
    return paragraphs

def parse_questions(paragraphs):
    questions = []
    current_question = None
    
    # Regex to identify typical patterns
    # Question starts often look like "1." or "1)" or just text if we are less strict
    # Answers look like "A)", "A.", "a)", "a."
    
    # We will assume a structure like:
    # Question text...
    # A) Answer...
    # B) Answer...
    # C) Answer...
    # D) Answer...
    
    # Since the user said A is always correct, we need to capture that effectively.
    
    current_q_text = []
    options = {}
    
    # Helper to detect option start
    def get_option_label(text):
        text = text.strip()
        # Matches A), A., a), a. at start of line
        match = re.match(r'^([A-D]|[a-d])[\)\.]\s*(.*)', text)
        if match:
            return match.group(1).upper(), match.group(2)
        return None, None

    for line in paragraphs:
        line = line.strip()
        if not line:
            continue
            
        label, content = get_option_label(line)
        
        if label:
            # It's an option
            if current_question is None:
                # Need to initialize a question if we found an option but have no question object??
                # This might happen if the question text was on previous lines
                if current_q_text:
                     # Create new question structure if we were collecting text
                     pass
                else:
                    continue # Skip orphan option
            
            options[label] = content
            
            # If we have A, B, C, D (or enough options), we might consider the question done?
            # actually we should just keep collecting until next number or end
        else:
            # It's either a new question or continuation of previous text
            # Heuristic: If we already have options for the current question, this must be a new question
            if options:
                # Save previous question
                if current_q_text and 'A' in options: # Ensure we at least have the correct answer
                    questions.append({
                        'question': " ".join(current_q_text),
                        'options': options,
                        'answer': options['A'] # Store the correct answer (A) value
                    })
                
                # Reset for new question
                current_question = None
                current_q_text = [line]
                options = {}
            else:
                # Accumulate question text
                # Check if it looks like a question number (optional, but good for cleanup)
                # Remove leading numbers like "1." "20)"
                cleaned_line = re.sub(r'^\d+[\.\)]\s*', '', line)
                
                # Normalize whitespace to handle non-breaking spaces or tabs
                cleaned_line = " ".join(cleaned_line.split())
                
                # FORCE REMOVAL with explicit strings to bypass regex complexity/failure
                # These are the exact strings seen in the debug output (U+2018 is ‘)
                cleaned_line = cleaned_line.replace('To‘g‘ri javob: A', '')
                cleaned_line = cleaned_line.replace("To'g'ri javob: A", '')
                
                # Broad regex fallback
                cleaned_line = re.sub(r'To.*?javob:\s*[A-Da-d]\s*', '', cleaned_line, flags=re.IGNORECASE | re.DOTALL)
                
                cleaned_line = cleaned_line.strip()
                
                # Last resort split if it persists
                if "javob: A" in cleaned_line:
                    cleaned_line = cleaned_line.split("javob: A")[-1].strip()
                elif "javob: a" in cleaned_line:
                    cleaned_line = cleaned_line.split("javob: a")[-1].strip()

                if cleaned_line:
                    current_q_text.append(cleaned_line)

    # Save the last one
    if current_q_text and options and 'A' in options:
        questions.append({
            'question': " ".join(current_q_text),
            'options': options,
            'answer': options['A']
        })
        
    return questions

def clean_question_text(text):
    # Final cleanup of the assembled question string
    text = " ".join(text.split())
    # Remove prefix if it exists at the start
    # We use a loop to ensure we catch it if there are multiple or variations
    prefixes = [
        "To‘g‘ri javob: A", 
        "To'g'ri javob: A", 
        "To‘g‘ri javob: B", 
        "To'g'ri javob: B",
        "To‘g‘ri javob: C",
        "To'g'ri javob: C",
        "To‘g‘ri javob: D",
        "To'g'ri javob: D",
    ]
    for p in prefixes:
        if text.lower().startswith(p.lower()):
            text = text[len(p):].strip()
            
    # Also Regex for general case at start
    text = re.sub(r'^To.*?javob:\s*[A-Da-d]\s*', '', text, flags=re.IGNORECASE)
    return text.strip()

def save_to_js(questions, output_file):
    # We need to format this for the JS file
    # We want to randomize the options for the frontend to render, OR 
    # we can pass them as is (A=correct) and let the frontend shuffle.
    # The prompt says "random qilib berilsin javobi aralshtirib berilsin" (answers mixed).
    # It is easier to send the raw data (Question + Correct Answer string) and let JS shuffle options.
    # But wait, we need to send ALL options.
    
    js_data = []
    for q in questions:
        # Get all option values
        opts = list(q['options'].values())
        # The correct answer is q['answer']
        
        # FINAL CLEANING
        q_text = clean_question_text(q['question'])
        
        js_data.append({
            'question': q_text,
            'options': opts,
            'correctAnswer': q['answer']
        })
        
    js_content = f"const questions = {json.dumps(js_data, indent=4, ensure_ascii=False)};"
    
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(js_content)
    
    print(f"Successfully extracted {len(js_data)} questions to {output_file}")

if __name__ == "__main__":
    base_path = r"c:/Users/user/Desktop/kiber test sayt"
    docx_file = os.path.join(base_path, "Kiberxavfsizlik test baza.docx")
    output_js = os.path.join(base_path, "questions_cleaned.js")
    
    if os.path.exists(docx_file):
        try:
            paragraphs = extract_text_from_docx(docx_file)
            questions = parse_questions(paragraphs)
            save_to_js(questions, output_js)
        except Exception as e:
            print(f"Error: {e}")
    else:
        print(f"File not found: {docx_file}")
