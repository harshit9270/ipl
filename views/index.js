// JS for floating buuton

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});






//Ball and main

const ballC = document.getElementById("ballC");
const main = document.getElementById("main");
const navbar = document.getElementById("navbar");
const style1 = document.getElementById("style1");
const style2 = document.getElementById("style2");
const style3 = document.getElementById("style3");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const Prev = document.getElementById("Prev");
const Next = document.getElementById("Next");
let count = 1;
let page = 1;



setTimeout(()=>{
  ballC.style.display="none";
  main.style.display="block";
  navbar.style.display="block";
},2000);


next.addEventListener('click',()=>{
    ++count;
    if(count==2){
      style1.style.display="none";
      style3.style.display="none";
      style2.style.display="block";
      next.style.opacity="1";
      prev.style.opacity="1";
    }
    else if(count==3){
      style1.style.display="none";
      style2.style.display="none";
      style3.style.display="block";
      next.style.opacity="0.3";
      prev.style.opacity="1";
    }
    else if(count>3){
      count=3;
    }
});

prev.style.opacity="0.3";
prev.addEventListener('click',()=>{
    --count;
    if(count==2){
      style1.style.display="none";
      style3.style.display="none";
      style2.style.display="block";
      prev.style.opacity="1";
      next.style.opacity="1";
    }
    else if(count==1){
      style1.style.display="block";
      style2.style.display="none";
      style3.style.display="none";
      prev.style.opacity="0.3";
      next.style.opacity="1";
    }
    else if(count<1){
      count=1;
    }
});

// Trending videos

Next.addEventListener('click',()=>{
  ++page;
  if(page==2){
    Style1.style.display="none";
    Style3.style.display="none";
    Style2.style.display="block";
    Next.style.opacity="1";
    Prev.style.opacity="1";
  }
  else if(page==3){
    Style1.style.display="none";
    Style2.style.display="none";
    Style3.style.display="block";
    Next.style.opacity="0.3";
    Prev.style.opacity="1";
  }
  else if(page>3){
    page=3;
  }
});

Prev.style.opacity="0.3";
Prev.addEventListener('click',()=>{
  --page;
  if(page==2){
    Style1.style.display="none";
    Style3.style.display="none";
    Style2.style.display="block";
    Prev.style.opacity="1";
    Next.style.opacity="1";
  }
  else if(page==1){
    Style1.style.display="block";
    Style2.style.display="none";
    Style3.style.display="none";
    Prev.style.opacity="0.3";
    Next.style.opacity="1";
  }
  else if(page<1){
    page=1;
  }
});


//Update

const sixOne = document.getElementById("one");
const sixTwo = document.getElementById("two");
const scoreOne = document.getElementById("three");
const scoreTwo = document.getElementById("four");
setInterval(() => {
    sixOne.style.display="none";
    sixTwo.style.display="block";
},4000)

setInterval(() => {
    sixTwo.style.display="none";
    sixOne.style.display="block";
},6000)

setInterval(() => {
  scoreOne.style.display="none";
  scoreTwo.style.display="block";
},3000)
setInterval(() => {
    scoreTwo.style.display="none";
    scoreOne.style.display="block";
  },6000)

/* HalfOne */
const hOne = document.getElementById("hone");
const hTwo = document.getElementById("htwo");
const hThree = document.getElementById("hthree");
setInterval(() => {
    hOne.style.display="none";
    hTwo.style.display="block";
    hThree.style.display="none";
},4000)
setInterval(() => {
    hOne.style.display="none";
    hTwo.style.display="none";
    hThree.style.display="block";
},6000)
setInterval(() => {
    hOne.style.display="block";
    hTwo.style.display="none";
    hThree.style.display="none";
},8000)

const section1 = document.getElementById("sone");
const section2 = document.getElementById("stwo");

setInterval(()=>{
  section1.style.display="none";
  section2.style.display="block";
},4000);

setInterval(()=>{
  section1.style.display="block";
  section2.style.display="none";
},6000);


const e1 = document.getElementById("e1");
const e2 = document.getElementById("e2");

setInterval(() => {
  e1.style.display="none";
  e2.style.display="flex";
},4000);

setInterval(() => {
  e1.style.display="flex";
  e2.style.display="none";
},6000);

const s1 = document.getElementById("s1");
const s2 = document.getElementById("s2");
const s3 = document.getElementById("s3");
const s4 = document.getElementById("s4");
const s5 = document.getElementById("s5");
const s6 = document.getElementById("s6");
const s7 = document.getElementById("s7");
const s8 = document.getElementById("s8");
const s9 = document.getElementById("s9");
const s10 = document.getElementById("s10");
const s11 = document.getElementById("s11");
const s12 = document.getElementById("s12");


setInterval(() => {
   s2.style.display="flex";
   s1.style.display="none";
   s3.style.display="none";
   s4.style.display="none";
   s5.style.display="none";
   s6.style.display="none";
   s7.style.display="none";
   s8.style.display="none";
   s9.style.display="none";
   s10.style.display="none";
   s11.style.display="none";
   s12.style.display="none";
},4000);
setInterval(() => {
  s3.style.display="flex";
   s1.style.display="none";
   s2.style.display="none";
   s4.style.display="none";
   s5.style.display="none";
   s6.style.display="none";
   s7.style.display="none";
   s8.style.display="none";
   s9.style.display="none";
   s10.style.display="none";
   s11.style.display="none";
   s12.style.display="none";
},6000);
setInterval(() => {
  s4.style.display="flex";
  s1.style.display="none";
  s2.style.display="none";
  s3.style.display="none";
  s5.style.display="none";
  s6.style.display="none";
  s7.style.display="none";
  s8.style.display="none";
  s9.style.display="none";
  s10.style.display="none";
  s11.style.display="none";
  s12.style.display="none";
},8000);
setInterval(() => {
  s5.style.display="flex";
  s1.style.display="none";
  s2.style.display="none";
  s3.style.display="none";
  s4.style.display="none";
  s6.style.display="none";
  s7.style.display="none";
  s8.style.display="none";
  s9.style.display="none";
  s10.style.display="none";
  s11.style.display="none";
  s12.style.display="none";
},10000);
setInterval(() => {
  s6.style.display="flex";
  s1.style.display="none";
  s2.style.display="none";
  s3.style.display="none";
  s4.style.display="none";
  s5.style.display="none";
  s7.style.display="none";
  s8.style.display="none";
  s9.style.display="none";
  s10.style.display="none";
  s11.style.display="none";
  s12.style.display="none";
},12000);
setInterval(() => {
  s7.style.display="flex";
  s1.style.display="none";
  s2.style.display="none";
  s3.style.display="none";
  s4.style.display="none";
  s5.style.display="none";
  s6.style.display="none";
  s8.style.display="none";
  s9.style.display="none";
  s10.style.display="none";
  s11.style.display="none";
  s12.style.display="none";
},14000);
setInterval(() => {
  s8.style.display="flex";
  s1.style.display="none";
  s2.style.display="none";
  s3.style.display="none";
  s4.style.display="none";
  s5.style.display="none";
  s6.style.display="none";
  s7.style.display="none";
  s9.style.display="none";
  s10.style.display="none";
  s11.style.display="none";
  s12.style.display="none";
},16000);
setInterval(() => {
  s9.style.display="flex";
  s1.style.display="none";
  s2.style.display="none";
  s3.style.display="none";
  s4.style.display="none";
  s5.style.display="none";
  s6.style.display="none";
  s7.style.display="none";
  s8.style.display="none";
  s10.style.display="none";
  s11.style.display="none";
  s12.style.display="none";
},18000);
setInterval(() => {
  s10.style.display="flex";
  s1.style.display="none";
  s2.style.display="none";
  s3.style.display="none";
  s4.style.display="none";
  s5.style.display="none";
  s6.style.display="none";
  s7.style.display="none";
  s8.style.display="none";
  s9.style.display="none";
  s11.style.display="none";
  s12.style.display="none";
},20000);
setInterval(() => {
  s11.style.display="flex";
  s1.style.display="none";
  s2.style.display="none";
  s3.style.display="none";
  s4.style.display="none";
  s5.style.display="none";
  s6.style.display="none";
  s7.style.display="none";
  s8.style.display="none";
  s9.style.display="none";
  s10.style.display="none";
  s12.style.display="none";
},20000);
setInterval(() => {
  s12.style.display="flex";
  s1.style.display="none";
  s2.style.display="none";
  s3.style.display="none";
  s4.style.display="none";
  s5.style.display="none";
  s6.style.display="none";
  s7.style.display="none";
  s8.style.display="none";
  s9.style.display="none";
  s10.style.display="none";
  s11.style.display="none";
},20000);


