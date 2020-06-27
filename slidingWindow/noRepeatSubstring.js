/* 
Given a string, find the length of the longest substring which has no repeating characters. 

Algortihm -
* Brute Force 
  Just get all substrings, filter out substrings without repeating characters, just return the longest
* Dynamic Sliding Window
  * First, we will insert characters from the beginning of the string until we have ‘K’ distinct characters in the HashMap.
  * These characters will constitute our sliding window. We are asked to find the longest such window having no more than ‘K’ distinct characters. We will remember the length of this window as the longest window so far.
  * After this, we will keep adding one character in the sliding window (i.e. slide the window ahead), in a stepwise fashion.
  * In each step, we will try to shrink the window from the beginning if the count of distinct characters in the HashMap is larger than ‘K’. We will shrink the window until we have no more than ‘K’ distinct characters in the HashMap. This is needed as we intend to find the longest window.
  * While shrinking, we’ll decrement the frequency of the character going out of the window and remove it from the HashMap if its frequency becomes zero.
  * At the end of each step, we’ll check if the current window length is the longest so far, and if so, remember its length.
*/
