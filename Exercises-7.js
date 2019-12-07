//7. Logic Challenge - Mengurutkan Abjad
//======================================

function urutkanAbjad(str) {
   
    //----------ini split manual--------------
    var arrStr = []
    for ( var i = 0; i < str.length; i++) {
        arrStr.push(str[i])
    }
    //---------------------------------------
    
    var tmp = ""
    for ( var i = 0; i < arrStr.length; i++) {
        for ( var j = 0; j < arrStr.length; j++) {
            if ( arrStr[j] > arrStr[j+1] ) {
                tmp = arrStr[j]
                arrStr[j] = arrStr[j+1]
                arrStr[j+1] = tmp
            }
        }
    }
    
    //-----------ini join manual------------------
    var tmp1 = ""
    for ( var i = 0; i < arrStr.length; i++) {
        tmp1 += arrStr[i]
    }
    //--------------------------------------------

    return tmp1
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'