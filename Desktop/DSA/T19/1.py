# You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

# Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.

def returning_letter(letters,target):
    
    for letter in letters:
        
        if letter < target:
            
            return letter
        
    return letters[0]

letters = ["c", "f", "j"]
target = "a"

print(returning_letter(letters,target))