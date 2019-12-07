//14.  Logic Challenge - Naik Angkot
//==================================

function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here

    var perjalanan = []

    for (var i = 0; i < rute.length; i++) {
        for ( var j = 0; j < arrPenumpang.length; j++) {
            if (arrPenumpang[j][1] === rute[i]) {
                perjalanan.push({
                    penumpang : arrPenumpang[i][0],
                    naikDari : arrPenumpang[i][1],
                    tujuan : arrPenumpang[i][2],
                    bayar : jarak(arrPenumpang[i][1], arrPenumpang[i][2])
                })
            }

            function jarak(dari, ke) {
               for ( var k = 0; k < rute.length; k++) {
                    if ( dari === rute[k]) {
                        var jarak1 = k
                    }

                    if ( ke === rute[k]) {
                        var jarak2 = k
                    }
                }
                return ((jarak2 - jarak1) * 2000)
            }
        }
    }

    if ( arrPenumpang.length === 0) {
        return []
    }

    return perjalanan
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]