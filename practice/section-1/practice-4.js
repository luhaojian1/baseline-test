'use strict';

function collectSameElements(collectionA, objectB) {
  var arr = new Array();
  var t = 0;

  for(var i=0;i<collectionA.length;i++){
    for (var j = 0;j<objectB.value.length;j++){
      if (collectionA[i].key==objectB.value[j]){
        arr[t++]=objectB.value[j];
        continue;
      }
    }
  }
  console.log(arr);
  return arr;
}
