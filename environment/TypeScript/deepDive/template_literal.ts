/** テンプレートリテラル のタグ付けテスト */
//https://typescript-jp.gitbook.io/deep-dive/future-javascript/template-strings

const who = "me"
const who2 = "ore"
const kashi = htmlReplace `今日の勝利の女神は${who}だけにチュウする虹の彼方へ行こう
風を切って大地蹴って君の中へ光灯す
${who2}の愛馬が`

function htmlReplace(literals:TemplateStringsArray,...placeholders: string[]){
  let result = ""
  console.log(literals)
  console.log(placeholders)
  placeholders.forEach((placeholder,index) => {
    result += literals[index]
    result += placeholder
    .replace(/me/g,"私")
    .replace(/you/g,"君")
    .replace(/ore/g,"俺")
  });
  //最後のリテラル追加
  result += literals[literals.length - 1];
  return result
}

console.log(kashi)