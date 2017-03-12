/*
Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

Example

For sequence = [1, 3, 2, 1], the output should be
almostIncreasingSequence(sequence) = false;

There is no one element in this array that can be removed in order to get a strictly increasing sequence.

For sequence = [1, 3, 2], the output should be
almostIncreasingSequence(sequence) = true.

You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].
 */

//Code Starts There

function almostIncreasingSequence(sequence) {
   let myBool = "";

   for (let i = 0; i < sequence.length; i += 1) {
      const arr = [...sequence.slice(0, i), ...sequence.slice(i + 1)]
      let count = 0,
         j = 0

      while (j < arr.length) {
         if (arr[j] < arr[j + 1]) {
            count += 1
         }

         j += 1
      }

      if (count === arr.length - 1) {
         myBool = true
         break;
      }
   }

   return Boolean(myBool)
}