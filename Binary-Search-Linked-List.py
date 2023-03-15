"""
Problem 1
Alice has some cards with numbers written on them. She arranges the card in descending order, and lays them out dace down 
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
