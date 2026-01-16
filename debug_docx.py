import zipfile
import xml.etree.ElementTree as ET
import re
import os

def debug_chars(docx_path):
    with zipfile.ZipFile(docx_path) as z:
        xml_content = z.read('word/document.xml')
    
    tree = ET.fromstring(xml_content)
    namespaces = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
    
    paragraphs = []
    for p in tree.findall('.//w:p', namespaces):
        texts = [node.text for node in p.findall('.//w:t', namespaces) if node.text]
        if texts:
            paragraphs.append(''.join(texts))
            
    print("--- FIRST 50 PARAGRAPHS REPR ---")
    for i, p in enumerate(paragraphs[:50]):
        # Check if it looks like a question
        if "javob" in p or "j avob" in p:
            print(f"{i}: {repr(p)}")

if __name__ == "__main__":
    base_path = r"c:/Users/user/Desktop/kiber test sayt"
    docx_file = os.path.join(base_path, "Kiberxavfsizlik test baza.docx")
    debug_chars(docx_file)
