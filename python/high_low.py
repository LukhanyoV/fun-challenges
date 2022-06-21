import random

# the guessing range
min = 1
max = 100

# think of a random number
mystery = random.randint(min, max)
print("my number is %d" % mystery)

# state
game_state = True
counter = 0
guess = (max+min)//2

while game_state:
    counter += 1
    print("Is this your number %d?" % guess)
    reply = input("It is C (correct), H (higher), L (lower) than your number: ").upper()[0]
    if reply == "C":
        game_state = False
        print("Congratulations! You won in %d" % counter)
    elif reply == "L":
        min = guess
    elif reply == "H":
        max = guess
    guess = (max+min)//2