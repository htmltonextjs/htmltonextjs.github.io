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


if __name__ == "__main__":

    input_path = './data/member.tsx'
    output_path = './data/member_sorted.tsx'

    # read
    content = Path(input_path).read_text(encoding='utf-8')
    members_section = re.search(r'export const members:.*?\[\] = \[(.*?)\];', content, re.DOTALL)
    if not members_section:
        raise ValueError("read error")    
    members_str = members_section.group(1)
    member_blocks = re.findall(r'(  {\n(?: {4}.*\n)+  })', members_str)

    # sort
    sorted_blocks = sorted(member_blocks, key=get_sort_key)
    
    # format
    members_section = ',\n'.join(sorted_blocks).rstrip(',\n')
    
    # replace & write
    new_content = re.sub(
        r'(export const members:.*?\[\] = \[)(.*?)(\];)',
        r'\1\n' + members_section + r'\3',
        content,
        flags=re.DOTALL
    )
    Path(output_path).write_text(new_content, encoding='utf-8')
    print(f"{output_path}")
