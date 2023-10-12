# Python3 program for Insertion in a list 
# before any element using insert() method 

list1 = [ 1, 2, 3, 4, 5, 6 ]

# Element to be inserted 
element = 13

# Element to be inserted before 3
beforeElement = 3

# Find index
index = list1.index(beforeElement) 

# Insert element at beforeElement 
list1.insert(index, element) 
print(list1)
