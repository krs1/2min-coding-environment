namespace Utility {
  export function log(msg:string) {
      console.log(msg);
  }
  export function error(msg:string) {
      console.error(msg);
  }
}

namespace Utility.Messaging{
  export function log2(msg:string){
    console.log(msg)
  }
}

// 使い方
Utility.log('Call me');
Utility.error('maybe!');
Utility.Messaging.log2('dfafsfs');