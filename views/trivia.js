
var data = {
    1:{
        question:"Which team won the ipl 4 times?",
        correct:1,
        answers:["Mumbai indians","Chennai SuperKings","Kolkata Knight Riders","Delhi Capitals"],
        exp:"MUMBAI INDIANS is the only team to own the title four times in the years of 2013 ,2015 ,2017 ,2019."
    },
    2:{
        question:"Who was the purple cap of ipl 2019?",
        correct:3,
        answers:["Deppak Chahar","Bhuveneshwar kumar","Imran Tahir","Jasprit Bumrah"],
        exp:"Imran Tahir was capped with purple cap for his 26 wickets(most by any bowler in 2019 IPL)."
    },
    3:{
        question:" Who was the orange cap of ipl 2019?",
        correct:3,
        answers:["Virat Kohli","David Warner","A.B.Devilliers","Rishabh Pant"],
        exp:"David Warner was capped with orange cap for his 692 runs(most by any batsman in IPL 2019)."
    },
    4:{
        question:"How many last ball finishes were there in IPL 2020?",
        correct:4,
        answers:["3","1","6","2"],
        exp:"There were two last ball finishes CSK vs MI and CSK vs RR."
    },
    5:{
        question:"How many hat-trick were taken in IPL history?",
        correct:1,
        answers:["19","12","16","9"],
        exp:"There were 12 hat-tricks in IPL , 3 of them were taken by Amit Mishra."
    },
    6:{
        question:"Who was the first indian to score a century in IPL?",
        correct:3,
        answers:["Virat Kohli","Suresh Raina","Manish Pandey","Rohit Sharma"],
        exp:"Manish Pandey was the first Indian ,followed by Yusuf Pathan."
    },
    7:{
        question:"Who won the Player of the Series award in the first edition of the IPL?",
        correct:1,
        answers:["Shane Watson","Sachin Tendulkar","Adam Gilchrist","Shane Warne"],
        exp:"Shane Watson owned the tournament by his excellence."
    },
    8:{
        question:"Who has played the most IPL matches ever?",
        correct:2,
        answers:["MS Dhoni","Sachin Tendulkar","Suresh Raina","Rohit Sharma"],
        exp:"Suresh Raina played the most matches in IPL and he still plays for CSK in IPL."
    },
    9:{
        question:"Which IPL legend has bowled 1249 dot balls - more than anyone else?",
        correct:2,
        answers:["Bhuvneshvar Kumar","Harbhajan Singh","Irfan Pathan","Lasith Malinga"],
        exp:"Harbhajan Singh bowled most dot balls , followed by Lasith Malinga with 1,155 dot balls."
    },
    10:{
        question:"Which bowler has registered the best figures in IPL?",
        correct:4,
        answers:["Kagiso Rabada","Bhuvneshwar Kumar","Keemo Paul","Alzari Joseph"],
        exp:"Alzari Joseph has the best bowling figures 6/12 on his debut to IPL for MI."
    }
}

var curPage = 0;

var question = document.getElementById("question");
var answers = document.getElementById("answers");
var exp = document.getElementById("exp");
var check = document.getElementById("check");
var more1 = document.getElementById("more1");
var more2 = document.getElementById("more2");
var feedback = document.getElementById("feedback");

var one = document.getElementById("one");
var two = document.getElementById("two");


checkPage();

function checkPage(){
    one.style.display="block";
    two.style.display="none";
  

answers.innerHTML="";   
if(curPage==9){
    more1.style.display="none";
    more2.style.display="none";
    feedback.style.display="block"; 
} 
question.innerHTML = "<h4 class='q'>"+data[curPage+1].question+"</h4>";
curPage++;

for(let i=0;i<4;i++){
    answers.innerHTML += "<button class='answer' id='" +i+ "' href=''>"+data[curPage].answers[i]+"</button>";
}

const get = document.querySelectorAll(".answer");

console.log(get[1].getAttribute("id"));
get[0].addEventListener('click',()=>{

    console.log(get[0]);
    get[0].style.backgroundColor="#218c74";
    get[1].style.backgroundColor="#778ca3";
    get[2].style.backgroundColor="#778ca3";
    get[3].style.backgroundColor="#778ca3";
});
get[1].addEventListener('click',()=>{

    get[0].style.backgroundColor="#778ca3";
    get[1].style.backgroundColor="#218c74";
    get[2].style.backgroundColor="#778ca3";
    get[3].style.backgroundColor="#778ca3";
    
});
get[2].addEventListener('click',()=>{

    get[0].style.backgroundColor="#778ca3";
    get[1].style.backgroundColor="#778ca3";
    get[2].style.backgroundColor="#218c74"
    get[3].style.backgroundColor="#778ca3";
});
get[3].addEventListener('click',()=>{

    get[0].style.backgroundColor="#778ca3";
    get[1].style.backgroundColor="#778ca3";
    get[2].style.backgroundColor="#778ca3";
    get[3].style.backgroundColor="#218c74";
});

}

function checkAnswer(myAnswer){

  one.style.display="none";
  two.style.display="block";
  exp.innerHTML = data[curPage].exp;
}

