//残余引数
const books:string[] = ['ハリーポッター','舟を編む','東京リベンジャーズ','TypeScript入門','新解釈三国志']

const test = (area:string,storeName:string,...args:string[])=>[area,storeName,args]

//...booksで第一引数から最後まで設定したかったけどできなかった
console.log(test("東京","東京書店",...books))


//やるなら下記のように配列の分割代入でやる

const splitTest = (args:string[])=> {
  //スプレッド演算子を使わないと東京リベンジャーズだけ入る
  //これを利用して[area,,really]のように記載すると
  //['ハリーポッター','東京リベンジャーズ'のように省くこともできる
  const [area,storeName,...really]　= args
  return [area,storeName,really]
}
console.log(splitTest(books))


