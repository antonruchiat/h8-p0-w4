//9. Logic Challenge - Check AB
//=============================

function checkAB(num) {
    var a = 0
    var b = 0
    for ( var i = 1; i < num.length; i++) {
        if (num[i] === "a") {
            a += i
        }

        if (num[i] === "b") {
            b += i
        }
    }
    var jarak = (Math.abs(a-b))
    if ( a === 0) {
        return false
    }

    if ( b === 0) {
        return false
    }

    if ( jarak-1 < 3) {
        return false
    } else if ( jarak-1 >= 3) {
        return true
    }
}
// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false