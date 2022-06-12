# share oranges
# each person get equal number of oranges

list = [["Lukhanyo", "Vakele", "Master"], [1, 2, 3, 4, 5, 6, 7, 8, 9]]

def share_oranges(list):
    names = list[0]
    oranges = list[1]
    n = len(oranges)//len(names)
    newList = []
    i = 0
    j = n
    for name in names:
        newList.append([name, oranges[i:j]])
        i+=n
        j+=n
    return newList

print(share_oranges(list))