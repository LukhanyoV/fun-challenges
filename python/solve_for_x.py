# solve for x
# 2x-4=0
import re
from functools import reduce

def solve_x(txt):
    # regex_char = re.compile("([-|\+])(?=[a-z])")
    # print(regex_char.findall(txt))
    # txt = re.sub(regex_char, lambda c: "1"+c, txt)
    print("txt:", txt)
    sides = txt.split("=")
    # return list(map(lambda side: side[::-1], sides))
    
    regex_strn = re.compile(r'([-|\+]?[0-9]+)(?=[a-z])')
    regex_int = re.compile(r'([-|\+]?[0-9]+)(?![a-z])')
    
    ints = list(filter(lambda a: a, list(map(lambda side: regex_int.findall(side), sides))))
    ints = [reduce(lambda a,b:a+b, lst, 0) for lst in [[int(x) for x in lst] for lst in ints]]
    new_ints = [] 
    for i, x in enumerate(ints):
        if(len(ints)) > 1:
            new_ints.append(x if i != 0 else -x)

    strn = list(filter(lambda a: a, list(map(lambda side: regex_strn.findall(side), sides))))
    strn = [reduce(lambda a,b:a+b, lst, 0) for lst in [[int(x) for x in lst] for lst in strn]]
    new_strn = [] 
    for i, x in enumerate(strn):
        if(len(ints)) > 1:
            new_strn.append(-x if i != 0 else x)
            
    ints = reduce(lambda a,b:a+b, new_ints, 0)
    strn = reduce(lambda a,b:a+b, new_strn, 0)
    
    print("strn:", new_strn)
    print("ints:", new_ints)
    print("strn:", strn)
    print("ints:", ints)
    return ints/strn
    
print(solve_x("1x-2=0"))
print("---")
print(solve_x("2x-4=2"))