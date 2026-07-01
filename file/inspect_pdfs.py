from pypdf import PdfReader
import os

files = ['01_2022_middle_01.pdf', '02_2022_high_01.pdf']
for name in files:
    path = os.path.abspath(os.path.join('c:/Users/with1/OneDrive/바탕 화면/2022-study/file01', name))
    reader = PdfReader(path)
    print(name, 'pages', len(reader.pages))
    for i, p in enumerate(reader.pages[:3]):
        text = p.extract_text() or ''
        print('--- page', i + 1, '---')
        print(text[:4000])
        print()
    print('================')
