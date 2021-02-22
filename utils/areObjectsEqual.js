function areObjectsEqual(obj1, obj2) {
  return Object.keys(obj1).every((key) => obj2[key] === obj1[key])
}

export default areObjectsEqual
