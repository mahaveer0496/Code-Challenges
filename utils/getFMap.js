function getFMap(A) {
  const frequencyMap = {}

  ;[...A].forEach((x) => {
    if (x in frequencyMap) frequencyMap[x]++
    else frequencyMap[x] = 1
  })

  return frequencyMap
}

export default getFMap
