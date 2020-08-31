// For counting number of players
let playerCount = 0;
//For total credits
let credit = 0;

const team = document.getElementById('team');
let teamWK="",teamB="",teamAR="",teamBW="",teamY="";
const sBox1 = document.getElementById('sBox1');
const sBox2 = document.getElementById('sBox2');
const sBox3 = document.getElementById('sBox3');

const wicketkeepers = [{ name: "Alex Carey", team: "DC",score:9 },
{ name: "Dinesh Karthik", team: "KKR",score:10 },
{ name: "Ishan Kishan", team: "MI",score:8 },
{ name: "Johnny Bairstow", team: "SRH",score:9 },
{ name: "Jos Butler", team: "RR",score:10 },
{ name: "KL Rahul", team: "KXIP",score:10 },
{ name: "MS Dhoni", team: "CSK",score:10 },
{ name: "Nicholas Pooran", team: "KXIP",score:9 },
{ name: "Parthiv Patel", team: "RCB",score:9 },
{ name: "Quinton Decock", team: "MI",score:10 },
{ name: "Rishabh Pant", team: "DC",score:10 },
{ name: "Sanju Samson", team: "RR",score:9 },
{ name: "Wriddhiman Saha", team: "SRH",score:9 }
];

let LWK = document.getElementById("LWK");
let SWK = document.getElementById("SWK");
let WKL = wicketkeepers.length;

for (let i = 0; i < WKL; i++) {
    LWK.innerHTML += '<a class="btn-floating btn-small waves-effect waves-light red plus one"><i class="material-icons">add</i></a>' + '<span class="wicketKeeper">' + wicketkeepers[i].name + '</span><span class="marLeft">' + wicketkeepers[i].team + '</span><br>';
}

const getWK = document.querySelectorAll(".one");
let WKcount = 0; 
let WKcredit=0;
for (let i = 0; i < WKL; i++) {
    getWK[i].addEventListener('click', () => {
        if (WKcount < 2) {
            WKcredit += wicketkeepers[i].score;
            WKcount++;
            getWK[i].style.visibility = "hidden";
            teamWK += '<span>' + wicketkeepers[i].name +'<br>';
            SWK.innerHTML += '<span class="wicketKeeper">' + wicketkeepers[i].name + '</span><span class="marLeft">' + wicketkeepers[i].team + '</span><br>';
        }
        else {
            M.toast({ html: 'Reached the max limit for WicketKeepers!' })
        }
    });
}

function reset1() {
    WKcount = 0;
    WKcredit = 0;
    SWK.innerHTML = "";
    teamWK = "";
    for (let i = 0; i < WKL; i++) {
        getWK[i].style.visibility = "visible";
    }
}




/* Batsman */
const batsman = [
    { name: "Aaron Finch", team: "RCB" ,score:8 },
    { name: "AB De Villiers", team: "RCB" ,score:10 },
    { name: "Ajinkye Rahane", team: "RR" ,score:9 },
    { name: "Ambati Rayudu", team: "CSK" ,score:10 },
    { name: "Chris Gayle", team: "KXIP" ,score:10 },
    { name: "David Warner", team: "SRH" ,score:10 },
    { name: "Eoin Morgan", team: "KKR" ,score:9 },
    { name: "Kane Williamson", team: "SRH" ,score:9 },
    { name: "Mandeep Singh", team: "RCB" ,score:8 },
    { name: "Manish Pandey", team: "SRH" ,score:10 },
    { name: "Mayank Agarwal", team: "KXIP" ,score:9 },
    { name: "Nitish Rana", team: "KKR" ,score:9 },
    { name: "Prithvi Shaw", team: "DC" ,score:9 },
    { name: "Rohit Sharma", team: "MI" ,score:10 },
    { name: "Sarfaraz Khan", team: "RCB" ,score:9 },
    { name: "Shane Watson", team: "CSK" ,score:10 },
    { name: "Shikhar Dhawan", team: "DC" ,score:10 },
    { name: "Shimron Hetmeyer", team: "DC" ,score:9 },
    { name: "Shreyas Iyer", team: "DC" ,score:10 },
    { name: "Shubman Gill", team: "KKR" ,score:10 },
    { name: "Steve Smith", team: "RR" ,score:10 },
    { name: "Suresh Raina", team: "CSK" ,score:10 },
    { name: "Surya Kumar Yadav", team: "MI" ,score:10 },
    { name: "Tom Banton", team: "KKR" ,score:8 },
    { name: "Virat Kohli", team: "RCB" ,score:10 }
]

let LB = document.getElementById("LB");
let SB = document.getElementById("SB");
let BL = batsman.length;

for (let i = 0; i < BL; i++) {
    LB.innerHTML += '<a class="btn-floating btn-small waves-effect waves-light red plus two"><i class="material-icons">add</i></a>' + '<span class="wicketKeeper">' + batsman[i].name + '</span><span class="marLeft">' + batsman[i].team + '</span><br>';
}

const getB = document.querySelectorAll(".two");
let Bcount = 0,Bcredit =0;

for (let i = 0; i < BL; i++) {
    getB[i].addEventListener('click', () => {
        if (Bcount<3) {
            Bcredit += batsman[i].score;
            Bcount++;
            getB[i].style.visibility = "hidden";
            teamB += '<span>' + batsman[i].name +'<br>';
            SB.innerHTML += '<span class="wicketKeeper">' + batsman[i].name + '</span><span class="marLeft">' + batsman[i].team + '</span><br>';
        }
        else {
            M.toast({ html: 'Reached the max limit for Batsman + Wicketkeeper!' })
        }
    });
}

function reset2() {
    Bcount = 0;
    Bcredit = 0;
    SB.innerHTML = "";
    teamB="";
    for (let i = 0; i < BL; i++) {
        getB[i].style.visibility = "visible";
    }
}



/* AllRounders */
const allrounder = [
    { name: "Abhishek Sharma", team: "SRH" ,score:8 },
    { name: "Andrew Russell", team: "KKR" ,score:10 },
    { name: "Ben Stokes", team: "RR" ,score:10 },
    { name: "Chris Jordan", team: "KXIP" ,score:8 },
    { name: "Deepak Hooda", team: "KXIP" ,score:8 },
    { name: "Dwayne Bravo", team: "CSK" ,score:10 },
    { name: "Glenn Maxwell", team: "KXIP" ,score:10 },
    { name: "Gurkerat Singh Mann", team: "RCB" ,score:9 },
    { name: "Hardik Pandya", team: "MI" ,score:10 },
    { name: "Harshal Patel", team: "DC" ,score:8 },
    { name: "Jimmy Neesham", team: "KXIP" ,score:8 },
    { name: "Kamlesh Nagarkoti", team: "KKR" ,score:8 },
    { name: "Keemo Paul", team: "DC" ,score:9 },
    { name: "Krishnappa Gowtham", team: "RR" ,score:9 },
    { name: "Krunal Pandya", team: "MI" ,score:10 },
    { name: "Mandeep Singh", team: "KXIP" ,score:9 },
    { name: "Marcus Stoinis", team: "DC" ,score:9 },
    { name: "Mitchell Santner", team: "CSK" ,score:9 },
    { name: "Moen Ali", team: "RCB" ,score:9 },
    { name: "Mohammad Nabi", team: "SRH" ,score:10 },
    { name: "Ravindra Jadeja", team: "CSK" ,score:10 },
    { name: "Sam Curran", team: "DC" ,score:9 },
    { name: "Sherfane Rutherford", team: "MI" ,score:9 },
    { name: "Shivam Dube", team: "RCB" ,score:8 },
    { name: "Shreyas Gopal", team: "RR" ,score:9 },
    { name: "Sunil Naraine", team: "KKR" ,score:10 },
    { name: "Vijay Shankar", team: "SRH" ,score:9 },
    { name: "Washington Sundar", team: "RCB" ,score:8 }
]
 

let LAR = document.getElementById("LAR");
let SAR = document.getElementById("SAR");
let ARL = allrounder.length;

for (let i = 0; i < ARL; i++) {
    LAR.innerHTML += '<a class="btn-floating btn-small waves-effect waves-light red plus three"><i class="material-icons">add</i></a>' + '<span class="wicketKeeper">' + allrounder[i].name + '</span><span class="marLeft">' + allrounder[i].team + '</span><br>';
}

const getAR = document.querySelectorAll(".three");
let ARcount = 0,ARcredit = 0;
for (let i = 0; i < ARL; i++) {
    getAR[i].addEventListener('click', () => {
        if (ARcount < 2) {
            ARcredit +=allrounder[i].score;
            ARcount++;
            getAR[i].style.visibility = "hidden";
            teamAR += '<span>' + allrounder[i].name +'<br>';
            SAR.innerHTML += '<span class="wicketKeeper">' + allrounder[i].name + '</span><span class="marLeft">' + allrounder[i].team + '</span><br>';
        }
        else {
            M.toast({ html: 'Reached the max limit for AllRounders!' })
        }
    });
}

function reset3() {
    ARcount = 0;
    ARcredit = 0;
    SAR.innerHTML = "";
    teamAR="";
    for (let i = 0; i < ARL; i++) {
        getAR[i].style.visibility = "visible";
    }
}

/* Bowlers */
const bowler = [
    { name: "Amit Mishra", team: "DC" ,score:10 },
    { name: "Andrew Notrje", team: "DC" ,score:8 },
    { name: "Andrew Tye", team: "RR" ,score:9 },
    { name: "Ankit Rajpoot", team: "RR" ,score:8 },
    { name: "Arshdeep Singh", team: "KXIP" ,score:8 },
    { name: "Avesh Khan", team: "DC" ,score:8 },
    { name: "Basil Thampi", team: "SRH" ,score:8 },
    { name: "Bill Stanlake", team: "SRH" ,score:8 },
    { name: "Bhuvenshwar Kumar", team: "SRH" ,score:10 },
    { name: "Dale Steyn", team: "RCB" ,score:10 },
    { name: "Deepak Chahar", team: "CSK" ,score:10 },
    { name: "Dhawal Kulkarni", team: "MI" ,score:9 },
    { name: "Harbhajan Singh", team: "CSK" ,score:10 },
    { name: "Hardus Visjoen", team: "KXIP" ,score:9 },
    { name: "Harry Gurny", team: "KKR" ,score:9 },
    { name: "Imran Tahir", team: "CSK" ,score:10 },
    { name: "Ishant Sharma", team: "DC" ,score:9 },
    { name: "Jaydev Unadkat", team: "RR" ,score:10 },
    { name: "Jasprit Bumrah", team: "MI" ,score:10 },
    { name: "Jofra Archer", team: "RR" ,score:10 },
    { name: "Jayant Yadav", team: "MI" ,score:8 },
    { name: "Kaigso Rabada", team: "CSK" ,score:10 },
    { name: "Kane Richardson", team: "RCB" ,score:8 },
    { name: "Khaleel Ahmad", team: "SRH" ,score:9 },
    { name: "Kuldeep Yadav", team: "KKR" ,score:10 },
    { name: "Lasith Malinga", team: "MI" ,score:10 },
    { name: "Lockie Fergusion", team: "KKR" ,score:9 },
    { name: "Mayank Markande", team: "RR" ,score:9 },
    { name: "Mitchell McClenaghan", team: "MI" ,score:9 },
    { name: "Mohammad Shami", team: "KXIP" ,score:10 },
    { name: "Mohammad Siraj", team: "RCB" ,score:9 },
    { name: "Mohit Sharma", team: "DC" ,score:8 },
    { name: "Mujeeb Ur Rahman", team: "KXIP" ,score:8 },
    { name: "Murugan Ashwin", team: "KXIP" ,score:8 },
    { name: "Nathan Coulter Nile", team: "MI" ,score:9 },
    { name: "Navdeep Saini", team: "RCB" ,score:9 },
    { name: "Oshane Thomas", team: "RR" ,score:9 },
    { name: "Pat Cummins", team: "KKR" ,score:10 },
    { name: "Piyush Chawla", team: "CSK" ,score:10 },
    { name: "Prasidh Krishna", team: "KKR" ,score:9 },
    { name: "Rahul Chahar", team: "MI" ,score:10 },
    { name: "Rashid Khan", team: "SRH" ,score:10 },
    { name: "R. Ashwin", team: "DC" ,score:10 },
    { name: "Sandeep Lamichhane", team: "DC" ,score:10 },
    { name: "Sandeep Sharma", team: "SRH" ,score:9 },
    { name: "Sandeep Warrier", team: "KKR" ,score:9 },
    { name: "Shardul Thakur", team: "CSK" ,score:10 },  
    { name: "Sheldon Cotrell", team: "KXIP" ,score:10 },
    { name: "Shivam Mavi", team: "KKR" ,score:9 },
    { name: "Siddarth Kaul", team: "SRH" ,score:9 },
    { name: "Tom Curran", team: "RR" ,score:8 },
    { name: "Trent Boult", team: "MI" ,score:10 },
    { name: "Umesh Yadav", team: "RCB" ,score:9 },
    { name: "Yuzuvendra Chahal", team: "RCB" ,score:10 },
]


let LBW = document.getElementById("LBW");
let SBW = document.getElementById("SBW");
let BWL = bowler.length;

for (let i = 0; i < BWL; i++) {
    LBW.innerHTML += '<a class="btn-floating btn-small waves-effect waves-light red plus four"><i class="material-icons">add</i></a>' + '<span class="wicketKeeper">' + bowler[i].name + '</span><span class="marLeft">' + bowler[i].team + '</span><br>';
}

const getBW = document.querySelectorAll(".four");
let BWcount = 0,BWcredit = 0; 
for (let i = 0; i < BWL; i++) {
    getBW[i].addEventListener('click', () => {
     
        if (BWcount<3) {
            BWcount++;
            BWcredit += bowler[i].score;
            getBW[i].style.visibility = "hidden";
            teamBW += '<span>' + bowler[i].name +'<br>';
            SBW.innerHTML += '<span class="wicketKeeper">' + bowler[i].name + '</span><span class="marLeft">' + bowler[i].team + '</span><br>';
        }
        else {
            M.toast({ html: 'Reached the max limit for Bowlers!' })
        }
    });
}

function reset4() {
    BWcount = 0;
    BWcredit = 0;
    SBW.innerHTML = "";
    teamBW="";
    for (let i = 0; i < BWL; i++) {
        getBW[i].style.visibility = "visible";
    }
}


/* Youngesters */
const youngester = [
    { name: "Abdul Samad", team: "RR" ,score:6 },
    { name: "Akash Singh", team: "RR" ,score:8 },
    { name: "Anirudh Joshi", team: "RR" ,score:7 },
    { name: "Anuj Rawat", team: "RR" ,score:7 },
    { name: "Ishan Porel", team: "KXIP" ,score:7 },
    { name: "Karthik Tyagi", team: "RR" ,score:10 },
    { name: "Priyam Garg", team: "SRH" ,score:9 },
    { name: "Ravi Bishnoi", team: "KXIP" ,score:10 },
    { name: "Riyan Parag", team: "RR" ,score:9 },
    { name: "Sanjay Yadav", team: "SRH" ,score:6 },
    { name: "Tushar Despande", team: "DC" ,score:7 },
    { name: "letun Chakrabrthy", team: "KKR" ,score:6 },
    { name: "Virat Singh", team: "SRH" ,score:6 },
    { name: "Yashasvi Jaiswal", team: "RR" ,score:10 }
]


let LY = document.getElementById("LY");
let SY = document.getElementById("SY");
let YL = youngester.length;

for (let i = 0; i < YL; i++) {
    LY.innerHTML += '<a class="btn-floating btn-small waves-effect waves-light red plus five"><i class="material-icons">add</i></a>' + '<span class="wicketKeeper">' + youngester[i].name + '</span><span class="marLeft">' + youngester[i].team + '</span><br>';
}

const getY = document.querySelectorAll(".five");
let Ycount = 0, Ycredit = 0;
for (let i = 0; i < YL; i++) {
    getY[i].addEventListener('click', () => {
      
        if (Ycount < 1) {
            Ycount++;
            Ycredit += youngester[i].score;
            getY[i].style.visibility = "hidden";
            teamY += '<span>' + youngester[i].name +'<br>';
            SY.innerHTML += '<span class="wicketKeeper">' + youngester[i].name + '</span><span class="marLeft">' + youngester[i].team + '</span><br>';
        }
        else {
            M.toast({ html: 'Reached the max limit for Youngesters!' });
        }
    });
}

function reset5() {
    Ycount = 0;
    Ycredit = 0;
    SY.innerHTML = "";
    teamY ="";
    for (let i = 0; i < YL; i++) {
        getY[i].style.visibility = "visible";
    }
}


function countCheck(){

    playerCount = WKcount + Bcount + ARcount + BWcount + Ycount;

if(playerCount > 11){
    M.toast({ html: 'Selection exceeded the team limit!<br>Team can have maximum 11 players.<button id="toastReset" onclick="resetAll()">Reset All</button>' });
}
else if(WKcount<1){
    // console.log(WKcount);
    M.toast({ html:'Atleast one Wicketkeeper should be there!'})
}
else if(Bcount<3){
    M.toast({ html:'Atleast three Batsman should be there!'})
}
else if(ARcount<2){
    M.toast({ html:'Atleast two Allrounders should be there!'})
}
else if(BWcount<3){
    M.toast({ html:'Atleast three Bowlers should be there!'})
}
else if(playerCount < 11){
    M.toast({ html: 'Selection did not the team limit!<br>Team must have 11 players.<button id="toastReset" onclick="resetAll()">Reset All</button>' });
}
else if(playerCount==11){
    
    credit = WKcredit + Bcredit + ARcredit + BWcredit + Ycredit;
    team.innerHTML =  "<h4 style='color:pink;'>Fantasy Team</h4>" + (teamWK + teamB +teamAR + teamBW +teamY);
    let chances = Math.ceil((credit/110)*100); 
    sBox1.innerHTML += "<h4>110</h4>";
    sBox2.innerHTML += "<h4>" + credit +"</h4>";
    sBox3.innerHTML += "<h4>" + chances + "/100 </h4>";

    const left = document.getElementById('left');
    const container = document.getElementById('container');
    const right = document.getElementById('right');
    const check = document.getElementById('checkResult');
    const resultBox = document.getElementById('resultBox');
    container.style.padding="0";
    left.style.display="none";
    right.style.display="none";
    check.style.display="none";
    resultBox.style.display="block";
}
}


function resetAll(){
    SWK.innerHTML= "";
    SB.innerHTML= "";
    SAR.innerHTML= "";
    SBW.innerHTML= "";
    SY.innerHTML= "";
}

const down = document.querySelectorAll(".down");

down[0].addEventListener('click', () => {
    if (LWK.style.display == "none") {
        down[0].style.transform = "rotateX(180deg)"
        LWK.style.display = "block";
        LB.style.display = "none";
        LAR.style.display = "none";
        LBW.style.display = "none";
        LY.style.display = "none";
    } else {
        down[0].style.transform = "rotateX(360deg)"
        down[1].style.transform = "rotateX(360deg)"
        down[2].style.transform = "rotateX(360deg)"
        down[3].style.transform = "rotateX(360deg)"
        down[4].style.transform = "rotateX(360deg)"
        LWK.style.display = "none";
        LB.style.display = "none";
        LAR.style.display = "none";
        LBW.style.display = "none";
        LY.style.display = "none";
    }
});
down[1].addEventListener('click', () => {
    if (LB.style.display == "none") {
        down[1].style.transform = "rotateX(180deg)"
        LB.style.display = "block";
        LWK.style.display = "none";
        LAR.style.display = "none";
        LBW.style.display = "none";
        LY.style.display = "none";
    } else {
        down[1].style.transform = "rotateX(360deg)"
        down[0].style.transform = "rotateX(360deg)"
        down[2].style.transform = "rotateX(360deg)"
        down[3].style.transform = "rotateX(360deg)"
        down[4].style.transform = "rotateX(360deg)"
        LB.style.display = "none";
        LWK.style.display = "none";
        LAR.style.display = "none";
        LBW.style.display = "none";
        LY.style.display = "none";
    }
});
down[2].addEventListener('click', () => {
    if (LAR.style.display == "none") {
        down[2].style.transform = "rotateX(180deg)"
        LAR.style.display = "block";
        LWK.style.display = "none";
        LB.style.display = "none";
        LBW.style.display = "none";
        LY.style.display = "none";
    } else {
        down[2].style.transform = "rotateX(360deg)"
        down[1].style.transform = "rotateX(360deg)"
        down[0].style.transform = "rotateX(360deg)"
        down[3].style.transform = "rotateX(360deg)"
        down[4].style.transform = "rotateX(360deg)"
        LAR.style.display = "none";
        LWK.style.display = "none";
        LB.style.display = "none";
        LBW.style.display = "none";
        LY.style.display = "none";
    }
});
down[3].addEventListener('click', () => {
    if (LBW.style.display == "none") {
        down[3].style.transform = "rotateX(180deg)"
        LBW.style.display = "block";
        LWK.style.display = "none";
        LB.style.display = "none";
        LAR.style.display = "none";
        LY.style.display = "none";
    } else {
        down[3].style.transform = "rotateX(360deg)"
        down[1].style.transform = "rotateX(360deg)"
        down[2].style.transform = "rotateX(360deg)"
        down[0].style.transform = "rotateX(360deg)"
        down[4].style.transform = "rotateX(360deg)"
        LBW.style.display = "none";
        LWK.style.display = "none";
        LB.style.display = "none";
        LAR.style.display = "none";
        LY.style.display = "none";
    }
});
down[4].addEventListener('click', () => {
    if (LY.style.display == "none") {
        down[4].style.transform = "rotateX(180deg)"
        LY.style.display = "block";
        LWK.style.display = "none";
        LB.style.display = "none";
        LAR.style.display = "none";
        LBW.style.display = "none";
    } else {
        down[4].style.transform = "rotateX(360deg)"
        down[1].style.transform = "rotateX(360deg)"
        down[2].style.transform = "rotateX(360deg)"
        down[3].style.transform = "rotateX(360deg)"
        down[0].style.transform = "rotateX(360deg)"
        LY.style.display = "none";
        LWK.style.display = "none";
        LB.style.display = "none";
        LAR.style.display = "none";
        LBW.style.display = "none";
    }
});











