const questions = [
    {
        "question": "Kiberxavfsizlik Asoslari – Test Konfidensiallikni ta’minlash bu - ?",
        "options": [
            "Ruxsat etilmagan “o‘qishdan” himoyalash",
            "Ruxsat etilmagan “yozishdan” himoyalash",
            "Ruxsat etilmagan “bajarishdan” himoyalash",
            "Ruxsat berilgan “amallarni” bajarish"
        ],
        "correctAnswer": "Ruxsat etilmagan “o‘qishdan” himoyalash"
    },
    {
        "question": "Foydalanuvchanlikni ta’minlash bu - ?",
        "options": [
            "Ruxsat berilgan “amallarni” bajarish",
            "Ruxsat etilmagan “yozishdan” himoyalash",
            "Ruxsat etilmagan “o‘qishdan” himoyalash",
            "Ruxsat etilmagan “bajarishdan” himoyalash"
        ],
        "correctAnswer": "Ruxsat berilgan “amallarni” bajarish"
    },
    {
        "question": "Butunlikni ta’minlash bu - ?",
        "options": [
            "Ruxsat etilmagan “yozishdan” himoyalash",
            "Ruxsat etilmagan “o‘qishdan” himoyalash",
            "Ruxsat etilmagan “bajarishdan” himoyalash",
            "Ruxsat berilgan “amallarni” bajarish"
        ],
        "correctAnswer": "Ruxsat etilmagan “yozishdan” himoyalash"
    },
    {
        "question": "Hujumchi kabi fikrlash nima uchun kerak?",
        "options": [
            "Bo‘lishi mumkin bo‘lgan xavfni oldini olish uchun",
            "Kafolatlangan amallarni ta’minlash",
            "Ma’lumot, axborot va tizimdan foydalanish uchun",
            "Ma’lumotni aniq va ishonchli"
        ],
        "correctAnswer": "Bo‘lishi mumkin bo‘lgan xavfni oldini olish uchun"
    },
    {
        "question": "Tizimli fikrlash nima uchun kerak?",
        "options": [
            "Kafolatlangan amallarni ta’minlash",
            "Bo‘lishi mumkin bo‘lgan xavfni oldini olish uchun",
            "Ma’lumot, axborot va tizimdan foydalanish uchun",
            "Ma’lumotni aniq va ishonchli ekanligini bilish"
        ],
        "correctAnswer": "Kafolatlangan amallarni ta’minlash"
    },
    {
        "question": "Risk bu?",
        "options": [
            "Noaniqlikning maqsadlarga ta’siri",
            "Nimaga erishishni xohlash",
            "Qadrli narsa",
            "Zarar yetkazuvchi hodisa"
        ],
        "correctAnswer": "Noaniqlikning maqsadlarga ta’siri"
    },
    {
        "question": "Tahdid bu?",
        "options": [
            "Tizim yoki tashkilotga zarar yetkazishi mumkin bo‘lgan istalmagan hodisa",
            "Noaniqlikning ta’siri",
            "Nimaga erishishni xohlash",
            "Qadrli narsa"
        ],
        "correctAnswer": "Tizim yoki tashkilotga zarar yetkazishi mumkin bo‘lgan istalmagan hodisa"
    },
    {
        "question": "Aktiv bu?",
        "options": [
            "Tashkilot uchun qadrli bo‘lgan ixtiyoriy narsa",
            "Zararli hodisa",
            "Noaniqlik",
            "Nimaga erishishni xohlash"
        ],
        "correctAnswer": "Tashkilot uchun qadrli bo‘lgan ixtiyoriy narsa"
    },
    {
        "question": "Zaiflik bu?",
        "options": [
            "Tahdidga sabab bo‘luvchi kamchilik",
            "Qadrli narsa",
            "Zararli hodisa",
            "Noaniqlik"
        ],
        "correctAnswer": "Tahdidga sabab bo‘luvchi kamchilik"
    },
    {
        "question": "Boshqarish vositasi bu?",
        "options": [
            "Riskni o‘zgartiradigan harakatlar",
            "Kamchilik",
            "Aktiv",
            "Tahdid"
        ],
        "correctAnswer": "Riskni o‘zgartiradigan harakatlar"
    },
    {
        "question": "Hodisaga ehtimol qo‘shilsa nima paydo bo‘ladi?",
        "options": [
            "Risk",
            "Hujum",
            "Tahdid",
            "Aktiv"
        ],
        "correctAnswer": "Risk"
    },
    {
        "question": "DoS hujumi qaysi xususiyatni buzadi?",
        "options": [
            "Foydalanuvchanlik",
            "Butunlik",
            "Konfidensiallik",
            "Ishonchlilik"
        ],
        "correctAnswer": "Foydalanuvchanlik"
    },
    {
        "question": "Tizim xavfsizligi bu?",
        "options": [
            "Tizim xavfsizligi",
            "Ma’lumotlar xavfsizligi",
            "Inson xavfsizligi",
            "Tashkilot xavfsizligi"
        ],
        "correctAnswer": "Tizim xavfsizligi"
    },
    {
        "question": "Kriptologiya bu?",
        "options": [
            "Maxfiy kodlarni yaratish va buzish fani",
            "Faqat yaratish",
            "Faqat buzish",
            "Axborotni himoyalash"
        ],
        "correctAnswer": "Maxfiy kodlarni yaratish va buzish fani"
    },
    {
        "question": "Kriptotizimda shifrlash uchun nima kerak?",
        "options": [
            "Kalit",
            "Ochiq matn",
            "Alifbo",
            "Algoritm"
        ],
        "correctAnswer": "Kalit"
    },
    {
        "question": "Kriptografiya bu?",
        "options": [
            "Maxfiy kodlarni yaratish fani",
            "Yaratish va buzish",
            "Faqat buzish",
            "Axborotni himoyalash"
        ],
        "correctAnswer": "Maxfiy kodlarni yaratish fani"
    },
    {
        "question": "Kriptotahlil bu?",
        "options": [
            "Kodlarni buzish fani",
            "Kod yaratish",
            "Ikkalasi",
            "Himoyalash"
        ],
        "correctAnswer": "Kodlarni buzish fani"
    },
    {
        "question": "Belgilar to‘plami nima?",
        "options": [
            "Alifbo",
            "Ochiq matn",
            "Shifrmatn",
            "Kodlash"
        ],
        "correctAnswer": "Alifbo"
    },
    {
        "question": "Shifrlangan ochiq ma’lumot natijasi?",
        "options": [
            "Shifrmatn",
            "Ochiq matn",
            "Noma’lum",
            "Kod"
        ],
        "correctAnswer": "Shifrmatn"
    },
    {
        "question": "Deshifrlash uchun nima kerak?",
        "options": [
            "Shifrmatn",
            "Ochiq matn",
            "Kodlash",
            "Alifbo"
        ],
        "correctAnswer": "Shifrmatn"
    },
    {
        "question": "Sanoq tizimini o‘zgartirish bu?",
        "options": [
            "Kodlash",
            "Shifrlash",
            "Yashirish",
            "Deshifrlash"
        ],
        "correctAnswer": "Kodlash"
    },
    {
        "question": "Bir xil kalitli tizim?",
        "options": [
            "Simmetrik kriptotizim",
            "Ochiq kalitli",
            "Asimetrik",
            "Xesh"
        ],
        "correctAnswer": "Simmetrik kriptotizim"
    },
    {
        "question": "Ikki kalitli tizim?",
        "options": [
            "Ochiq kalitli kriptotizim",
            "Simmetrik",
            "Xesh",
            "MAS"
        ],
        "correctAnswer": "Ochiq kalitli kriptotizim"
    },
    {
        "question": "Ma’lumot mavjudligini yashirish?",
        "options": [
            "Steganografiya",
            "Kriptografiya",
            "Kodlash",
            "Kriptotahlil"
        ],
        "correctAnswer": "Steganografiya"
    },
    {
        "question": "Qulay taqdim qilish?",
        "options": [
            "Kodlash",
            "Shifrlash",
            "Yashirish",
            "Deshifrlash"
        ],
        "correctAnswer": "Kodlash"
    },
    {
        "question": "Konfidensiallik uchun?",
        "options": [
            "Shifrlash",
            "Kodlash",
            "Yashirish",
            "Deshifrlash"
        ],
        "correctAnswer": "Shifrlash"
    },
    {
        "question": "Mavjudlikni yashirish?",
        "options": [
            "Steganografiya",
            "Kriptografiya",
            "Kodlash",
            "Kriptotahlil"
        ],
        "correctAnswer": "Steganografiya"
    },
    {
        "question": "Xesh funksiyalar?",
        "options": [
            "Kalitsiz kriptografik funksiya",
            "Bir kalitli",
            "Ikki kalitli",
            "Ko‘p kalitli"
        ],
        "correctAnswer": "Kalitsiz kriptografik funksiya"
    },
    {
        "question": "Kriptografiya nimani ta’minlaydi?",
        "options": [
            "Konfidensiallik va butunlik",
            "Konfidensiallik va foydalanuvchanlik",
            "Foydalanuvchanlik va butunlik",
            "Faqat konfidensiallik"
        ],
        "correctAnswer": "Konfidensiallik va butunlik"
    },
    {
        "question": "Qadimiy shifr?",
        "options": [
            "Sezar shifri",
            "Kodlar kitobi",
            "Enigma",
            "AES"
        ],
        "correctAnswer": "Sezar shifri"
    },
    {
        "question": "Kompyuter davri shifri?",
        "options": [
            "DES, AES",
            "Sezar",
            "Kodlar kitobi",
            "Enigma"
        ],
        "correctAnswer": "DES, AES"
    },
    {
        "question": "Qaysi shifr chastota tahliliga chidamli?",
        "options": [
            "O‘rin almashtirish",
            "O‘rniga qo‘yish",
            "Sezar",
            "Barchasi"
        ],
        "correctAnswer": "O‘rin almashtirish"
    },
    {
        "question": "Blokli va oqimli shifrlar?",
        "options": [
            "Simmetrik",
            "Ochiq kalitli",
            "Asimetrik",
            "Klassik"
        ],
        "correctAnswer": "Simmetrik"
    },
    {
        "question": "Tasodifiy ketma-ketlikka asoslangan?",
        "options": [
            "Oqimli shifr",
            "Blokli",
            "Ochiq kalitli",
            "Asimetrik"
        ],
        "correctAnswer": "Oqimli shifr"
    },
    {
        "question": "Qismlarni takror shifrlash?",
        "options": [
            "Blokli shifr",
            "Oqimli",
            "Ochiq kalitli",
            "Asimetrik"
        ],
        "correctAnswer": "Blokli shifr"
    },
    {
        "question": "A5/1 shifri qaysi turga mansub?",
        "options": [
            "Oqimli shifr",
            "Blokli shifr",
            "Ochiq kalitli",
            "Asimetrik"
        ],
        "correctAnswer": "Oqimli shifr"
    },
    {
        "question": "Qaysi algoritmlar simmetrik blokli?",
        "options": [
            "TEA, DES",
            "A5/1, AES",
            "Sezar, TEA",
            "Vijiner, TEA"
        ],
        "correctAnswer": "TEA, DES"
    },
    {
        "question": "Simmetrik kriptotizim kamchiligi?",
        "options": [
            "Kalitni taqsimlash zaruriyati",
            "Vaqt ko‘pligi",
            "Esda saqlash qiyinligi",
            "Maqbul emasligi"
        ],
        "correctAnswer": "Kalitni taqsimlash zaruriyati"
    },
    {
        "question": "Faqat blokli shifrlarga xos atama?",
        "options": [
            "Blok uzunligi",
            "Kalit uzunligi",
            "Ochiq kalit",
            "Kodlash jadvali"
        ],
        "correctAnswer": "Blok uzunligi"
    },
    {
        "question": "Sezar shifri qaysi akslantirish?",
        "options": [
            "O‘rniga qo‘yish",
            "O‘rin almashtirish",
            "Ochiq kalitli",
            "Kombinatsion"
        ],
        "correctAnswer": "O‘rniga qo‘yish"
    },
    {
        "question": "Chastotalar o‘zgarmaydi?",
        "options": [
            "O‘rniga qo‘yish",
            "O‘rin almashtirish",
            "Mavjud emas",
            "Kombinatsion"
        ],
        "correctAnswer": "O‘rniga qo‘yish"
    },
    {
        "question": "Kerxgofs prinsipiga ko‘ra xavfsizlik nimaga bog‘liq?",
        "options": [
            "Kalitga",
            "Algoritmga",
            "Shifrmatnga",
            "Protokolga"
        ],
        "correctAnswer": "Kalitga"
    },
    {
        "question": "Shaxsiy kriptotizimlar nega xavfsiz emas?",
        "options": [
            "Tor doirada tahlil qilingan",
            "Bitta kalitli",
            "Bardoshli emas",
            "Ikki kalitli"
        ],
        "correctAnswer": "Tor doirada tahlil qilingan"
    },
    {
        "question": "Alohida kalitli shifrlash tizimi?",
        "options": [
            "Ochiq kalitli",
            "Simmetrik",
            "Bir kalitli",
            "Xesh"
        ],
        "correctAnswer": "Ochiq kalitli"
    },
    {
        "question": "128 bitli kalitlar soni?",
        "options": [
            "2^128",
            "128!",
            "128^2",
            "2^127"
        ],
        "correctAnswer": "2^128"
    },
    {
        "question": "Ochiq kalitli shifr?",
        "options": [
            "RSA",
            "TEA",
            "A5/1",
            "Sezar"
        ],
        "correctAnswer": "RSA"
    },
    {
        "question": "Simmetrik shifrlar nimani ta’minlaydi?",
        "options": [
            "Konfidensiallik va butunlik",
            "Faqat konfidensiallik",
            "Butunlik va foydalanuvchanlik",
            "Foydalanuvchanlik"
        ],
        "correctAnswer": "Konfidensiallik va butunlik"
    },
    {
        "question": "Ochiq kalitli shifrlar nimani ta’minlaydi?",
        "options": [
            "Konfidensiallik va butunlik",
            "Faqat konfidensiallik",
            "Butunlik va foydalanuvchanlik",
            "Foydalanuvchanlik"
        ],
        "correctAnswer": "Konfidensiallik va butunlik"
    },
    {
        "question": "Rad etishni oldini oluvchi tizim?",
        "options": [
            "Elektron raqamli imzo",
            "MAS",
            "Simmetrik shifr",
            "Xesh"
        ],
        "correctAnswer": "Elektron raqamli imzo"
    },
    {
        "question": "Faktorlashga asoslangan algoritm?",
        "options": [
            "RSA",
            "El-Gamal",
            "DES",
            "TEA"
        ],
        "correctAnswer": "RSA"
    },
    {
        "question": "Ochiq kalitli kriptotizimlarning asosiy kamchiligi?",
        "options": [
            "Hisoblashda yuqori vaqt sarflanadi",
            "Kalitlarni taqsimlash muammosi mavjud",
            "Ikkita kalitni saqlash muammosi mavjud",
            "Foydalanish uchun noqulay"
        ],
        "correctAnswer": "Hisoblashda yuqori vaqt sarflanadi"
    },
    {
        "question": "Ochiq kalitli kriptotizimlarni rad etishdan himoyalash sababi?",
        "options": [
            "Ikkita kalitdan foydalanilgani",
            "Matematik muammoga asoslanilgani",
            "Ochiq kalitni saqlash shart emasligi",
            "Shaxsiy kalitni saqlash zarurligi"
        ],
        "correctAnswer": "Ikkita kalitdan foydalanilgani"
    },
    {
        "question": "MAS tizimlari nega rad etishdan himoyalay olmaydi?",
        "options": [
            "Yagona kalitdan foydalanilgani",
            "Xesh funksiyadan foydalanilgani",
            "Shaxsiy kalit sir saqlangani",
            "Faqat butunlikni ta’minlagani"
        ],
        "correctAnswer": "Yagona kalitdan foydalanilgani"
    },
    {
        "question": "Xesh funksiyaga tegishli bo‘lmagan talab?",
        "options": [
            "Bir tomonlama bo‘lmasligi",
            "Tezkorlik",
            "Turli kirishlar turli chiqishlar berishi",
            "Kolliziyaga bardoshlilik"
        ],
        "correctAnswer": "Bir tomonlama bo‘lmasligi"
    },
    {
        "question": "Elektron raqamli imzoda qaysi kalit ishlatiladi?",
        "options": [
            "Shaxsiy kalit",
            "Ochiq kalit",
            "Kalit ishlatilmaydi",
            "Umumiy kalit"
        ],
        "correctAnswer": "Shaxsiy kalit"
    },
    {
        "question": "Ochiq kalitli shifrlashda deshifrlash qaysi kalit bilan?",
        "options": [
            "Shaxsiy kalit",
            "Ochiq kalit",
            "Kalit ishlatilmaydi",
            "Umumiy kalit"
        ],
        "correctAnswer": "Shaxsiy kalit"
    },
    {
        "question": "Elektron raqamli imzo nimani ta’minlaydi?",
        "options": [
            "Butunlik va rad etishdan himoya",
            "Konfidensiallik va rad etishdan himoya",
            "Konfidensiallik",
            "Faqat butunlik"
        ],
        "correctAnswer": "Butunlik va rad etishdan himoya"
    },
    {
        "question": "Avval shifrlab, keyin imzolash muammosi?",
        "options": [
            "Shifrmatnni har kim imzolashi mumkin",
            "Imzoni har kim tekshiradi",
            "Kalitsiz deshifrlash mumkin",
            "Muammo yo‘q"
        ],
        "correctAnswer": "Shifrmatnni har kim imzolashi mumkin"
    },
    {
        "question": "Avval imzolab, keyin shifrlash muammosi?",
        "options": [
            "Imzolangan ma’lumotni har kimga yuborish mumkin",
            "Shifrmatnni har kim imzolaydi",
            "Imzoni har kim tekshiradi",
            "Muammo yo‘q"
        ],
        "correctAnswer": "Imzolangan ma’lumotni har kimga yuborish mumkin"
    },
    {
        "question": "Faqat butunlikni ta’minlovchi tizimlar?",
        "options": [
            "MAS tizimlari",
            "Elektron raqamli imzo",
            "Ochiq kalitli shifr",
            "Barchasi"
        ],
        "correctAnswer": "MAS tizimlari"
    },
    {
        "question": "To‘g‘ri ketma-ketlik?",
        "options": [
            "Identifikatsiya, autentifikatsiya, avtorizatsiya",
            "Autentifikatsiya, avtorizatsiya, identifikatsiya",
            "Identifikatsiya, avtorizatsiya, autentifikatsiya",
            "Avtorizatsiya, identifikatsiya, autentifikatsiya"
        ],
        "correctAnswer": "Identifikatsiya, autentifikatsiya, avtorizatsiya"
    },
    {
        "question": "Foydalanuvchini tanitish jarayoni?",
        "options": [
            "Identifikatsiya",
            "Autentifikatsiya",
            "Avtorizatsiya",
            "Ro‘yxatga olish"
        ],
        "correctAnswer": "Identifikatsiya"
    },
    {
        "question": "Foydalanuvchini tekshirish jarayoni?",
        "options": [
            "Autentifikatsiya",
            "Identifikatsiya",
            "Avtorizatsiya",
            "Ro‘yxatga olish"
        ],
        "correctAnswer": "Autentifikatsiya"
    },
    {
        "question": "Imtiyoz berish jarayoni?",
        "options": [
            "Avtorizatsiya",
            "Autentifikatsiya",
            "Identifikatsiya",
            "Ro‘yxatga olish"
        ],
        "correctAnswer": "Avtorizatsiya"
    },
    {
        "question": "Parolga asoslangan autentifikatsiya kamchiligi?",
        "options": [
            "Esda saqlash zaruriyati",
            "Olib yurish zaruriyati",
            "Almashtirib bo‘lmaslik",
            "Qalbakilashtirish"
        ],
        "correctAnswer": "Esda saqlash zaruriyati"
    },
    {
        "question": "Bilishga asoslangan autentifikatsiya misoli?",
        "options": [
            "PIN, parol",
            "Token",
            "Yuz tasviri",
            "Biometrik"
        ],
        "correctAnswer": "PIN, parol"
    },
    {
        "question": "Egalikka asoslangan autentifikatsiya kamchiligi?",
        "options": [
            "Doimo xavfsiz saqlash zaruriyati",
            "Esda saqlash zaruriyati",
            "Qalbakilashtirish",
            "Almashtirib bo‘lmaslik"
        ],
        "correctAnswer": "Doimo xavfsiz saqlash zaruriyati"
    },
    {
        "question": "Esda saqlash talab qilmaydigan usul?",
        "options": [
            "Biometrik",
            "Parol",
            "Token",
            "Ko‘p faktorli"
        ],
        "correctAnswer": "Biometrik"
    },
    {
        "question": "Eng universal biometrik parametr?",
        "options": [
            "Yuz tasviri",
            "Ko‘z qorachig‘i",
            "Barmoq izi",
            "Qo‘l shakli"
        ],
        "correctAnswer": "Yuz tasviri"
    },
    {
        "question": "Eng takrorlanmas biometrik parametr?",
        "options": [
            "Ko‘z qorachig‘i",
            "Yuz tasviri",
            "Barmoq izi",
            "Qo‘l shakli"
        ],
        "correctAnswer": "Ko‘z qorachig‘i"
    },
    {
        "question": "Biometrik autentifikatsiyada eng keng tarqalgan usul?",
        "options": [
            "Barmoq izi",
            "Yuz tasviri",
            "Ko‘z qorachig‘i",
            "Ovozni aniqlash"
        ],
        "correctAnswer": "Barmoq izi"
    },
    {
        "question": "Ko‘p faktorli autentifikatsiya nimani anglatadi?",
        "options": [
            "Bir nechta autentifikatsiya usulidan foydalanish",
            "Faqat paroldan foydalanish",
            "Faqat biometrikdan foydalanish",
            "Faqat token"
        ],
        "correctAnswer": "Bir nechta autentifikatsiya usulidan foydalanish"
    },
    {
        "question": "Autentifikatsiyada token nima?",
        "options": [
            "Foydalanuvchiga tegishli qurilma yoki vosita",
            "Parol turi",
            "Biometrik parametr",
            "Login"
        ],
        "correctAnswer": "Foydalanuvchiga tegishli qurilma yoki vosita"
    },
    {
        "question": "Smart-karta qaysi turga kiradi?",
        "options": [
            "Egalikka asoslangan",
            "Bilishga asoslangan",
            "Biometrik",
            "Aralash"
        ],
        "correctAnswer": "Egalikka asoslangan"
    },
    {
        "question": "Parolga qo‘yiladigan asosiy talab?",
        "options": [
            "Murakkab va uzun bo‘lishi",
            "Qisqa bo‘lishi",
            "Oson esda qolishi",
            "Faqat raqamdan iborat bo‘lishi"
        ],
        "correctAnswer": "Murakkab va uzun bo‘lishi"
    },
    {
        "question": "Autentifikatsiyada “yagona faktor” nimani bildiradi?",
        "options": [
            "Faqat bitta usuldan foydalanish",
            "Ikki usuldan foydalanish",
            "Uch usuldan foydalanish",
            "Hech qanday tekshiruv yo‘qligi"
        ],
        "correctAnswer": "Faqat bitta usuldan foydalanish"
    },
    {
        "question": "Parolni himoyalashning eng yaxshi usuli?",
        "options": [
            "Xeshlash",
            "Ochig‘icha saqlash",
            "Faylga yozish",
            "Qog‘ozga yozish"
        ],
        "correctAnswer": "Xeshlash"
    },
    {
        "question": "Xesh funksiyaning asosiy vazifasi?",
        "options": [
            "Ma’lumotni bir yo‘nalishda o‘zgartirish",
            "Ma’lumotni shifrlash",
            "Ma’lumotni uzatish",
            "Ma’lumotni o‘chirish"
        ],
        "correctAnswer": "Ma’lumotni bir yo‘nalishda o‘zgartirish"
    },
    {
        "question": "Parolni tiklab bo‘lmasligi nimaga bog‘liq?",
        "options": [
            "Bir tomonlama funksiyaga",
            "Kalit uzunligiga",
            "Algoritm tezligiga",
            "Tarmoq tezligiga"
        ],
        "correctAnswer": "Bir tomonlama funksiyaga"
    },
    {
        "question": "Brute-force hujumi nimaga qaratilgan?",
        "options": [
            "Parolni taxmin qilishga",
            "Tizimni o‘chirishga",
            "Ma’lumotni o‘g‘irlashga",
            "Tarmoqni sekinlashtirishga"
        ],
        "correctAnswer": "Parolni taxmin qilishga"
    },
    {
        "question": "Phishing hujumi nima?",
        "options": [
            "Aldov orqali ma’lumot olish",
            "Virus tarqatish",
            "Tarmoqni bloklash",
            "Fayl shifrlash"
        ],
        "correctAnswer": "Aldov orqali ma’lumot olish"
    },
    {
        "question": "Parolni ochiq tarmoqda yuborish nimaga olib keladi?",
        "options": [
            "O‘g‘irlanish xavfiga",
            "Tezlik oshishiga",
            "Himoya kuchayishiga",
            "Muammo bo‘lmaydi"
        ],
        "correctAnswer": "O‘g‘irlanish xavfiga"
    },
    {
        "question": "HTTPS nima uchun kerak?",
        "options": [
            "Ma’lumotni shifrlab uzatish uchun",
            "Sayt dizayni uchun",
            "Tezlikni oshirish uchun",
            "Reklama uchun"
        ],
        "correctAnswer": "Ma’lumotni shifrlab uzatish uchun"
    },
    {
        "question": "Sertifikat nima?",
        "options": [
            "Saytning haqiqiyligini tasdiqlovchi hujjat",
            "Parol turi",
            "Login",
            "Token"
        ],
        "correctAnswer": "Saytning haqiqiyligini tasdiqlovchi hujjat"
    },
    {
        "question": "SSL/TLS qaysi qatlamda ishlaydi?",
        "options": [
            "Seans/Transport qatlamida",
            "Fizik qatlamda",
            "Ilova qatlamida",
            "Kanal qatlamida"
        ],
        "correctAnswer": "Seans/Transport qatlamida"
    },
    {
        "question": "MITM hujumi nimani anglatadi?",
        "options": [
            "Ikki tomon orasiga aralashish",
            "Virus tarqatish",
            "Tarmoqni bloklash",
            "Kompyuterni buzish"
        ],
        "correctAnswer": "Ikki tomon orasiga aralashish"
    },
    {
        "question": "Tizim yangilanishlari nima uchun kerak?",
        "options": [
            "Zaifliklarni yopish uchun",
            "Dizaynni o‘zgartirish uchun",
            "Reklama uchun",
            "Fayl ko‘paytirish uchun"
        ],
        "correctAnswer": "Zaifliklarni yopish uchun"
    },
    {
        "question": "Antivirus dastur vazifasi?",
        "options": [
            "Zararli dasturlarni aniqlash va yo‘q qilish",
            "Internetni tezlashtirish",
            "Dizayn qilish",
            "Parol saqlash"
        ],
        "correctAnswer": "Zararli dasturlarni aniqlash va yo‘q qilish"
    },
    {
        "question": "Firewall nimani nazorat qiladi?",
        "options": [
            "Tarmoq trafikini",
            "Fayl hajmini",
            "Ekran yorqinligini",
            "Ovoz balandligini"
        ],
        "correctAnswer": "Tarmoq trafikini"
    },
    {
        "question": "VPN nimani ta’minlaydi?",
        "options": [
            "Xavfsiz ulanishni",
            "Tezlikni oshirishni",
            "Reklamani ko‘paytirishni",
            "Viruslarni o‘chirishni"
        ],
        "correctAnswer": "Xavfsiz ulanishni"
    },
    {
        "question": "Zaxira nusxa nima uchun kerak?",
        "options": [
            "Ma’lumotni yo‘qotmaslik uchun",
            "Kompyuterni tezlashtirish uchun",
            "Viruslarni ko‘paytirish uchun",
            "Fayllarni yashirish uchun"
        ],
        "correctAnswer": "Ma’lumotni yo‘qotmaslik uchun"
    },
    {
        "question": "Bulutli saqlashning afzalligi?",
        "options": [
            "Masofadan kirish imkoniyati",
            "Faqat oflayn ishlash",
            "Xavfsizlik yo‘qligi",
            "Cheklangan joy"
        ],
        "correctAnswer": "Masofadan kirish imkoniyati"
    },
    {
        "question": "Ruxsatsiz kirish nimaga olib keladi?",
        "options": [
            "Xavfsizlik buzilishiga",
            "Tezlik oshishiga",
            "Dizayn yaxshilanishiga",
            "Muammo bo‘lmasligiga"
        ],
        "correctAnswer": "Xavfsizlik buzilishiga"
    },
    {
        "question": "Ijtimoiy injineriya hujumi?",
        "options": [
            "Insonlarni aldash orqali ma’lumot olish",
            "Virus yozish",
            "Tarmoqni o‘chirish",
            "Kompyuterni buzish"
        ],
        "correctAnswer": "Insonlarni aldash orqali ma’lumot olish"
    },
    {
        "question": "Mobil qurilma xavfsizligi uchun?",
        "options": [
            "PIN yoki biometrik qo‘llash",
            "Parol qo‘ymaslik",
            "Ochiq WiFi ishlatish",
            "Antivirus o‘chirish"
        ],
        "correctAnswer": "PIN yoki biometrik qo‘llash"
    },
    {
        "question": "WiFi parolini yashirish nimaga yordam beradi?",
        "options": [
            "Ruxsatsiz ulanishni kamaytiradi",
            "Tezlikni oshiradi",
            "Internetni o‘chiradi",
            "Muammo yo‘q"
        ],
        "correctAnswer": "Ruxsatsiz ulanishni kamaytiradi"
    },
    {
        "question": "Ma’lumotni shifrlash nimani beradi?",
        "options": [
            "Maxfiylikni",
            "Tezlikni",
            "Osonlikni",
            "Ochqlikni"
        ],
        "correctAnswer": "Maxfiylikni"
    },
    {
        "question": "Parolni boshqalar bilan bo‘lishish?",
        "options": [
            "Xavfsizlikni pasaytiradi",
            "Xavfsizlikni oshiradi",
            "Muammo yo‘q",
            "Tavsiya etiladi"
        ],
        "correctAnswer": "Xavfsizlikni pasaytiradi"
    },
    {
        "question": "USB qurilmalardan ehtiyot bo‘lish sababi?",
        "options": [
            "Virus olib kirishi mumkin",
            "Tezlikni oshiradi",
            "Foydali",
            "Muammo yo‘q"
        ],
        "correctAnswer": "Virus olib kirishi mumkin"
    },
    {
        "question": "Axborot xavfsizligining asosiy maqsadi?",
        "options": [
            "Ma’lumotni himoyalash",
            "Internetni tezlashtirish",
            "Fayllarni ko‘paytirish",
            "Kompyuterni yangilash"
        ],
        "correctAnswer": "Ma’lumotni himoyalash"
    },
    {
        "question": "Bell-Lapadula modeliga ko‘ra xavfsizlik darajasi qanday aniqlanadi?",
        "options": [
            "Eng past daraja olinadi",
            "Eng yuqori daraja olinadi",
            "O‘rtacha daraja olinadi",
            "Aniqlanmaydi"
        ],
        "correctAnswer": "Eng past daraja olinadi"
    },
    {
        "question": "Biba modeliga ko‘ra butunlik darajasi qanday aniqlanadi?",
        "options": [
            "Eng past daraja olinadi",
            "Eng yuqori daraja olinadi",
            "O‘rtacha daraja olinadi",
            "Aniqlanmaydi"
        ],
        "correctAnswer": "Eng past daraja olinadi"
    },
    {
        "question": "Protsessorda kalit generatori mavjud bo‘lgan shifrlash vositasi?",
        "options": [
            "Apparat",
            "Dasturiy",
            "Simmetrik",
            "Ochiq kalitli"
        ],
        "correctAnswer": "Apparat"
    },
    {
        "question": "Kompyuter resursidan foydalanadigan shifrlash vositasi?",
        "options": [
            "Dasturiy",
            "Apparat",
            "Simmetrik",
            "Ochiq kalitli"
        ],
        "correctAnswer": "Dasturiy"
    },
    {
        "question": "Dasturiy shifrlash vositasiga xos xususiyat?",
        "options": [
            "Yangilash imkoniyati mavjud",
            "Maxsus protsessor ishlatiladi",
            "Faqat apparatga bog‘liq",
            "Drayver talab qilinmaydi"
        ],
        "correctAnswer": "Yangilash imkoniyati mavjud"
    },
    {
        "question": "Apparat shifrlash vositasiga mos bo‘lmagan xususiyat?",
        "options": [
            "Yangilash imkoniyati mavjud",
            "Maxsus protsessor ishlatiladi",
            "Apparat autentifikatsiya",
            "Drayver talab qilinmaydi"
        ],
        "correctAnswer": "Yangilash imkoniyati mavjud"
    },
    {
        "question": "Apparat shifrlash vositasiga mos xususiyat?",
        "options": [
            "Drayver talab qilinmaydi",
            "Yangilanadi",
            "Parol hujumiga bardoshsiz",
            "Parol kalit bo‘ladi"
        ],
        "correctAnswer": "Drayver talab qilinmaydi"
    },
    {
        "question": "Diskni shifrlash xususiyati?",
        "options": [
            "Deyarli barcha fayllar shifrlanadi",
            "Har fayl alohida kalit",
            "Faqat kalit shifrlanadi",
            "Kripto fayl tizimi"
        ],
        "correctAnswer": "Deyarli barcha fayllar shifrlanadi"
    },
    {
        "question": "Faylni shifrlash xususiyati?",
        "options": [
            "Har fayl uchun turli kalit",
            "Hamma fayl shifrlanadi",
            "Swap space shifrlanadi",
            "Disk darajasida"
        ],
        "correctAnswer": "Har fayl uchun turli kalit"
    },
    {
        "question": "Ma’lumotni xavfsiz yo‘q qilish nima uchun kerak?",
        "options": [
            "Konfidensiallikni ta’minlash",
            "Butunlikni ta’minlash",
            "Foydalanuvchanlik",
            "Xotira bo‘shatish"
        ],
        "correctAnswer": "Konfidensiallikni ta’minlash"
    },
    {
        "question": "Qog‘oz ma’lumotni yo‘q qilishda mos bo‘lmagan usul?",
        "options": [
            "Ko‘mish",
            "Yoqish",
            "Kimyoviy",
            "Shreder"
        ],
        "correctAnswer": "Ko‘mish"
    },
    {
        "question": "Ekologiyaga zararli usul?",
        "options": [
            "Yoqish",
            "Ko‘mish",
            "Kimyoviy",
            "Shreder"
        ],
        "correctAnswer": "Yoqish"
    },
    {
        "question": "Recuva va TestDisk nimaga xos?",
        "options": [
            "Ma’lumot tiklash dasturlari",
            "Bepul antivirus",
            "Zaxira dasturlari",
            "Shifrlash"
        ],
        "correctAnswer": "Ma’lumot tiklash dasturlari"
    },
    {
        "question": "Kriptografik kalit o‘lchovi?",
        "options": [
            "Bit",
            "Belgilar",
            "Kbayt",
            "Metr"
        ],
        "correctAnswer": "Bit"
    },
    {
        "question": "Parol uzunligi o‘lchovi?",
        "options": [
            "Belgilar soni",
            "Bit",
            "Kbayt",
            "Metr"
        ],
        "correctAnswer": "Belgilar soni"
    },
    {
        "question": "Matematik muammoga asoslangan shifr?",
        "options": [
            "Ochiq kalitli",
            "Simmetrik",
            "Blokli",
            "Oqimli"
        ],
        "correctAnswer": "Ochiq kalitli"
    },
    {
        "question": "Xesh funksiyada kolliziya nima?",
        "options": [
            "Ikki matn bir xil xeshga ega bo‘lishi",
            "Cheksiz uzunlik",
            "Tezkorlik",
            "Har xil chiqish"
        ],
        "correctAnswer": "Ikki matn bir xil xeshga ega bo‘lishi"
    },
    {
        "question": "Xeshlangan ma’lumot?",
        "options": [
            "Xesh qiymat",
            "Kalit",
            "Shifrmatn",
            "Parol"
        ],
        "correctAnswer": "Xesh qiymat"
    },
    {
        "question": "Parol kalitdan nimasi bilan farq qiladi?",
        "options": [
            "Tasodifiylik darajasi",
            "Uzunligi",
            "Belgilari",
            "Samaradorligi"
        ],
        "correctAnswer": "Tasodifiylik darajasi"
    },
    {
        "question": "Sezar shifrini ochish uchun urinishlar soni?",
        "options": [
            "25",
            "26!",
            "13",
            "252"
        ],
        "correctAnswer": "25"
    },
    {
        "question": "Elektron imzo muolajalari?",
        "options": [
            "Imzoni shakllantirish va tekshirish",
            "Shifrlash va deshifrlash",
            "Xeshlash",
            "Deshifrlash"
        ],
        "correctAnswer": "Imzoni shakllantirish va tekshirish"
    },
    {
        "question": "Elka orqali qarash hujumi qaysi usulga?",
        "options": [
            "Bilishga asoslangan",
            "Egalikka asoslangan",
            "Biometrik",
            "Token"
        ],
        "correctAnswer": "Bilishga asoslangan"
    },
    {
        "question": "Sotsial injineriya qaysi usulga?",
        "options": [
            "Bilishga asoslangan",
            "Egalikka asoslangan",
            "Biometrik",
            "Token"
        ],
        "correctAnswer": "Bilishga asoslangan"
    },
    {
        "question": "Yo‘qolsa eng arzon almashtiriladigan usul?",
        "options": [
            "Bilishga asoslangan",
            "Egalikka asoslangan",
            "Biometrik",
            "Token"
        ],
        "correctAnswer": "Bilishga asoslangan"
    },
    {
        "question": "Qalbakilashtirish hujumi qaysi usulga?",
        "options": [
            "Biometrik",
            "Bilishga asoslangan",
            "Egalikka asoslangan",
            "Token"
        ],
        "correctAnswer": "Biometrik"
    },
    {
        "question": "Qayta foydalaniladigan saqlovchi tozalash?",
        "options": [
            "Qayta yozish va formatlash",
            "Fizik yo‘q qilish",
            "Maydalash",
            "Yanchish"
        ],
        "correctAnswer": "Qayta yozish va formatlash"
    },
    {
        "question": "To‘liq kafolatlangan yo‘q qilish usuli?",
        "options": [
            "Fizik yo‘q qilish",
            "Qayta yozish",
            "Formatlash",
            "O‘chirish"
        ],
        "correctAnswer": "Fizik yo‘q qilish"
    },
    {
        "question": "Axborot bahosi nimaga qarab aniqlanadi?",
        "options": [
            "Buzilganda ko‘riladigan zarar",
            "Muhimlik",
            "Himoyalanganlik",
            "Qurilma qiymati"
        ],
        "correctAnswer": "Buzilganda ko‘riladigan zarar"
    },
    {
        "question": "Ruxsat etilgan foydalanish?",
        "options": [
            "Qoidalarni buzmaydigan",
            "Qoidani buzadigan",
            "Butunlikni buzmaydigan",
            "Maxfiylikni buzmaydigan"
        ],
        "correctAnswer": "Qoidalarni buzmaydigan"
    },
    {
        "question": "Butunlikni ta’minlash usullari?",
        "options": [
            "Xesh va MAC",
            "Shifrlash",
            "Asimetrik",
            "CRC"
        ],
        "correctAnswer": "Xesh va MAC"
    },
    {
        "question": "Biba modeli (I(O1)<I(O2)) natija?",
        "options": [
            "I(O1)",
            "I(O2)",
            "Bog‘liq emas",
            "Yetarli emas"
        ],
        "correctAnswer": "I(O1)"
    },
    {
        "question": "Biba modeli (I(O1)>I(O2)>I(O3)) natija?",
        "options": [
            "I(O3)",
            "I(O2)",
            "I(O1)",
            "Yetarli emas"
        ],
        "correctAnswer": "I(O3)"
    },
    {
        "question": "Bell-Lapadula (L(O1)<L(O2)) natija?",
        "options": [
            "L(O2)",
            "L(O1)",
            "Bog‘liq emas",
            "Yetarli emas"
        ],
        "correctAnswer": "L(O2)"
    },
    {
        "question": "Bell-Lapadula (L(O1)<L(O2)<L(O3)) natija?",
        "options": [
            "L(O3)",
            "L(O1)",
            "L(O2)",
            "Yetarli emas"
        ],
        "correctAnswer": "L(O3)"
    },
    {
        "question": "Eng ishonchli yo‘q qilish usuli?",
        "options": [
            "Takroriy qayta yozish",
            "Formatlash",
            "Shift+Delete",
            "Delete"
        ],
        "correctAnswer": "Takroriy qayta yozish"
    },
    {
        "question": "Qaysilari topologiya emas?",
        "options": [
            "LAN, GAN, OSI",
            "Yulduz, WAN",
            "Daraxt, IP",
            "Shina, UDP"
        ],
        "correctAnswer": "LAN, GAN, OSI"
    },
    {
        "question": "OSI modeli nechta sath?",
        "options": [
            "7",
            "4",
            "6",
            "5"
        ],
        "correctAnswer": "7"
    },
    {
        "question": "TCP/IP modeli nechta sath?",
        "options": [
            "4",
            "7",
            "6",
            "5"
        ],
        "correctAnswer": "4"
    },
    {
        "question": "Qaysilari tarmoq turi emas?",
        "options": [
            "Yulduz, WAN, TCP/IP",
            "LAN, GAN",
            "WAN, MAN",
            "PAN, CAN"
        ],
        "correctAnswer": "Yulduz, WAN, TCP/IP"
    },
    {
        "question": "Eng kichik tarmoq turi?",
        "options": [
            "PAN",
            "LAN",
            "CAN",
            "MAN"
        ],
        "correctAnswer": "PAN"
    },
    {
        "question": "Qaysi topologiyada bitta uzel butun tarmoqni o‘chiradi?",
        "options": [
            "Halqa",
            "Yulduz",
            "Shina",
            "Mesh"
        ],
        "correctAnswer": "Halqa"
    },
    {
        "question": "IPv4 nechta bit?",
        "options": [
            "32",
            "64",
            "128",
            "4"
        ],
        "correctAnswer": "32"
    },
    {
        "question": "IPv6 nechta bit?",
        "options": [
            "128",
            "32",
            "64",
            "4"
        ],
        "correctAnswer": "128"
    },
    {
        "question": "Domenni IP ga o‘giruvchi xizmat?",
        "options": [
            "DNS",
            "TCP/IP",
            "OSI",
            "UDP"
        ],
        "correctAnswer": "DNS"
    },
    {
        "question": "Zarar keltiruvchi yashirin hodisa?",
        "options": [
            "Tahdid",
            "Zaiflik",
            "Hujum",
            "Aktiv"
        ],
        "correctAnswer": "Tahdid"
    },
    {
        "question": "Kutilmagan kamchilik?",
        "options": [
            "Zaiflik",
            "Tahdid",
            "Hujum",
            "Kamchilik"
        ],
        "correctAnswer": "Zaiflik"
    },
    {
        "question": "Zaiflikdan foydalanib buzish?",
        "options": [
            "Hujum",
            "Zaiflik",
            "Tahdid",
            "Zarar"
        ],
        "correctAnswer": "Hujum"
    },
    {
        "question": "Tarmoq xavfsizligiga olib kelmaydigan sabab?",
        "options": [
            "Router ishlatmaslik",
            "Noto‘g‘ri sozlash",
            "Zaif dizayn",
            "Texnologik zaiflik"
        ],
        "correctAnswer": "Router ishlatmaslik"
    },
    {
        "question": "Ichki xodimlar tahdidi?",
        "options": [
            "Ichki tahdid",
            "Tashqi tahdid",
            "Maxsus",
            "Qasddan"
        ],
        "correctAnswer": "Ichki tahdid"
    },
    {
        "question": "Tarmoq buzilishi biznesga ta’siri?",
        "options": [
            "Faoliyat buzilishi va huquqiy javobgarlik",
            "Faqat o‘g‘irlik",
            "Faqat qurilma buzilishi",
            "Faqat huquqiy"
        ],
        "correctAnswer": "Faoliyat buzilishi va huquqiy javobgarlik"
    },
    {
        "question": "Razvedka hujumlari bu?",
        "options": [
            "Asosiy hujumlarni osonlashtirish uchun axborot to‘plash",
            "Tarmoqqa kirishga urinish",
            "Xizmatni cheklash",
            "Fizik buzish"
        ],
        "correctAnswer": "Asosiy hujumlarni osonlashtirish uchun axborot to‘plash"
    },
    {
        "question": "Kirish hujumlari bu?",
        "options": [
            "Tarmoqqa turli usullar bilan kirishga urinish",
            "Axborot to‘plash",
            "Xizmatni cheklash",
            "Zaiflik qidirish"
        ],
        "correctAnswer": "Tarmoqqa turli usullar bilan kirishga urinish"
    },
    {
        "question": "Xizmatdan voz kechish hujumlari?",
        "options": [
            "Xizmatni cheklashga urinish",
            "Tarmoqqa kirish",
            "Axborot yig‘ish",
            "Zaiflik qidirish"
        ],
        "correctAnswer": "Xizmatni cheklashga urinish"
    },
    {
        "question": "Sniffer, port skanerlash qaysi tur?",
        "options": [
            "Razvedka hujumlari",
            "Kirish hujumlari",
            "DOS",
            "Zararli dastur"
        ],
        "correctAnswer": "Razvedka hujumlari"
    },
    {
        "question": "Foydali ko‘rinib zarar yetkazuvchi dastur?",
        "options": [
            "Troyan otlari",
            "Adware",
            "Spyware",
            "Backdoor"
        ],
        "correctAnswer": "Troyan otlari"
    },
    {
        "question": "Reklama kuzatuvchi dastur?",
        "options": [
            "Adware",
            "Troyan",
            "Spyware",
            "Backdoor"
        ],
        "correctAnswer": "Adware"
    },
    {
        "question": "Avtorizatsiyasiz kirish beruvchi dastur?",
        "options": [
            "Backdoor",
            "Adware",
            "Troyan",
            "Spyware"
        ],
        "correctAnswer": "Backdoor"
    },
    {
        "question": "Foydalanuvchi ma’lumotini o‘g‘irlaydi?",
        "options": [
            "Spyware",
            "Backdoor",
            "Adware",
            "Troyan"
        ],
        "correctAnswer": "Spyware"
    },
    {
        "question": "Shart bajarilganda faollashadi?",
        "options": [
            "Backdoor",
            "Adware",
            "Troyan",
            "Spyware"
        ],
        "correctAnswer": "Backdoor"
    },
    {
        "question": "Obro‘sizlantirilgan kompyuterlar tarmog‘i?",
        "options": [
            "Botnet",
            "Backdoor",
            "Adware",
            "Troyan"
        ],
        "correctAnswer": "Botnet"
    },
    {
        "question": "Fayllarni shifrlab to‘lov talab qiladi?",
        "options": [
            "Ransomware",
            "Backdoor",
            "Adware",
            "Troyan"
        ],
        "correctAnswer": "Ransomware"
    },
    {
        "question": "Ichki va tashqi tarmoqni ajratuvchi vosita?",
        "options": [
            "Tarmoqlararo ekran",
            "Antivirus",
            "VPN",
            "Router"
        ],
        "correctAnswer": "Tarmoqlararo ekran"
    },
    {
        "question": "Paket filterlari OSI qaysi sath?",
        "options": [
            "Tarmoq sathi",
            "Transport",
            "Ilova",
            "Kanal"
        ],
        "correctAnswer": "Tarmoq sathi"
    },
    {
        "question": "Tashqi foydalanuvchilardan himoya?",
        "options": [
            "Tarmoqlararo ekran",
            "Antivirus",
            "VPN",
            "Router"
        ],
        "correctAnswer": "Tarmoqlararo ekran"
    },
    {
        "question": "Ichki foydalanuvchilarni cheklash?",
        "options": [
            "Tarmoqlararo ekran",
            "Antivirus",
            "VPN",
            "Router"
        ],
        "correctAnswer": "Tarmoqlararo ekran"
    },
    {
        "question": "Paketlarni parametrlar bo‘yicha filtrlash?",
        "options": [
            "Tarmoqlararo ekran",
            "Antivirus",
            "VPN",
            "Router"
        ],
        "correctAnswer": "Tarmoqlararo ekran"
    },
    {
        "question": "Ikki uzel orasida himoyalangan tunnel?",
        "options": [
            "VPN",
            "Firewall",
            "Antivirus",
            "Router"
        ],
        "correctAnswer": "VPN"
    },
    {
        "question": "Butunlik, maxfiylik va autentifikatsiya?",
        "options": [
            "VPN",
            "Firewall",
            "Antivirus",
            "Router"
        ],
        "correctAnswer": "VPN"
    },
    {
        "question": "Paket ichiga shifrlangan paket joylash?",
        "options": [
            "VPN",
            "Firewall",
            "Antivirus",
            "Router"
        ],
        "correctAnswer": "VPN"
    },
    {
        "question": "VPN kanal sathi protokollari?",
        "options": [
            "L2F, L2TP",
            "PPTP, TLS",
            "TLS, TCP",
            "L2TP, IP"
        ],
        "correctAnswer": "L2F, L2TP"
    },
    {
        "question": "VPN tarmoq sathi protokoli?",
        "options": [
            "IPSec",
            "L2TP",
            "TCP",
            "PPTP"
        ],
        "correctAnswer": "IPSec"
    },
    {
        "question": "VPN seans sathi protokoli?",
        "options": [
            "TLS",
            "L2TP",
            "TCP",
            "PPTP"
        ],
        "correctAnswer": "TLS"
    },
    {
        "question": "Ochiq tarmoqda himoyalangan tarmoq?",
        "options": [
            "VPN",
            "Firewall",
            "Antivirus",
            "Router"
        ],
        "correctAnswer": "VPN"
    },
    {
        "question": "IP paketni to‘liq shifrlash?",
        "options": [
            "VPN",
            "Firewall",
            "Antivirus",
            "Router"
        ],
        "correctAnswer": "VPN"
    },
    {
        "question": "Taqiqlangan so‘rovni nazoratlash?",
        "options": [
            "Firewall",
            "VPN",
            "Antivirus",
            "Router"
        ],
        "correctAnswer": "Firewall"
    },
    {
        "question": "Tomonlarni autentifikatsiyalash?",
        "options": [
            "VPN",
            "Firewall",
            "Antivirus",
            "Router"
        ],
        "correctAnswer": "VPN"
    },
    {
        "question": "Axborot butunligini tekshirish?",
        "options": [
            "VPN",
            "Firewall",
            "Antivirus",
            "Router"
        ],
        "correctAnswer": "VPN"
    },
    {
        "question": "Faqat ruxsat etilgan saytlarga kirish?",
        "options": [
            "Firewall",
            "VPN",
            "Antivirus",
            "Router"
        ],
        "correctAnswer": "Firewall"
    },
    {
        "question": "Tasodifiy tahdidlar?",
        "options": [
            "Texnik nosozliklar",
            "Ruxsatsiz foydalanish",
            "Viruslar",
            "Josuslik"
        ],
        "correctAnswer": "Texnik nosozliklar"
    },
    {
        "question": "Deshifrlash bu?",
        "options": [
            "Yopiq axborotni ochiq axborotga aylantirish",
            "Sir tarqatish",
            "Ruxsatsiz foydalanish",
            "Noqonuniy ulanish"
        ],
        "correctAnswer": "Yopiq axborotni ochiq axborotga aylantirish"
    },
    {
        "question": "Axborotni nimadan himoyalash kerak?",
        "options": [
            "Ruxsatsiz foydalanishdan, buzilishdan, yo‘q qilinishdan",
            "Qonuniy foydalanishdan",
            "Qayta ishlashdan",
            "Uzatishdan"
        ],
        "correctAnswer": "Ruxsatsiz foydalanishdan, buzilishdan, yo‘q qilinishdan"
    },
    {
        "question": "Maxfiylikni ta’minlovchi algoritmlar?",
        "options": [
            "RSA, DES, AES",
            "AES, CRC",
            "MD5, DES",
            "ERI, MAC"
        ],
        "correctAnswer": "RSA, DES, AES"
    },
    {
        "question": "Axborot strukturasi saqlanishi?",
        "options": [
            "Butunlik",
            "Konfidensiallik",
            "Foydalanuvchanlik",
            "Ixchamlik"
        ],
        "correctAnswer": "Butunlik"
    },
    {
        "question": "Foydalanuvchanlikka qarshi tahdid?",
        "options": [
            "DDOS",
            "Nusxalash",
            "Modifikatsiya",
            "MITM"
        ],
        "correctAnswer": "DDOS"
    },
    {
        "question": "Shifrlash bu?",
        "options": [
            "Ochiq axborotni yopiq axborotga aylantirish",
            "Kod yig‘ish",
            "O‘zgartirish",
            "Jarayon"
        ],
        "correctAnswer": "Ochiq axborotni yopiq axborotga aylantirish"
    },
    {
        "question": "VPN asosiy afzalligi?",
        "options": [
            "Kuzatuvchilar uchun qiyinlik",
            "Osonlik",
            "Qulaylik",
            "Imkoniyat ko‘pligi"
        ],
        "correctAnswer": "Kuzatuvchilar uchun qiyinlik"
    },
    {
        "question": "Global simsiz tarmoq?",
        "options": [
            "Butun dunyo",
            "Binolar",
            "Shahar",
            "Yaqin tarmoq"
        ],
        "correctAnswer": "Butun dunyo"
    },
    {
        "question": "Dinamik parol?",
        "options": [
            "Bir martalik",
            "Ko‘p martalik",
            "Login",
            "Murakkab"
        ],
        "correctAnswer": "Bir martalik"
    },
    {
        "question": "Eng ko‘p ishlatiladigan autentifikatsiya?",
        "options": [
            "Parol",
            "Token",
            "Biometrik",
            "Smart karta"
        ],
        "correctAnswer": "Parol"
    },
    {
        "question": "Zararli dasturlar?",
        "options": [
            "Viruslar va mantiqiy bombalar",
            "Litsenziyasiz dastur",
            "Tarmoq kartasi",
            "Qurilma"
        ],
        "correctAnswer": "Viruslar va mantiqiy bombalar"
    },
    {
        "question": "Zararli dasturlarni ko‘rsating?",
        "options": [
            "Kompyuter viruslari va mantiqiy bombalar",
            "Litsenziyasiz dasturlar va qurilmalar",
            "Tarmoq kartasi va dasturlar",
            "Internet tarmog‘i dasturlari"
        ],
        "correctAnswer": "Kompyuter viruslari va mantiqiy bombalar"
    },
    {
        "question": "RSA shifrlash algoritmida tanlangan p va q sonlarga qanday talab qo‘yiladi?",
        "options": [
            "Tub bo‘lishi",
            "O‘zaro tub bo‘lishi",
            "Butun son bo‘lishi",
            "Toq son bo‘lishi"
        ],
        "correctAnswer": "Tub bo‘lishi"
    },
    {
        "question": "12 soni bilan o‘zaro tub bo‘lgan sonlarni ko‘rsating?",
        "options": [
            "5, 7, 11",
            "13, 4, 7",
            "11, 2, 5",
            "13, 11, 10"
        ],
        "correctAnswer": "5, 7, 11"
    },
    {
        "question": "Bluetooth standarti qaysi simsiz tarmoq turiga kiradi?",
        "options": [
            "Shaxsiy simsiz tarmoq",
            "Lokal simsiz tarmoq",
            "Mintaqaviy simsiz tarmoq",
            "Global simsiz tarmoq"
        ],
        "correctAnswer": "Shaxsiy simsiz tarmoq"
    },
    {
        "question": "Parolga “tuz” qo‘shib xeshlashdan maqsad?",
        "options": [
            "Tahdidchi ishini oshirish",
            "Murakkab parol hosil qilish",
            "Murakkab xesh qiymat hosil qilish",
            "Yana bir maxfiy parametr kiritish"
        ],
        "correctAnswer": "Tahdidchi ishini oshirish"
    },
    {
        "question": "Parol kalitdan nimasi bilan farq qiladi?",
        "options": [
            "Tasodifiylik darajasi bilan",
            "Uzunligi bilan",
            "Belgilari bilan",
            "Samaradorligi bilan"
        ],
        "correctAnswer": "Tasodifiylik darajasi bilan"
    },
    {
        "question": "Kriptografik himoya axborotning qaysi xususiyatini ta’minlamaydi?",
        "options": [
            "Foydalanuvchanlikni",
            "Butunlikni",
            "Maxfiylikni",
            "Autentifikatsiyani"
        ],
        "correctAnswer": "Foydalanuvchanlikni"
    },
    {
        "question": "ERI tizimida imzoni qalbakilashtirish nimaga bog‘liq?",
        "options": [
            "Buning imkoni yo‘q",
            "Matematik muammoga",
            "Ochiq kalit uzunligiga",
            "Matn konfidensialligiga"
        ],
        "correctAnswer": "Buning imkoni yo‘q"
    },
    {
        "question": "Foydalanuvchini nomi bo‘yicha aniqlash jarayoni?",
        "options": [
            "Identifikatsiya",
            "Autentifikatsiya",
            "Avtorizatsiya",
            "Ma’murlash"
        ],
        "correctAnswer": "Identifikatsiya"
    },
    {
        "question": "Sub’ektga resurslardan foydalanish huquqi berish?",
        "options": [
            "Avtorizatsiya",
            "Autentifikatsiya",
            "Identifikatsiya",
            "Haqiqiylikni ta’minlash"
        ],
        "correctAnswer": "Avtorizatsiya"
    },
    {
        "question": "Lokal simsiz tarmoqqa tegishli texnologiya?",
        "options": [
            "WI-FI",
            "WI-MAX",
            "GSM",
            "Bluetooth"
        ],
        "correctAnswer": "WI-FI"
    },
    {
        "question": "Elektron axborot saqlovchilardan qayta foydalanishli ma’lumotlarni yo‘q qilish usullari orasidan eng ishonchlisini aniqlang.",
        "options": [
            "Takroriy qayta yozish",
            "Formatlash",
            "Delete buyrug‘i yordamida o‘chirish",
            "Shift+Delete buyrug‘i yordamida o‘chirish"
        ],
        "correctAnswer": "Takroriy qayta yozish"
    },
    {
        "question": "5 XOR 8 = ?",
        "options": [
            "13",
            "10",
            "11",
            "40"
        ],
        "correctAnswer": "13"
    },
    {
        "question": "Sign() funksiyasi uchun to‘g‘ri ifoda?",
        "options": [
            "Sign(X(H), a)",
            "Sign(H, a)",
            "Sign(H, b)",
            "Sign(X(H), b)"
        ],
        "correctAnswer": "Sign(X(H), a)"
    },
    {
        "question": "Ma’lumotni to‘liq qayta tiklash qachon samarali?",
        "options": [
            "Saqlagichda ma’lumot qayta yozilmagan bo‘lsa",
            "Formatlash asosida o‘chirilgan bo‘lsa",
            "Delete bilan o‘chirilgan bo‘lsa",
            "Shift+Delete bilan o‘chirilgan bo‘lsa"
        ],
        "correctAnswer": "Saqlagichda ma’lumot qayta yozilmagan bo‘lsa"
    },
    {
        "question": "Tarmoqqa ulanib bajariladigan zaxiralash turi?",
        "options": [
            "Issiq zaxiralash",
            "Ichki zaxiralash",
            "Iliq zaxiralash",
            "Sovuq zaxiralash"
        ],
        "correctAnswer": "Issiq zaxiralash"
    },
    {
        "question": "512 bit kirish, 128 bit chiqish bo‘lsa, 1024 bit kirish chiqishi?",
        "options": [
            "Hisoblash uchun shartlar yetarli emas",
            "128",
            "64",
            "256"
        ],
        "correctAnswer": "Hisoblash uchun shartlar yetarli emas"
    },
    {
        "question": "Sotsial injeneriya qaysi autentifikatsiyaga qaratilgan?",
        "options": [
            "Parolga asoslangan",
            "Biometrik",
            "Ko‘z qorachig‘i",
            "Token"
        ],
        "correctAnswer": "Parolga asoslangan"
    },
    {
        "question": "2 XOR 6 = ?",
        "options": [
            "4",
            "6",
            "8",
            "12"
        ],
        "correctAnswer": "4"
    },
    {
        "question": "VPN arxitektura turlari?",
        "options": [
            "Kanal, tarmoq, seans sathidagi VPN",
            "Dasturiy va apparat VPN",
            "Router asosidagi VPN",
            "Korporativ VPN"
        ],
        "correctAnswer": "Kanal, tarmoq, seans sathidagi VPN"
    },
    {
        "question": "6 XOR 6 = ?",
        "options": [
            "0",
            "6",
            "12",
            "36"
        ],
        "correctAnswer": "0"
    },
    {
        "question": "Parolga xos bo‘lmagan xususiyat?",
        "options": [
            "Klaviatura orqali barcha belgilarni qabul qiladi",
            "PIN kod parolning xususiy holati",
            "Ixtiyoriy uzunlikda bo‘lishi mumkin",
            "Faqat bosma belgilar"
        ],
        "correctAnswer": "Klaviatura orqali barcha belgilarni qabul qiladi"
    },
    {
        "question": "Tarmoqlararo ekran turlari?",
        "options": [
            "Paket filtri, ekspert filtri, ilova proksilari",
            "Yagona himoya sxemasi",
            "Apparat-dasturiy",
            "Proksi nazorati"
        ],
        "correctAnswer": "Paket filtri, ekspert filtri, ilova proksilari"
    },
    {
        "question": "GSM tarmog‘ida shifrlash algoritmi?",
        "options": [
            "A5/1",
            "RSA",
            "DES",
            "ГОСТ"
        ],
        "correctAnswer": "A5/1"
    },
    {
        "question": "Xavfsizlik siyosati xususiyatlari?",
        "options": [
            "Tushunarli va amaliy",
            "Barcha javoblar to‘g‘ri",
            "Qisqa va aniq",
            "Iqtisodiy asoslangan"
        ],
        "correctAnswer": "Tushunarli va amaliy"
    },
    {
        "question": "Biba modelida I(O1)>I(O2) bo‘lsa, natija?",
        "options": [
            "I(O2)",
            "Yetarli emas",
            "Bog‘liq emas",
            "I(O1)"
        ],
        "correctAnswer": "I(O2)"
    },
    {
        "question": "Ichki tarmoqni himoyalovchi vosita?",
        "options": [
            "Tarmoqlararo ekran",
            "Antivirus",
            "Router",
            "VPN"
        ],
        "correctAnswer": "Tarmoqlararo ekran"
    },
    {
        "question": "ERI qaysi xususiyatni ta’minlamaydi?",
        "options": [
            "Konfidensiallik",
            "Yaxlitlik",
            "Qalbakilashtirishdan himoya",
            "Rad etishdan himoya"
        ],
        "correctAnswer": "Konfidensiallik"
    }
];