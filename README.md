# yu-gi-oh-program

This program contains a function that takes one parameter (a whole number/integer) 
and checks if numbers from 1 to the given parameter (inclusive) are divisible by 
2,3,5 while replacing with the appropriate words as specified below.

Numbers divisible by 2 are replaced by "yu"
Numbers divisible by 3 are replaced by "gi"
Numbers divisible by 5 are replaced by "oh"
If a number is divisible by more than one of the above, the number is replaced by the words
representing its divsiors, separated by hyphen (-).
Numbers are unchanged if not divsible by any of the above

The function returns an array containing all numbers from 1 to the passed 
argument(inclusive) where all divisible numbers have been replaced as specified above.
