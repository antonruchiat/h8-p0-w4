//2. Logic Challenge - Faktor Persekutuan Terbesar
//================================================

function fpb(angka1, angka2) {
    var tmp = []

    for ( var i = 1; i < angka2; i++) {
       if ( ( angka1 % i === 0) && ( angka2 % i === 0) ) {
           tmp.push(i)
       }

    }

    var max = tmp.length
    for ( var i = 0; i < tmp.length; i++) {
        if ( max < tmp[i]) {
            max = tmp[i]
        }
    }

    return max

}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1