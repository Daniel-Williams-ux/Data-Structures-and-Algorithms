"""
Problem 1
Alice has some cards with numbers written on them. She arranges the card in descending order, and lays them out face down 
in a sequence on a table. She challenges Bob to pick out the card containing a given number by turning over as few cards as 
posible. Write a function to helb Bob locate the card. 
"""

'''
Method
1. State the problem clearly. Identify the input and output formats.
2. Come up with some example inputs & outputs. Try to cover all edge cases.
3. Come up with a correct solution for the problem. State it in plain English.
4. Implement the solution and test it using example inputs. Fix bug if any.
5. Analyze the algorithm complexity and identify inefficiencies, if any.
6. Apply the right technique to overcome the ineffiviency. Repeat step 3 and 6.

*Applying the right techniqe is where the knowledge of common data structures and algorithms comes handy.
'''

'''
Solution
1.State the problem clearly. Identify the input and output formats.
You will often encounter detailed word problems in coding challenges and interviews. The first step is to state the problem 
clearly and pricisely in abstract terms.

In this case, we can represent the sequence of cards as a list of numbers. Turing over a specific card is equivalent to 
accessing the value of the number at the corresponding position in the list.

                        ---Queried number
sorted list [13, 11, 12, 7, 4, 3, 1, 0]
positions     0    1   2  3  4  5  6  7
                        ---Answer

                      
'''

'''
The problem can be stated as follows:

Problem
       We need to write a program to find the position of a given number in a list of numbers 
       arranged in decreasing order. We need to minimize he number of times we access elements 
       from the list.

Input
  1. cards: A list of numbers sorted in descending order. E.g. [13, 11, 12, 7, 4, 3, 1, 0]
  2. query: A number, whose position in the array is to be determined. E.g 7

Output
  3. position: The position ofquery in the list cards. E.g. 3 in he above case(countinf from 0)

Based on he above, we can now create the signature of our function:  
'''

def locate_card(cards, query):
  pass

'''
Tips:
* Name your function appropriately and think carefully about the signature 
* Discuss the problem with the interviewer if you are unsure how to frame it in abstrac terms
* Use descriptive variable names, otherwise you may forget what a variable represents 
'''

'''
Step 2. Come up with some example inputs & outputs. Try to cover all edge cases.
   We will refer to them as test cases.

   Here's the test case described in the example above.

  cards = [13, 11, 10, 7, 4, 3, 1, 0]
  query = 7
  output = 3

  We can test our function by passing the inputs into function and comparing the result with the 
  expected output.
  '''

  result = locate_card(cards, query)
  print(result) '''None'''

  result == output '''False'''

'''
Obviously, the two result does not match the output as we have not yet implemented the function.

We'll represent our test cases as dictionaries to make it easier to test them once we write implement our function. 
For example, the above test case can be represented as follows:
'''
test = {
    'input': { 
        'cards': [13, 11, 10, 7, 4, 3, 1, 0], 
        'query': 7
    },
    'output': 3
}

''' The function can now be tested as follows. '''
locate_card(**test['input']) == test['output']

'''
Our function should be able to handle any set of valid inputs we pass into it. 
Here's a list of some possible variations we might encounter:

1. The number `query` occurs somewhere in the middle of the list `cards`.
2. `query` is the first element in `cards`.
3. `query` is the last element in `cards`.
4. The list `cards` contains just one element, which is `query`.
5. The list `cards` does not contain number `query`.
6. The list `cards` is empty.
7. The list `cards` contains repeating numbers.
8. The number `query` occurs at more than one position in `cards`.
9. (can you think of any more variations?)

> **Edge Cases**: It's likely that you didn't think of all of the above cases when you read the problem for the first time. 
Some of these (like the empty array or `query` not occurring in `cards`) are called *edge cases*, 
as they represent rare or extreme examples. 

While edge cases may not occur frequently, your programs should be able to handle all edge cases, 
otherwise they may fail in unexpected ways. Let's create some more test cases for the variations listed above. 
We'll store all our test cases in an list for easier testing.
'''

tests = []
# query occurs in the middle
tests.append(test)

tests.append({
    'input': {
        'cards': [13, 11, 10, 7, 4, 3, 1, 0],
        'query': 1
    },
    'output': 6
})

# query is the first element
tests.append({
    'input': {
        'cards': [4, 2, 1, -1],
        'query': 4
    },
    'output': 0
})

# query is the last element
tests.append({
    'input': {
        'cards': [3, -1, -9, -127],
        'query': -127
    },
    'output': 3
})

# cards contains just one element, query
tests.append({
    'input': {
        'cards': [6],
        'query': 6
    },
    'output': 0 
})

'''
The problem statement does not specify what to do if the list `cards` does not contain the number `query`. 

1. Read the problem statement again, carefully.
2. Look through the examples provided with the problem.
3. Ask the interviewer/platform for a clarification.
4. Make a reasonable assumption, state it and move forward.

We will assume that our function will return `-1` in case `cards` does not contain `query`.
'''

# cards does not contain query 
tests.append({
    'input': {
        'cards': [9, 7, 5, 2, -9],
        'query': 4
    },
    'output': -1
})

# cards is empty
tests.append({
    'input': {
        'cards': [],
        'query': 7
    },
    'output': -1
})

# numbers can repeat in cards
tests.append({
    'input': {
        'cards': [8, 8, 6, 6, 6, 6, 6, 3, 2, 2, 2, 0, 0, 0],
        'query': 3
    },
    'output': 7
})


'''
In the case where `query` occurs multiple times in `cards`, we'll expect our function to return the first occurrence of `query`. 

While it may also be acceptable for the function to return any position where `query` occurs within the list, 
it would be slightly more difficult to test the function, as the output is non-deterministic.
'''

# query occurs multiple times
tests.append({
    'input': {
        'cards': [8, 8, 6, 6, 6, 6, 6, 6, 3, 2, 2, 2, 0, 0, 0],
        'query': 6
    },
    'output': 2
})

#Let's look at the full set of test cases we have created so far.

#tests
[{'input': {'cards': [13, 11, 10, 7, 4, 3, 1, 0], 'query': 7}, 'output': 3},
 {'input': {'cards': [13, 11, 10, 7, 4, 3, 1, 0], 'query': 1}, 'output': 6},
 {'input': {'cards': [4, 2, 1, -1], 'query': 4}, 'output': 0},
 {'input': {'cards': [3, -1, -9, -127], 'query': -127}, 'output': 3},
 {'input': {'cards': [6], 'query': 6}, 'output': 0},
 {'input': {'cards': [9, 7, 5, 2, -9], 'query': 4}, 'output': -1},
 {'input': {'cards': [], 'query': 7}, 'output': -1},
 {'input': {'cards': [8, 8, 6, 6, 6, 6, 6, 3, 2, 2, 2, 0, 0, 0], 'query': 3},
  'output': 7},
 {'input': {'cards': [8, 8, 6, 6, 6, 6, 6, 6, 3, 2, 2, 2, 0, 0, 0],
   'query': 6},
  'output': 2}]


'''
Great, now we have a fairly exhaustive set of test cases to evaluate our function. 

Creating test cases beforehand allows you to identify different variations and edge cases in advance so that can make sure 
to handle them while writing code. Sometimes, you may start out confused, but the solution will reveal itself as you try 
to come up with interesting test cases.

**Tip:** Don't stress it if you can't come up with an exhaustive list of test cases though. 
You can come back to this section and add more test cases as you discover them. Coming up with good test cases is a 
skill that takes practice.
'''
