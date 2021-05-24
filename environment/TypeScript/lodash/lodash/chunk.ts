import slice from './slice'
import toInteger from './toInteger'

function chunk(array:[], size:number = 1) {
  //引数の値か0を選別
  size = Math.max(toInteger(size), 0)

  const length = array == null ? 0 : array.length
  if (!length || size < 1) {
    return []
  }
  let index = 0
  let resIndex = 0

  /*
  lengthが5でsizeが2だったら
  [1,2,3,4,5]/2=2
  Math.ceilを通すと2(sizeが小数点を含んでいた場合を想定している？)
  new Arrayで空の配列を生成2だったら[empty,empty]のようになるっぽい

  実行すると[[1,2], [3,4], [5]]となる
  */
  
  const result = new Array(Math.ceil(length / size))

  while (index < length) {
    result[resIndex++] = slice(array, index, (index += size))
  }
  return result
}

export default chunk