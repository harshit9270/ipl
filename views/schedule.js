
let container = document.getElementById('container');

for(let i=0;i<data.length;i++){
var embedCards = `
<div id="schedule-cards">

<div class="scard">

  <div class="scard-img outer">
    <!-- IMAGE FOR TEAMS -->

    <div class="team1">
      <img id="team-img" src="${data[i].team1Img}" alt="team1-img">
    </div>
    <h5 style="color:#52575d;">VS</h5>
    <div class="team2">
      <img id="team-img" src="${data[i].team2Img}" alt="team2-img">
    </div>
  </div>

  <div class="scard-date">
    <h5 id="team1" style="font-weight: 900;color:#41444b;" >${data[i].team1}</h5>
    
    <h5 id="team2" style="font-weight: 900;color:#41444b;" >${data[i].team2}</h5>
  </div>
  <div class="scard-teams">
    <h5 id="date" >${data[i].date}</h5>
    <h5 id="date" >${data[i].time}</h5>
    <h6 id="date" style="color:#ffaa71;" >MATCH ${i+1}</h6>
  </div>
  <div class="scard-teams">
    <h5 id="date">${data[i].centre}</h5>
    <a class="waves-effect waves-light btn red centerBtn" href="${data[i].link}" style="margin: 4px 0;">Match Center</a>
  </div>
</div>


</div>`
container.innerHTML += embedCards;
}