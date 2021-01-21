/* 
Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.

E.g - 
Intervals: [[1,4], [2,5], [7,9]]
Output: [[1,5], [7,9]]
Explanation: Since the first two intervals [1,4] and [2,5] overlap, we merged them into 
one [1,5].
*/

/**
 * First we sort intervals by start, so we can expand intervals, and dont have to search for potential mergable intervals. After sort intervals that _can_ be merged will be next to each other.
 * For each interval in the array, we see if _current interval_ overlaps with previous one, if it does, then we take the _previous interval_ from result array and mutate it directly
 * If they dont overlap we just push it to results
 */
const mergeIntervals = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0])

  const result = []

  result.push([...intervals[0]])

  for (const [currentStart, currentEnd] of intervals) {
    // since result is array of array, we get the pointer to the last element which is an array and we mutate it directly
    const lastInterval = result[result.length - 1]
    const [_, lastEnd] = lastInterval

    if (currentStart <= lastEnd) lastInterval[1] = Math.max(lastEnd, currentEnd)
    else result.push([currentStart, currentEnd])
  }

  return result
}

console.log(
  mergeIntervals([
    [1, 4],
    [2, 5],
    [7, 9],
  ]),
)
