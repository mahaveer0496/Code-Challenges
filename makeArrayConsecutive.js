/*
Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

Example

For statues = [6, 2, 3, 8], the output should be
makeArrayConsecutive2(statues) = 3.

Ratiorg needs statues of sizes 4, 5 and 7.

*/

// Code 

function makeArrayConsecutive2(statues) {
   var arr = statues.sort((a, b) => a > b)
   var count = 0;
   for (var index = Math.min(...arr); index <= Math.max(...arr); index++) {
      console.log(index);
      if (arr.indexOf(index) == -1) {
         count++
      }
   }
   return(count);
   
}