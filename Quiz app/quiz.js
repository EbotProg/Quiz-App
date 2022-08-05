/*
const q1 = document.getElementsByName('q1');
const submit = document.getElementById('submit');
const q2 = document.getElementsByName('q2');
const q3 = document.getElementsByName('q3');
const q4 = document.getElementsByName('q4');
const q5 = document.getElementsByName('q5');
const q6 = document.getElementsByName('q6');
const q7 = document.getElementsByName('q7');
const q8 = document.getElementsByName('q8');
const q9 = document.getElementsByName('q9');
const q10 = document.getElementsByName('q10');
const q11 = document.getElementById('q11');
const q12 = document.getElementById('q12');
const q13 = document.getElementById('q13');
const q14 = document.getElementById('q14');
const q15 = document.getElementById('q15');
const q16 = document.getElementById('q16');
const q17 = document.getElementById('q17');
const q18 = document.getElementById('q18');
const q19 = document.getElementById('q19');
const q20 = document.getElementById('q20');



let points = { value: 0};
const answers = ['article', 'p', 'id',
 'script', 'Hyper Text Markup Language',
  ['h1', 'h6'], ['form', 'table',
   'figcaption'], ['mark', 'details',
    'strong'],['href', 'src'],['meta',
     'script'], 'ul', 'ul',
     'circle', '&amp', 'sub', 'false',
        'false', 'false', 'true', 'false'];
submit.addEventListener("click", () =>{

    //question 1
    for(let i=0; i < q1.length; i++){

    if(q1[i].checked){
        if(q1[i].value === answers[0]){
            points.value++;

        }else{
            points.value = points.value;

        }
    }
}

//question 2
  for(let i=0; i < q2.length; i++){
    if(q2[i].checked){
        if(q2[i].value === answers[1]){
            points.value++;
            
        }else{
            points.value = points.value;
    
        }
    }
  }

//   const answer = (questionNumber, questionType) => {
//     if (questionType === 'double') {
//         ...
//     } else {

//     }
//   }

//   for i==1; i<=20 {
//       var1 = `q${i}`
//       answer(${i}`)
//       i++
//   }
//  answer(q1, single)
//   //question 3
//   for(let i=0; i < q4.length; i++){
//     if(q3[i].checked){
//         if(q3[i].value === answers[2]){
//             points.value++;
            
//         }else{
//             points.value = points.value;
    
//         }
//     }
//   }

  //question 4
  for(let i=0; i < q4.length; i++){
    if(q4[i].checked){
        if(q4[i].value === answers[3]){
            points.value++;
            
        }else{
            points.value = points.value;
    
        }
    }
  }

  //question 5
  for(let i=0; i < q5.length; i++){
    if(q5[i].checked){
        if(q5[i].value === answers[4]){
            points.value++;
            
        }else{
            points.value = points.value;
    
        }
    }
  }
/// loops for the multiple answer questions
const option = { opt1: false, opt2: false, opt3: false};

//question 6
for(let i=0; i < q6.length; i++){
    if(q6[i].checked){
        if(q6[i].value === answers[5][0]){
            option.opt1 = true;
            continue;
        }else if(option.opt1 === true && q6[i].value === answers[5][1]){
            points.value++;
            break;
        }
        else{
            points.value = points.value;
    
        }
    }
  }

  //question 7
  for(let i=0; i < q7.length; i++){
    if(q7[i].checked){
        if(q7[i].value === answers[6][0]){
            option.opt1 = 'form';
            continue;
        }if(q7[i].value === answers[6][1]){
            option.opt2 = 'table';
            continue;
        }
        else if(option.opt1 === 'form' &&option.opt2 === 'table' && q7[i].value === answers[6][2]){
            points.value++;
            break;
        }
        else{
            points.value = points.value;
    
        }
    }
  }

  //question 8
  for(let i=0; i < q8.length; i++){
    if(q8[i].checked){
        if(q8[i].value === answers[7][0]){
            option.opt1 = 'mark';
            continue;
        }if(q8[i].value === answers[7][1]){
            option.opt2 = 'details';
            continue;
        }
        else if(option.opt1 === 'mark' &&option.opt2 === 'details' && q8[i].value === answers[7][2]){
            points.value++;
            break;
        }
        else{
            points.value = points.value;
    
        }
    }
  }

  //question 9
  for(let i=0; i < q9.length; i++){
    if(q9[i].checked){
        if(q9[i].value === answers[8][0]){
            option.opt1 = 'href';
            continue;
        }else if(option.opt1 === 'href' && q9[i].value === answers[8][1]){
            points.value++;
            break;
        }
        else{
            points.value = points.value;
    
        }
    }
  }

//question 10

for(let i=0; i < q10.length; i++){
    if(q10[i].checked){
        // if(q10[i].value !== answers[9][0] || q10[i].value !== answers[9][1]){
        //     points.value = points.value;
        //     break;
        // } 
        if(q10[i].value === answers[9][0]){
            option.opt1 = 'meta';
            continue;
        }else if(option.opt1 === 'meta' && q10[i].value === answers[9][1]){
            points.value++;
            break;
        }
        else{
            points.value = points.value;
    
        }
    }
  }
// points.value = points.value;
//////// structural
//question 11

if(q11.value === answers[10]){
    points.value++;
}else if(q11.value !== answers[10]){points.value = points.value;}

//question 12
if(q12.value === answers[11]){
    points.value++;
}else if(q12.value !== answers[11]){points.value = points.value;}

//question 13
if(q13.value === answers[12]){
    points.value++;
}else if(q13.value !== answers[12]){points.value = points.value;}

// question 14
if(q14.value === answers[13]){
    points.value++;
}else if(q14.value !== answers[13]){points.value = points.value;}

// question 15
if(q15.value === answers[14]){
    points.value++;
}else if(q15.value !== answers[14]){points.value = points.value;}

//question 16
if(q16.value === answers[15]){
    points.value++;
}else if(q16.value !== answers[15]){points.value = points.value;}

//question 17
if(q17.value === answers[16]){
    points.value++;
}else if(q17.value !== answers[16]){points.value = points.value;}

//question 18
if(q18.value === answers[17]){
    points.value++;
}else if(q18.value !== answers[17]){points.value = points.value;}

//question 19
if(q19.value === answers[18]){
    points.value++;
}else if(q19.value !== answers[18]){points.value = points.value;}

//question 20
if(q20.value === answers[19]){
    points.value++;
}else if(q20.value !== answers[19]){points.value = points.value;}


if(localStorage.getItem('points') == null){
    localStorage.setItem('points', '[]');
}
    let pointArr = JSON.parse(localStorage.getItem('points'));
    pointArr.push(points.value);
localStorage.setItem('points', JSON.stringify(pointArr));
});


// display the questions requested in the drop down

const htmlDisplay = document.getElementById('html_questions');
const cssDisplay = document.getElementById('css_questions');
const jsDisplay = document.getElementById('js_questions');
const select = document.getElementById('language');



const languages = ['html', 'css', 'javascript'];
const defaultDisplay = () =>{
        cssDisplay.style.display = 'none';
        jsDisplay.style.display = 'none';
}
defaultDisplay();
const displayLanguage = () => {
    
    if(select.options[select.selectedIndex].value === languages[0]){
        cssDisplay.style.display = 'none';
        jsDisplay.style.display = 'none';
        htmlDisplay.style.display = 'block';
    }else if(select.options[select.selectedIndex].value === languages[1]){
        cssDisplay.style.display = 'block';
        htmlDisplay.style.display = 'none';
        jsDisplay.style.display = 'none'
    }else if(select.options[select.selectedIndex].value === languages[2]){
        jsDisplay.style.display = 'block';
        cssDisplay.style.display = 'none';
        htmlDisplay.style.display = 'none';
    }
}


//name input

const username = document.getElementById('username');
const submitName = document.getElementById('submitName');

 

submitName.addEventListener("click", ()=>{

    //  if(localStorage.getItem('usernames') == null){
    //      localStorage.setItem('usernames', '[]');
    //  }

    //  let name = username.value.toString();
    // let usernames = JSON.parse(localStorage.getItem('usernames'));
    // if(usernames.includes(name) == false){
    // usernames.push(name);
    // }
    // localStorage.setItem('usernames', JSON.stringify(usernames));

     if(localStorage.getItem('usernames') == null){
         localStorage.setItem('usernames', '[]');
     }

     let name = username.value.toString();
     let usernames = JSON.parse(localStorage.getItem('usernames'));

     if(usernames.includes(name) === false){
         usernames.push(name);
     }
    localStorage.setItem('usernames', JSON.stringify(usernames));

})


*/
















let points = { 
    value: 0,
     j   : 0
    };
const answers = ['article', 'p', 'id',
 'script', 'Hyper Text Markup Language',
  ['h1', 'h6'], ['form', 'table',
   'figcaption'], ['mark', 'details',
    'strong'],['href', 'src'],['meta',
     'script'], 'ul', 'ul',
     'circle', '&amp', 'sub', 'false',
      'false', 'false', 'true', 'false'];
let questions = [];
let questLength = 10;
const getElements = (questionArr, arrayLength) => {
for(let i=1; i<=arrayLength; i++){
    let q= document.getElementsByName(`q${i}`);
    questionArr.push(q);
  }
  for(let i=11; i<=20; i++){
    let q= document.getElementById(`q${i}`);
    questionArr.push(q);
  }
}
getElements(questions, questLength);
const option = { opt1: false, opt2: false, opt3: false};

// function to calculate the point gotten from each 
// question

const calcPoints = (question, questionType, numOfAnswers=1) => {

    if(questionType === 'single answer'){
    for(let i=0; i < question.length; i++){

        if(question[i].checked){
            if(question[i].value === answers[points.j]){
                points.value++;
                
            }else{
                points.value = points.value;
                
            }
        }
    }
   points.j++;
 } 

 else if(questionType === 'multiple answers'){
       if(numOfAnswers===2){
    for(let i=0; i < question.length; i++){
        if(question[i].checked){
            if(question[i].value === answers[points.j][0]){
                option.opt1 = true;
                continue;
            }else if(option.opt1 === true && question[i].value === answers[points.j][1]){
                points.value++;
                break;
            }
            else{
                points.value = points.value;
        
            }
        }
      }
    }else{
        for(let i=0; i < question.length; i++){
            if(question[i].checked){
                if(question[i].value === answers[points.j][0]){
                    option.opt1 = true;
                    continue;
                }else if(option.opt1 === true && question[i].value === answers[points.j][1]){
                    points.value++;
                    break;
                }
                else{
                    points.value = points.value;
            
                }
            }
          }
    }
    points.j++;
}
        
 else if(questionType === 'structural'){
    if(question.value === answers[points.j]){
        points.value++;
    }else if(question.value !== answers[points.j]){
        points.value = points.value;
    }    
 points.j++;
}




}

// main function for calculating the points

const mainCalc = () => {
    // single answer questions 1-5
    for(let i=0; i < 5; i++){
    calcPoints(questions[i], 'single answer');
      }
      //multi-answer questions
    calcPoints(questions[5], 'multiple answers', 2);
    calcPoints(questions[6], 'multiple answers', 3);
    calcPoints(questions[7], 'multiple answers', 3);
    calcPoints(questions[8], 'multiple answers', 2);
    calcPoints(questions[9], 'multiple answers', 2);
// structural questions
for(let i=10; i<20; i++){
    calcPoints(questions[i], 'structural');
}


    if(localStorage.getItem('points') == null){
        localStorage.setItem('points', '[]');
    }
        let pointArr = JSON.parse(localStorage.getItem('points'));
        pointArr.push(points.value);
    localStorage.setItem('points', JSON.stringify(pointArr));
    
}



// This is the code which adds the username entered
// by the player into an array

const username = document.getElementById('username');

const addPlayer = () => {


    if(localStorage.getItem('usernames') == null){
        localStorage.setItem('usernames', '[]');
    }

    let name = username.value.toString();
    let usernames = JSON.parse(localStorage.getItem('usernames'));

    if(usernames.includes(name) === false){
        usernames.push(name);
    }
   localStorage.setItem('usernames', JSON.stringify(usernames));
  
}


// display quiz

const htmlDisplay = document.getElementById('html_questions');
const cssDisplay = document.getElementById('css_questions');
const jsDisplay = document.getElementById('js_questions');
const select = document.getElementById('language');



const languages = ['html', 'css', 'javascript'];
const defaultDisplay = () =>{
        cssDisplay.style.display = 'none';
        jsDisplay.style.display = 'none';
}
defaultDisplay();
const displayLanguage = () => {
    
    if(select.options[select.selectedIndex].value === languages[0]){
        cssDisplay.style.display = 'none';
        jsDisplay.style.display = 'none';
        htmlDisplay.style.display = 'block';
    }else if(select.options[select.selectedIndex].value === languages[1]){
        cssDisplay.style.display = 'block';
        htmlDisplay.style.display = 'none';
        jsDisplay.style.display = 'none'
    }else if(select.options[select.selectedIndex].value === languages[2]){
        jsDisplay.style.display = 'block';
        cssDisplay.style.display = 'none';
        htmlDisplay.style.display = 'none';
    }
}


