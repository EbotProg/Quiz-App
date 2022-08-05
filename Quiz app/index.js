const points = JSON.parse(localStorage.getItem('points'));
const usernames = JSON.parse(localStorage.getItem('usernames'));


// highscore
const highScore = (points) => {
    let i=1;
    let maxVal = points[0];
    while(i<=points.length) {
        if(points[i] > maxVal) maxVal=points[i];
        i++;
    }
    return maxVal;
}


// average points
const averagePoints = (points) => {
    let sum = 0;
  for(let i=0; i < points.length; i++){
   sum += points[i];
  }
  return sum / points.length;
}



// Number of quiz takers
const numOfQuizTakers = (usernames) => {
console.log(usernames);
  return usernames.length;
}



// DOM manipulation

const quiz_takers = document.getElementById('quiz_takers');
const high_score = document.getElementById('high_score');
const average_score = document.getElementById('average_score');

const statsAlloc = (qt, hs, as) => {
  qt.innerText = numOfQuizTakers(usernames);
  hs.innerText = highScore(points);
  as.innerText = averagePoints(points);
}

statsAlloc(quiz_takers, high_score, average_score);