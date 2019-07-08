'use strict';

function collectSameElements(collectionA, collectionB) {
  var arr = new Array();
  var t = 0;
  for(var i=0;i<collectionA.length;i++){
    for (var j = 0;j<collectionB.length;j++){
      if (collectionA[i]==collectionB[j]){
        arr[t++]=collectionA[i];
        continue;
      }
    }
  }
  collectionA = arr;
  console.log(collectionA);
  return collectionA;
}
