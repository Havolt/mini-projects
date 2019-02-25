"""
    x = 10
    y = "Mark"

    myLocation = "Ireland"
    myFaveColor = "Blue"
    myInfo = "I live in " + myLocation + " and my favourite color is " + myFaveColor

    print(x)
    print(y)

    print(myInfo)

    aa = int(2.99)
    ab = int("204")

    ba = float(10)
    bb = float("122")

    ca = str(2)
    cb = str(24.56)

    print(aa)
    print(ab)

    print(ba)
    print(bb)

    print(ca)
    print(cb)

myStr = " This is a string which has a couple of words in it "

print(myStr[1:5])
print(myStr.strip())
print(len(myStr))
print(myStr.lower())
print(myStr.upper())

print('Enter your favourite game..')

favGame = input()

print(favGame + ' is a great game :)')

"""

myList = ['cat', 'dog', 'elephant']

print(myList)
#print(myList[0])

myList.append('frog')
myList.pop(0)

for item in myList:
    print(item)

myTuple = ('mario', 'luigi', 'peach')

if "luigi" in myTuple:
    print('loogoo here')

mySet = {'facebook', 'google', 'reddit'}

print('facebook' in mySet)

mySet.add('twitter')

mySet.update(['yahoo', 'youtube', 'vimeo'])

print(len(mySet))