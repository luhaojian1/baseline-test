'use strict';

function collectSameElements(collectionA, objectB) {
  var arr = new Array();
  var t = 0;
  console.log(objectB.value);
  for(var i=0;i<collectionA.length;i++){
    for (var j = 0;j<objectB.value.length;j++){
      if (collectionA[i]==objectB.value[j]){
        arr[t++]=collectionA[i];
        continue;
      }
    }
  }

  return arr;
}
