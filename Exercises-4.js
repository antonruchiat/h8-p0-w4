//4 . Logic Challenge - Mencari Modus
//==================================

function cariModus(arr) {
    var tmp = []
    for ( var i = 0; i < arr.length; i++) {
        var periksa = true
        for ( var j = 0; j < tmp.length; j++) {
            if ( arr[i] === tmp[j][0]) {
                periksa = false
                tmp[j][1]++   
            }
        } 
        if (periksa) {
            tmp.push([arr[i], 1])
        }
    }

    var index  = 0
    var max = 0
    for ( var k = 0; k < tmp.length; k++) {
      if ( max < tmp[k][1]){
          max = tmp[k][1]
          index = k
      } 
    }

    if ( max === 1) {
        return -1
    }

    if ( tmp.length === 1) {
        return -1
    }
    
    return tmp[index][0]
   
}
// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1