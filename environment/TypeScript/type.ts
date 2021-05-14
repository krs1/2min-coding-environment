type BookStore = {
  name:string
  id:number
  books:Array<{
    name:string
    price:number
  }>
}

const store:BookStore = {
  name:"a",
  id:1,
  books:[
    {name:"b",price:2}
  ]
}

type Owner = BookStore & {
  ownerName:string
}

const owner : Owner={
  ownerName:"ヤマダ",
  name:"a",
  id:1,
  books:[
    {name:"b",price:2}
  ]
}
console.log(store)
console.log(owner)