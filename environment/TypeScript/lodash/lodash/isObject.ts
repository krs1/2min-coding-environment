console.log(isObject("dfadf"))

function isObject(value:any) {
  const type = typeof value
  return value != null && (type === 'object' || type === 'function')
}
export default isObject