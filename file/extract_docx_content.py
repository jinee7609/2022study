import zipfile, os, xml.etree.ElementTree as ET

files = ['01_middle_02.docx', '02_high_02.docx']
ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
script_dir = os.path.dirname(os.path.abspath(__file__))

for name in files:
    path = os.path.abspath(os.path.join(script_dir, name))
    print('===', name, '===')
    with zipfile.ZipFile(path) as z:
        root = ET.fromstring(z.read('word/document.xml'))
        texts = []
        for p in root.findall('.//w:p', ns):
            paras = []
            for t in p.findall('.//w:t', ns):
                if t.text:
                    paras.append(t.text)
            text = ''.join(paras).strip()
            if text:
                texts.append(text)
        for line in texts[:220]:
            print(line)
        print('--- paragraphs', len(texts))
        print()
