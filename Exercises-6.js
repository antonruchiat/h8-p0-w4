//6. Logic Challenge - Digit Perkalian Minimum
//============================================

function digitPerkalianMinimum(angka) {
    var tmp = []
    
    for ( var i = 1; i <= angka; i++) {
        if ( angka % i === 0) {
            tmp.push(`${i}${angka/i}`)
        }
    }

    var min = tmp.length

    for ( var i = 0; i < tmp.length; i++) {
        if ( tmp.length <= 2) {
            min = tmp[i].length
        }

        if ( min > tmp[i].length) {
            min = tmp[i].length
        }

    }

    return min

}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2