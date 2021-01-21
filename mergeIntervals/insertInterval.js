// easiest is just to push the newInterval to the end, sort, and repeat the merge interval
const insertInterval = (intervals, newInterval) => {
  const ints = [...intervals, newInterval].sort((a, b) => a[0] - b[0])

  const results = [[...ints[0]]]

  for (const [currentStart, currentEnd] of ints) {
    const lastInterval = results[results.length - 1]
    const [_, lastEnd] = lastInterval
    if (currentStart <= lastEnd) lastInterval[1] = Math.max(lastEnd, currentEnd)
    else results.push([currentStart, currentEnd])
  }

  return results
}

insertInterval([[1, 5]], [4, 8])
