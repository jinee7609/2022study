from pypdf import PdfReader
import os

files = ['01_2022_middle.pdf', '02_2022_high.pdf']
for name in files:
    path = os.path.abspath(os.path.join(os.getcwd(), name))
    print('FILE', name, path)
    reader = PdfReader(path)
    print('PAGES', len(reader.pages))
    for i, page in enumerate(reader.pages):
        text = page.extract_text() or ''
        print('--- PAGE', i + 1, '---')
        print(text[:5000])
        print('\n')
    print('========================')
