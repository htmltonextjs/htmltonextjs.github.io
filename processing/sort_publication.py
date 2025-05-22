import re
from pathlib import Path

def get_sort_key(block):

    name = block.split('name:')[1].split("'")[1]

    keys_match = re.search(r'keys: \[(.*?)\]', block, re.DOTALL)

    if not keys_match:
        return ("0000", "3000")
    
    keys = [k.strip().replace("'", "").replace('"', "") 
            for k in keys_match.group(1).split(',')]
    
    join_year = keys[0] if len(keys) > 0 and re.match(r'^\d{4}$', keys[0]) else "0000"
    join_year = str(3000-int(join_year))
    leave_year = keys[1] if len(keys) > 1 and re.match(r'^\d{4}$', keys[1]) else "3000"
    leave_year = str(3000-int(leave_year))

    return (join_year, leave_year, name)


def get_sort_key(block):

    year_match = re.search(r"'(\d{4})'", block)
    year = int(year_match.group(1)) if year_match else 0
    
    return (
        3000 - year,
        block.split('title:')[1].split("'")[1]
    )



if __name__ == "__main__":

    input_path = './data/publication.tsx'
    output_path = './data/publication_sorted.tsx'

    # read
    content = Path(input_path).read_text(encoding='utf-8')
    publications_section = re.search(r'export const publications:.*?\[\] = \[(.*?)\];', content, re.DOTALL)
    if not publications_section:
        raise ValueError("read error")    
    publications_str = publications_section.group(1)
    open_source_blocks = re.findall(r'(  {\n(?: {4}.*\n)+  })', publications_str)

    # sort
    sorted_blocks = sorted(open_source_blocks, key=get_sort_key)
    
    # format
    publications_section = ',\n'.join(sorted_blocks).rstrip(',\n')
    
    # replace & write
    new_content = re.sub(
        r'(export const publications:.*?\[\] = \[)(.*?)(\];)',
        r'\1\n' + publications_section + r'\3',
        content,
        flags=re.DOTALL
    )
    Path(output_path).write_text(new_content, encoding='utf-8')
    print(f"{output_path}")
