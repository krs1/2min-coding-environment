//prototypeチェーン継承の基礎
//https://typescript-jp.gitbook.io/deep-dive/future-javascript/classes/classes-emit

// var __extends = this.__extends || function (d, b) {
//   for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
//   function __() { this.constructor = d; }
//   __.prototype = b.prototype;
//   d.prototype = new __();
// };

//継承を生jsで書くとこんな感じになる

function Animal() {
  this.name = ''
}

Animal.prototype.inputName = function(name){ this.name = name }

function Bard(){}
Bard.prototype.__proto__ = Animal.prototype
Bard.prototype.tweet = function(){console.log('ちゅんちゅん') }

console.log(Bard.prototype)
console.log(Animal)

const bard = new Bard()
bard.inputName('スズメ')
console.log(bard.name)
bard.tweet()


//Animalのprototypeの中身は下記
//Animal.prototype

/*
{inputName: ƒ, constructor: ƒ}
inputName: ƒ (name) //上で追加したやつ
constructor: ƒ Animal() //この中のprototype内にnameのプロパティがある
*/
