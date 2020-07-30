const log = (...args) => {
  console.log(JSON.stringify(...args, null, 2))
}

export default log
