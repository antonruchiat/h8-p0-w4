//10. Logic Challenge - Change Me!
//================================

function changeMe(arr) {
    var orang = {}
    var tahunSekarang = 2019
    for ( var i = 0; i < arr.length; i++) {
        
        console.log(`${i+1}. ${arr[i][0]} ${arr[i][1]}`)
        orang["firstName"] = arr[i][0],
        orang["lastName"] = arr[i][1],
        orang["gender"] = arr[i][2],
        orang["age"] = tahunSekarang - arr[i][3]
        if (arr[i][3] === undefined || arr[i][3] > tahunSekarang) {
            orang["age"] = "Invalid Birth Year"
        }
        
        console.log(orang)
    }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
// changeMe([]); // ""