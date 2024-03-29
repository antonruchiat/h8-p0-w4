//15. Logic Challenge: Highest Score
//==================================

function highestScore (students) {
    // Code disini
    var scoreStudents = {}
    for ( var i = 0; i < students.length; i++) {
        if (scoreStudents[students[i]["class"]] === undefined){
            scoreStudents[students[i]["class"]] = {
                name : students[i]["name"],
                score : students[i]["score"]
            }
        }
        if (scoreStudents[students[i]["class"]]) {
            if (scoreStudents[students[i]["class"]]["score"] < students[i]["score"]) {
                scoreStudents[students[i]["class"]]["score"]  = students[i]["score"]
                scoreStudents[students[i]["class"]]["name"]  = students[i]["name"]
                                    
            } 
        } 
    }

    if ( students.length === 0) {
      return {}
    }

    return scoreStudents

  }
  
  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 94,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}