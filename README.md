palindrome
==========

I was challenged by my friend to write a script that searches for palindromes. I coded mine in Node.js
and used recursion, while she [coded hers](https://github.com/tausenne/palindromes) in PHP and used a loop. I later also coded a non-recursive version,
because of a certain issue you probably know about.

The outcome turned out to be a great learning experience. Here's what I found:

1. Node.js (v0.10.21) is 3-4 times faster than PHP (5.4.17).
2. The caveat of recursion becomes plainly obvious when running the script on the world's longest palindrome
   (included). The script quickly runs out of call stack. You can increase the call stack size in Node,
   but the idea that your program's ability to run is dictated by input is unsettling. From now on, I will
   be very careful to only use recursion on algorithms where the number of calls is a constant.
3. Dumping data to the console screen is very expensive.

Here's how to run the script:

<code>node PalindromeLoop.js 'atoyotasatoyota'</code>

-or-

<code>node PalindromeRecursive.js 'atoyotasatoyota'</code>
