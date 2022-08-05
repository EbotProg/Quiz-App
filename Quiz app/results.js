// const score = document.getElementById('score');
// const grading = document.getElementById('ranking');
// const username = document.getElementById('username');

// let scoreVal = localStorage.getItem('points');
// score.innerText = scoreVal;



const resultGrading = (score) => {
if(score >= 18 && score <= 20) return 'A';
else if(score < 18 && score >= 14) return 'B';
else if(score < 14 && score >=10) return 'C';
else if(score < 10 && score >= 5) return 'D';
else return 'F';
}




//display username in results table
// username.innerText = localStorage.getItem('username');

let usernames = JSON.parse(localStorage.getItem('usernames'));
let points = JSON.parse(localStorage.getItem('points'));
let unsortedPoints = JSON.parse(localStorage.getItem('points'));

const table = document.getElementById('table');








const rankSort = (points) => {
    let minIndex;
    let i, j, temp;
    for (i=0; i < points.length-1; i++)
        {
             
             minIndex = i;
             for (j = i+1; j < points.length; j++)
                 if (points[j] < points[minIndex])
                    minIndex = j;

             
             temp = points[i];
             points[i] = points[minIndex];
             points[minIndex] = temp;
        }
return points;
}

let sortedPoints = rankSort(points);

const finalRank = (point, sortedPoints) => {
    for(let i=0, j=sortedPoints.length; i< sortedPoints.length, j>=0; i++, j--){
        
    if(sortedPoints.indexOf(point) == (j-1)){
    return i+1;
   }
}

}

const displayResults = (tb, sortedPoints) => {
    
    for(let i=0; i < usernames.length; i++){
tb.innerHTML += `<tr>
                <td>${usernames[i]}</td>
                <td>${unsortedPoints[i]}</td>
                <td>${resultGrading(unsortedPoints[i])}</td>
                <td>${finalRank(unsortedPoints[i], sortedPoints)}</td>
                </tr>`;
    }
}

displayResults(table, sortedPoints);


