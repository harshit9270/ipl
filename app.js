require('dotenv').config();

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

const app = express();

const PORT = process.env.PORT || 80;


app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.use(express.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/views/index.html");
});
app.get("/teams", function (req, res) {
    res.sendFile(__dirname + "/views/team.html");
});
app.get("/schedule", function (req, res) {
    res.sendFile(__dirname + "/views/schedule.html");
});
app.get("/standings", function (req, res) {
    res.sendFile(__dirname + "/views/standings.html");
});
app.get("/videos", function (req, res) {
    res.sendFile(__dirname + "/views/videos.html");
});
app.get("/updates", function (req, res) {
    res.sendFile(__dirname + "/views/news.html");
});
app.get("/contact", function (req, res) {
    res.sendFile(__dirname + "/views/contact.html");
});
app.get("/fantasy", function (req, res) {
    res.sendFile(__dirname + "/views/fantasy.html");
});
app.get("/info", function (req, res) {
    res.sendFile(__dirname + "/views/info.html");
});
app.get("/trivia", function (req, res) {
    res.sendFile(__dirname + "/views/trivia.html");
});
app.get("/feedback", function (req, res) {
    res.sendFile(__dirname + "/views/feedback.html");
});
app.get("/mi", function (req, res) {
    res.sendFile(__dirname + "/views/MI.html");
});
app.get("/csk", function (req, res) {
    res.sendFile(__dirname + "/views/CSK.html");
});
app.get("/dc", function (req, res) {
    res.sendFile(__dirname + "/views/DC.html");
});
app.get("/rr", function (req, res) {
    res.sendFile(__dirname + "/views/RR.html");
});
app.get("/kxip", function (req, res) {
    res.sendFile(__dirname + "/views/KXIP.html");
});
app.get("/rcb", function (req, res) {
    res.sendFile(__dirname + "/views/RCB.html");
});
app.get("/srh", function (req, res) {
    res.sendFile(__dirname + "/views/SRH.html");
});
app.get("/kkr", function (req, res) {
    res.sendFile(__dirname + "/views/KKR.html");
});

app.post("/feedback", (req,res)=>{
    res.writeHead(200, { 'Content-Type': 'text/html' });
     res.write("<img src='https://cdn.pixabay.com/photo/2016/09/01/08/24/smiley-1635449__340.png' style='margin:60px 42%; width:200px;'><p style='text-align:center;font-size:1.8rem;margin-top:60px;'>Thanks for taking out your precious time!<br>Your feedback means a lot to us.</p><a href='/'style='text-align:center;margin-left:46%;'><button style='font-size:1.5rem;padding:6px;border-radius:10px;background-color:aliceblue;cursor:pointer;'>Get Back</button></a>")
     res.end();
    });

// app.post("/cbatsman", async (req, res) => {
//     const batsman = req.body.cappedBatsman;
//     const team = req.body.team;
//     const numberBat = Number(batsman);
//     const T = req.body.T;

//     const appKey = process.env.key1;

//     const url = `https://cricapi.com/api/playerStats?apikey=${appKey}&pid=${numberBat}`;
//     const fetch_response = await fetch(url);
//     const cricketData = await fetch_response.json();

//     const img = (cricketData.imageURL) || ("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAqgwETNY6BqOd76U888zJtx4529Ggiamqsw&usqp=CAU");
//     const name = cricketData.name;
//     const age = cricketData.currentAge;
//     const born = cricketData.born;
//     const battingStyle = cricketData.battingStyle;
//     const bowlingStyle = cricketData.bowlingStyle || "null";
//     console.log(cricketData.data.batting.ODIs);
//     console.log(cricketData.data.batting.ODIs);

//     const odiMatches = cricketData.data.batting.ODIs.Mat;
//     const odiRuns = cricketData.data.batting.ODIs.Runs;
//     const odiFifty = cricketData.data.batting.ODIs[50];
//     const odiHundred = cricketData.data.batting.ODIs[100];
//     /* T20 */
//     const t20Matches = cricketData.data.batting.T20Is.Mat;
//     const t20Runs = cricketData.data.batting.T20Is.Runs;
//     const t20Fifty = cricketData.data.batting.T20Is[50];
//     const t20Hundred = cricketData.data.batting.T20Is[100];

//     var test = `<!DOCTYPE html>
//          <html lang="en">
//          <head>
//              <meta charset="UTF-8">
//              <meta name="viewport" content="width=device-width, initial-scale=1.0">
//              <title>IplFeverr | Ipl Teams</title>

//              <!--Font Awesome-->
//              <script src="https://kit.fontawesome.com/efd71d3ed7.js" crossorigin="anonymous"></script>
            
//             <style>
//                    body{
//                     background-color:grey;
//                    }
//                    #close{
//                     float: right;
//                     font-size:2rem;
//                     color:black;
//                    }
//                    #close:hover{
//                        color:purple;
//                    }
//                    #container{
//                     display: flex;
//                     flex-direction: column;
//                     justify-content:center;
//                     align-items:center;
//                    }

//             </style>

//          </head>
//          <body>
//          <a href ='${T}.html'><i class="fa fa-times" id="close"></i></a>
//              <div id="container">
//                  <div id="section1">
//                    <img src=${img} alt="" style="box-shadow:0px 0px 10px 1px black;margin-bottom:20px;padding:2px;">
//                    <h2 id="name">${name}</h2>
//                    <h3 id="team">${team}</h3>
//                  </div>
//                  <div id="section2">
//                      <table>
                         
//                          <tr>
//                              <th>Plays for</th>
//                              <td style="padding-left:25px;">${team}</td>
//                              </tr>
                         
//                          <tr>
                         
//                              <th>Age</th>
//                              <td style="padding-left:25px;">${age}</td>
//                              </tr>
                         
//                          <tr>
//                              <th>Born</th>
//                              <td style="padding-left:25px;">${born}</td>
//                              </tr>
                         
//                          <tr>
//                              <th>Batting Style</th>
//                              <td style="padding-left:25px;">${battingStyle}</td>
//                          </tr>
                         
//                          <tr>
//                              <th>Bowling Style</th>
//                              <td style="padding-left:25px;">${bowlingStyle}</td>
//                          </tr>
                        
                         
//                      </table>
//                  </div>
//                  <div id="section3" style="display: flex;">
//                   <div id="card1" style="box-shadow:0px 0px 10px 1px black;margin:30px;padding:40px;">
//                      <h3>T20 Carrer:</h3>
//                      <table>
//                          <tr>
//                              <th>Matches</th>
//                              <td  style="padding-left:25px;">${t20Matches}</td>
//                          </tr>
                         
//                          <tr>
//                              <th>Runs</th>
//                              <td  style="padding-left:25px;">${t20Runs}</td>
//                          </tr>
         
                       
         
//                          <tr>
//                              <th>50s</th>
//                              <td  style="padding-left:25px;">${t20Fifty}</td>
//                          </tr>
         
//                          <tr>
//                              <th>100s</th>
//                              <td  style="padding-left:25px;">${t20Hundred}</td>
//                          </tr>
                         
//                      </table>
//                   </div>
//                   <div id="card2" style="box-shadow:0px 0px 10px 1px black;margin:30px;padding:40px;">
//                      <h3>ODI Carrer:</h3>
//                      <table>
//                          <tr>
//                              <th>Matches</th>
//                              <td  style="padding-left:25px;">${odiMatches}</td>
//                          </tr>
                         
//                          <tr>
//                              <th>Runs</th>
//                              <td  style="padding-left:25px;">${odiRuns}</td>
//                          </tr>
         
                        
         
//                          <tr>
//                              <th>50s</th>
//                              <td  style="padding-left:25px;">${odiFifty}</td>
//                          </tr>
         
//                          <tr>
//                              <th>100s</th>
//                              <td  style="padding-left:25px;">${odiHundred}</td>
//                          </tr>
//                          </table>
//                   </div>
                
//                  </div>
//              </div>
//          </body>
//          </html>`;


//     res.send();
    
// })

// Befooling heroku

app.post("/cbatsman", function (req, res) {
    const batsman = req.body.cappedBatsman;
    const team = req.body.team;
    const numberBat = Number(batsman);
    const T = req.body.T;

    const appKey = "0CYUfBW7ODXfytpDSflRHkMxKpU2";

    const url = `https://cricapi.com/api/playerStats?apikey=${appKey}&pid=${numberBat}`;
    // const fetch_response = await fetch(url);
    // const cricketData = await fetch_response.json();

    https.get(url, function(response){
         response.on("data", async function(data){
        console.log(response.statusCode);
        
        const cricketData = await JSON.parse(data);
        console.log(cricketData);

        const img = (cricketData.imageURL) || ("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAqgwETNY6BqOd76U888zJtx4529Ggiamqsw&usqp=CAU");
        const name = cricketData.name;
        const age = cricketData.currentAge;
        const born = cricketData.born;
        const battingStyle = cricketData.battingStyle;
        const bowlingStyle = cricketData.bowlingStyle || "null";
        console.log(cricketData.data.batting.ODIs);
        console.log(cricketData.data.batting.ODIs);

        const odiMatches = cricketData.data.batting.ODIs.Mat;
        const odiRuns = cricketData.data.batting.ODIs.Runs;
        const odiFifty = cricketData.data.batting.ODIs[50];
        const odiHundred = cricketData.data.batting.ODIs[100];
        /* T20 */
        const t20Matches = cricketData.data.batting.T20Is.Mat;
        const t20Runs = cricketData.data.batting.T20Is.Runs;
        const t20Fifty = cricketData.data.batting.T20Is[50];
        const t20Hundred = cricketData.data.batting.T20Is[100];

        var test = `<!DOCTYPE html>
         <html lang="en">
         <head>
             <meta charset="UTF-8">
             <meta name="viewport" content="width=device-width, initial-scale=1.0">
             <title>IplFeverr | Ipl Teams</title>

             <!--Font Awesome-->
             <script src="https://kit.fontawesome.com/efd71d3ed7.js" crossorigin="anonymous"></script>
            
            <style>
                   body{
                    background-color:grey;
                   }
                   #close{
                    float: right;
                    font-size:2rem;
                    color:black;
                   }
                   #close:hover{
                       color:purple;
                   }
                   #container{
                    display: flex;
                    flex-direction: column;
                    justify-content:center;
                    align-items:center;
                   }

            </style>

         </head>
         <body>
         <a href ='${T}.html'><i class="fa fa-times" id="close"></i></a>
             <div id="container">
                 <div id="section1">
                   <img src=${img} alt="" style="box-shadow:0px 0px 10px 1px black;margin-bottom:20px;padding:2px;">
                   <h2 id="name">${name}</h2>
                   <h3 id="team">${team}</h3>
                 </div>
                 <div id="section2">
                     <table>
                         
                         <tr>
                             <th>Plays for</th>
                             <td style="padding-left:25px;">${team}</td>
                             </tr>
                         
                         <tr>
                         
                             <th>Age</th>
                             <td style="padding-left:25px;">${age}</td>
                             </tr>
                         
                         <tr>
                             <th>Born</th>
                             <td style="padding-left:25px;">${born}</td>
                             </tr>
                         
                         <tr>
                             <th>Batting Style</th>
                             <td style="padding-left:25px;">${battingStyle}</td>
                         </tr>
                         
                         <tr>
                             <th>Bowling Style</th>
                             <td style="padding-left:25px;">${bowlingStyle}</td>
                         </tr>
                        
                         
                     </table>
                 </div>
                 <div id="section3" style="display: flex;">
                  <div id="card1" style="box-shadow:0px 0px 10px 1px black;margin:30px;padding:40px;">
                     <h3>T20 Carrer:</h3>
                     <table>
                         <tr>
                             <th>Matches</th>
                             <td  style="padding-left:25px;">${t20Matches}</td>
                         </tr>
                         
                         <tr>
                             <th>Runs</th>
                             <td  style="padding-left:25px;">${t20Runs}</td>
                         </tr>
         
                       
         
                         <tr>
                             <th>50s</th>
                             <td  style="padding-left:25px;">${t20Fifty}</td>
                         </tr>
         
                         <tr>
                             <th>100s</th>
                             <td  style="padding-left:25px;">${t20Hundred}</td>
                         </tr>
                         
                     </table>
                  </div>
                  <div id="card2" style="box-shadow:0px 0px 10px 1px black;margin:30px;padding:40px;">
                     <h3>ODI Carrer:</h3>
                     <table>
                         <tr>
                             <th>Matches</th>
                             <td  style="padding-left:25px;">${odiMatches}</td>
                         </tr>
                         
                         <tr>
                             <th>Runs</th>
                             <td  style="padding-left:25px;">${odiRuns}</td>
                         </tr>
         
                        
         
                         <tr>
                             <th>50s</th>
                             <td  style="padding-left:25px;">${odiFifty}</td>
                         </tr>
         
                         <tr>
                             <th>100s</th>
                             <td  style="padding-left:25px;">${odiHundred}</td>
                         </tr>
                         </table>
                  </div>
                
                 </div>
             </div>
         </body>
         </html>`;

        res.write(test);

        res.send();
    });
});
});

// Uncapped Batsman

app.post("/ubatsman", async(req, res) =>{
    const batsman = req.body.uncappedBatsman;
    const team = req.body.team;
    const T = req.body.T;
    const numberBat = Number(batsman);



    const appKey = process.env.key1;

    const url = `https://cricapi.com/api/playerStats?apikey=${appKey}&pid=${numberBat}`;

    const fetch_response = await fetch(url);
    const cricketData = await fetch_response.json();


    const img = (cricketData.imageURL) || ("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAqgwETNY6BqOd76U888zJtx4529Ggiamqsw&usqp=CAU");
    const name = cricketData.name;
    const age = cricketData.currentAge;
    const born = cricketData.born;
    const battingStyle = cricketData.battingStyle;
    const bowlingStyle = cricketData.bowlingStyle;

    const odiMatches = cricketData.data.batting.listA.Mat;
    const odiRuns = cricketData.data.batting.listA.Runs;
    const odiFifty = cricketData.data.batting.listA[50];
    const odiHundred = cricketData.data.batting.listA[100];

    var test = `<!DOCTYPE html>
         <html lang="en">
         <head>
             <meta charset="UTF-8">
             <meta name="viewport" content="width=device-width, initial-scale=1.0">
             <title>IplFeverr | Ipl Teams</title>

             <!--Font Awesome-->
             <script src="https://kit.fontawesome.com/efd71d3ed7.js" crossorigin="anonymous"></script>
                  
            <style>
            body{
             background-color:grey;
            }
            #close{
             float: right;
             font-size:2rem;
             color:black;
            }
            #close:hover{
                color:purple;
            }
            #container{
             display: flex;
             flex-direction: column;
             justify-content:center;
             align-items:center;
            }

     </style>

         </head>
         <body>
         <a href ='${T}.html'><i class="fa fa-times" id="close"></i></a>
             <div id="container">
                 <div id="section1">
                   <img src=${img} alt="">
                   <h2 id="name">${name}</h2>
                   <h3 id="team">${team}</h3>
                 </div>
                 <div id="section2">
                     <table>
                         
                         <tr>
                             <th>Plays for</th>
                             <td  style="padding-left:25px;">${team}</td>
                         </tr>
                         
                         <tr>
                             <th>Age</th>
                             <td  style="padding-left:25px;">${age}</td>
                         </tr>
                         
                         <tr>
                             <th>Born</th>
                             <td  style="padding-left:25px;">${born}</td>
                         </tr>
                         
                         <tr>
                             <th>Batting Style</th>
                             <td  style="padding-left:25px;">${battingStyle}</td>
                         </tr>
                         
                         <tr>
                             <th>Bowling Style</th>
                             <td  style="padding-left:25px;">${bowlingStyle}</td>
                         </tr>
                        
                         
                     </table>
                 </div>
                 <div id="section3" style="display: flex;">
                  <div id="card1" style="box-shadow:0px 0px 10px 1px black;margin:30px;padding:40px;">
                     <h3>List A Carrer:</h3>
                     <table>
                         <tr>
                             <th>Matches</th>
                             <td  style="padding-left:25px;">${odiMatches}</td>
                         </tr>
                         
                         <tr>
                             <th>Runs</th>
                             <td  style="padding-left:25px;">${odiRuns}</td>
                         </tr>
         
                       
         
                         <tr>
                             <th>50s</th>
                             <td  style="padding-left:25px;">${odiFifty}</td>
                         </tr>
         
                         <tr>
                             <th>100s</th>
                             <td  style="padding-left:25px;">${odiHundred}</td>
                         </tr>
                         
                     </table>
                  </div>
                 
                 </div>
             </div>
         </body>
         </html>`;

    res.write(test);

    res.send();
})


// app.post("/cbowler", async(req, res) =>{
//     const bowler = req.body.cappedBowler;
//     const team = req.body.team;
//     const T = req.body.T;
//     const numberBowl = Number(bowler);



//     const appKey = process.env.key1;

//     const url = `https://cricapi.com/api/playerStats?apikey=${appKey}&pid=${numberBowl}`;

//     const fetch_response = await fetch(url);
//     const cricketData = await fetch_response.json();


//     const img = (cricketData.imageURL) || ("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAqgwETNY6BqOd76U888zJtx4529Ggiamqsw&usqp=CAU");
//     const name = cricketData.name;
//     const age = cricketData.currentAge;
//     const born = cricketData.born;
//     const battingStyle = cricketData.battingStyle;
//     const bowlingStyle = cricketData.bowlingStyle;
//     /* ODI */
//     const odiMatches = cricketData.data.bowling.ODIs.Mat;
//     const odiWickets = cricketData.data.bowling.ODIs.Wkts;
//     const odiEcon = cricketData.data.bowling.ODIs.Econ;
//     const odiBest = cricketData.data.bowling.ODIs.BBM;
//     /* t20 */
//     const t20Matches = cricketData.data.bowling.T20Is.Mat;
//     const t20Wickets = cricketData.data.bowling.T20Is.Wkts;
//     const t20Econ = cricketData.data.bowling.T20Is.Econ;
//     const t20Best = cricketData.data.bowling.T20Is.BBM

//     var test = `<!DOCTYPE html>
//         <html lang="en">
//         <head>
//             <meta charset="UTF-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <title>IplFeverr | Ipl Teams</title>
                        
//             <!--Font Awesome-->
//             <script src="https://kit.fontawesome.com/efd71d3ed7.js" crossorigin="anonymous"></script>
           
//             <style>
//                    body{
//                     background-color:grey;
//                    }
//                    #close{
//                     float: right;
//                     font-size:2rem;
//                     color:black;
//                    }
//                    #close:hover{
//                        color:purple;
//                    }
//                    #container{
//                     display: flex;
//                     flex-direction: column;
//                     justify-content:center;
//                     align-items:center;
//                    }

//             </style>

//         </head>
//         <body>
//         <a href ='${T}.html'><i class="fa fa-times" id="close"></i></a>
//             <div id="container">
//                 <div id="section1">
//                   <img src=${img} alt="">
//                   <h2 id="name">${name}</h2>
//                   <h3 id="team">${team}</h3>
//                 </div>
//                 <div id="section2">
//                     <table>
                        
//                         <tr>
//                             <th>Plays for</th>
//                             <td  style="padding-left:25px;">${team}</td>
//                         </tr>
                        
//                         <tr>
//                             <th>Age</th>
//                             <td  style="padding-left:25px;">${age}</td>
//                         </tr>
                        
//                         <tr>
//                             <th>Born</th>
//                             <td  style="padding-left:25px;">${born}</td>
//                         </tr>
                        
//                         <tr>
//                             <th>Batting Style</th>
//                             <td style="padding-left:25px">${battingStyle}</td>
//                         </tr>
                        
//                         <tr>
//                             <th>Bowling Style</th>
//                             <td style="padding-left:25px;">${bowlingStyle}</td>
//                         </tr>
                       
                        
//                     </table>
//                 </div>
//                 <div id="section3" style="display: flex;">
//                  <div id="card1" style="box-shadow:0px 0px 10px 1px black;margin:30px;padding:40px;">
//                     <h3>T20 Carrer:</h3>
//                     <table>
//                         <tr>
//                             <th>Matches</th>
//                             <td  style="padding-left:25px;">${t20Matches}</td>
//                         </tr>
                        
//                         <tr>
//                             <th>Wickets</th>
//                             <td  style="padding-left:25px;">${t20Wickets}</td>
//                         </tr>
        
                      
        
//                         <tr>
//                             <th>Economy</th>
//                             <td colspan="2">${t20Econ}</td>
//                         </tr>
        
//                         <tr>
//                             <th>Best Figures</th>
//                             <td  style="padding-left:25px;">${t20Best}</td>
//                         </tr>
                        
//                     </table>
//                  </div>
//                  <div id="card2" style="box-shadow:0px 0px 10px 1px black;margin:30px;padding:40px;">
//                     <h3>ODI Carrer:</h3>
//                     <table>
//                         <tr>
//                             <th>Matches</th>
//                             <td  style="padding-left:25px;">${odiMatches}</td>
//                         </tr>
                        
//                         <tr>
//                             <th>Wickets</th>
//                             <td  style="padding-left:25px;">${odiWickets}</td>
//                         </tr>
        
                       
        
//                         <tr>
//                             <th>Economy</th>
//                             <td  style="padding-left:25px;">${odiEcon}</td>
//                         </tr>
        
//                         <tr>
//                             <th>Best Figures</th>
//                             <td  style="padding-left:25px;">${odiBest}</td>
//                         </tr>
                        
//                     </table>
//                  </div>
              
//                 </div>
//             </div>
//         </body>
//         </html>`;

//     res.write(test);

//     res.send();
// })


app.post("/cbowler",  (req, res) => {
    const bowler = req.body.cappedBowler;
    const team = req.body.team;
    const T = req.body.T;
    const numberBowl = Number(bowler);

     

    const appKey = process.env.key1;

    const url = `https://cricapi.com/api/playerStats?apikey=${appKey}&pid=${numberBowl}`;

 fetch(url)
 .then(fetch_response => {
     return fetch_response.json()
 })
 .then(cricketData => {
    // const cricketData = await fetch_response.json();


    const img = (cricketData.imageURL) || ("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAqgwETNY6BqOd76U888zJtx4529Ggiamqsw&usqp=CAU");
    const name = cricketData.name;
    const age = cricketData.currentAge;
    const born = cricketData.born;
    const battingStyle = cricketData.battingStyle;
    const bowlingStyle = cricketData.bowlingStyle;
    /* ODI */
    const odiMatches = cricketData.data.bowling.ODIs.Mat;
    const odiWickets = cricketData.data.bowling.ODIs.Wkts;
    const odiEcon = cricketData.data.bowling.ODIs.Econ;
    const odiBest = cricketData.data.bowling.ODIs.BBM;
    /* t20 */
    const t20Matches = cricketData.data.bowling.T20Is.Mat;
    const t20Wickets = cricketData.data.bowling.T20Is.Wkts;
    const t20Econ = cricketData.data.bowling.T20Is.Econ;
    const t20Best = cricketData.data.bowling.T20Is.BBM

    var test = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>IplFeverr | Ipl Teams</title>
                        
            <!--Font Awesome-->
            <script src="https://kit.fontawesome.com/efd71d3ed7.js" crossorigin="anonymous"></script>
           
            <style>
                   body{
                    background-color:grey;
                   }
                   #close{
                    float: right;
                    font-size:2rem;
                    color:black;
                   }
                   #close:hover{
                       color:purple;
                   }
                   #container{
                    display: flex;
                    flex-direction: column;
                    justify-content:center;
                    align-items:center;
                   }

            </style>

        </head>
        <body>
        <a href ='${T}.html'><i class="fa fa-times" id="close"></i></a>
            <div id="container">
                <div id="section1">
                  <img src=${img} alt="">
                  <h2 id="name">${name}</h2>
                  <h3 id="team">${team}</h3>
                </div>
                <div id="section2">
                    <table>
                        
                        <tr>
                            <th>Plays for</th>
                            <td  style="padding-left:25px;">${team}</td>
                        </tr>
                        
                        <tr>
                            <th>Age</th>
                            <td  style="padding-left:25px;">${age}</td>
                        </tr>
                        
                        <tr>
                            <th>Born</th>
                            <td  style="padding-left:25px;">${born}</td>
                        </tr>
                        
                        <tr>
                            <th>Batting Style</th>
                            <td style="padding-left:25px">${battingStyle}</td>
                        </tr>
                        
                        <tr>
                            <th>Bowling Style</th>
                            <td style="padding-left:25px;">${bowlingStyle}</td>
                        </tr>
                       
                        
                    </table>
                </div>
                <div id="section3" style="display: flex;">
                 <div id="card1" style="box-shadow:0px 0px 10px 1px black;margin:30px;padding:40px;">
                    <h3>T20 Carrer:</h3>
                    <table>
                        <tr>
                            <th>Matches</th>
                            <td  style="padding-left:25px;">${t20Matches}</td>
                        </tr>
                        
                        <tr>
                            <th>Wickets</th>
                            <td  style="padding-left:25px;">${t20Wickets}</td>
                        </tr>
        
                      
        
                        <tr>
                            <th>Economy</th>
                            <td colspan="2">${t20Econ}</td>
                        </tr>
        
                        <tr>
                            <th>Best Figures</th>
                            <td  style="padding-left:25px;">${t20Best}</td>
                        </tr>
                        
                    </table>
                 </div>
                 <div id="card2" style="box-shadow:0px 0px 10px 1px black;margin:30px;padding:40px;">
                    <h3>ODI Carrer:</h3>
                    <table>
                        <tr>
                            <th>Matches</th>
                            <td  style="padding-left:25px;">${odiMatches}</td>
                        </tr>
                        
                        <tr>
                            <th>Wickets</th>
                            <td  style="padding-left:25px;">${odiWickets}</td>
                        </tr>
        
                       
        
                        <tr>
                            <th>Economy</th>
                            <td  style="padding-left:25px;">${odiEcon}</td>
                        </tr>
        
                        <tr>
                            <th>Best Figures</th>
                            <td  style="padding-left:25px;">${odiBest}</td>
                        </tr>
                        
                    </table>
                 </div>
              
                </div>
            </div>
        </body>
        </html>`;

    res.write(test);

    res.send();
                })
                .catch(err => console.log(err))
})

app.post("/ubowler", async(req, res)=> {
    const ubowler = req.body.uncappedBowler;
    const team = req.body.team;
    const T = req.body.T;
    const numberBowl = Number(ubowler);



    const appKey = process.env.key1;

    const url = `https://cricapi.com/api/playerStats?apikey=${appKey}&pid=${numberBowl}`;

    const fetch_response = await fetch(url);
    const cricketData = await fetch_response.json();


    const img = (cricketData.imageURL) || "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAqgwETNY6BqOd76U888zJtx4529Ggiamqsw&usqp=CAU";
    console.log(img);
    const name = cricketData.name;
    const age = cricketData.currentAge;
    const born = cricketData.born;
    const battingStyle = cricketData.battingStyle;
    const bowlingStyle = cricketData.bowlingStyle;
    /* ListA t20 career*/
    const odiMatches = cricketData.data.bowling.listA.Mat;
    const odiWickets = cricketData.data.bowling.listA.Wkts;
    const odiEcon = cricketData.data.bowling.listA.Econ;
    const odiBest = cricketData.data.bowling.listA.BBM;

    var test = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>IplFeverr | Ipl Teams</title>
                       
            <!--Font Awesome-->
            <script src="https://kit.fontawesome.com/efd71d3ed7.js" crossorigin="anonymous"></script>
           
            <style>
                   body{
                    background-color:grey;
                   }
                   #close{
                    float: right;
                    font-size:2rem;
                    color:black;
                   }
                   #close:hover{
                       color:purple;
                   }
                   #container{
                    display: flex;
                    flex-direction: column;
                    justify-content:center;
                    align-items:center;
                   }

            </style>

        </head>
        <body>
        <a href ='${T}.html'><i class="fa fa-times" id="close"></i></a>
            <div id="container">
                <div id="section1">
                  <img src=${img} alt="">
                  <h2 id="name">${name}</h2>
                  <h3 id="team">${team}</h3>
                </div>
                <div id="section2">
                    <table>
                        
                        <tr>
                            <th>Plays for</th>
                            <td  style="padding-left:25px;">${team}</td>
                        </tr>
                        
                        <tr>
                            <th>Age</th>
                            <td  style="padding-left:25px;">${age}</td>
                        </tr>
                        
                        <tr>
                            <th>Born</th>
                            <td  style="padding-left:25px;">${born}</td>
                        </tr>
                        
                        <tr>
                            <th>Batting Style</th>
                            <td  style="padding-left:25px;">${battingStyle}</td>
                        </tr>
                        
                        <tr>
                            <th>Bowling Style</th>
                            <td  style="padding-left:25px;">${bowlingStyle}</td>
                        </tr>
                       
                        
                    </table>
                </div>
                <div id="section3" style="display: flex;">
                
                 <div id="card2" style="box-shadow:0px 0px 10px 1px black;margin:30px;padding:40px;">
                    <h3>ListA Carrer:</h3>
                    <table>
                        <tr>
                            <th>Matches</th>
                            <td  style="padding-left:25px;">${odiMatches}</td>
                        </tr>
                        
                        <tr>
                            <th>Wickets</th>
                            <td  style="padding-left:25px;">${odiWickets}</td>
                        </tr>
        
                       
        
                        <tr>
                            <th>Economy</th>
                            <td  style="padding-left:25px;">${odiEcon}</td>
                        </tr>
        
                        <tr>
                            <th>Best Figures</th>
                            <td  style="padding-left:25px;">${odiBest}</td>
                        </tr>
                        
                    </table>
                 </div>
              
                </div>
            </div>
        </body>
        </html>`;

    res.write(test);

    res.send();
})


app.post("/callRounder", async (req, res)=> {
    const allRounder = req.body.cappedAllRounder;
    const team = req.body.team;
    const T = req.body.T;
    const numberBat = Number(allRounder);


    const appKey = process.env.key2;

    const url = `https://cricapi.com/api/playerStats?apikey=${appKey}&pid=${numberBat}`;
    const fetch_response = await fetch(url);
    const cricketData = await fetch_response.json();


    const img = (cricketData.imageURL) || ("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAqgwETNY6BqOd76U888zJtx4529Ggiamqsw&usqp=CAU");
    const name = cricketData.name;
    const age = cricketData.currentAge;
    const born = cricketData.born;
    const battingStyle = cricketData.battingStyle;
    const bowlingStyle = cricketData.bowlingStyle;
    /* T20 Batting*/
    const t20MatchesA = cricketData.data.batting.T20Is.Mat;
    const t20Runs = cricketData.data.batting.T20Is.Runs;
    const t20Fifty = cricketData.data.batting.T20Is[50];
    const t20Hundred = cricketData.data.batting.T20Is[100];

    /* t20 Bowling*/
    const t20MatchesB = cricketData.data.bowling.T20Is.Mat;
    const t20Wickets = cricketData.data.bowling.T20Is.Wkts;
    const t20Econ = cricketData.data.bowling.T20Is.Econ;
    const t20Best = cricketData.data.bowling.T20Is.BBM;

    var test = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>IplFeverr | Ipl Teams</title>
                    
            <!--Font Awesome-->
            <script src="https://kit.fontawesome.com/efd71d3ed7.js" crossorigin="anonymous"></script>
           
            <style>
                   body{
                    background-color:grey;
                   }
                   #close{
                    float: right;
                    font-size:2rem;
                    color:black;
                   }
                   #close:hover{
                       color:purple;
                   }
                   #container{
                    display: flex;
                    flex-direction: column;
                    justify-content:center;
                    align-items:center;
                   }

            </style>

        </head>
        <body>
        <a href ='${T}.html'><i class="fa fa-times" id="close"></i></a>
            <div id="container" >
                <div id="section1">
                  <img src=${img} alt="">
                  <h2 id="name">${name}</h2>
                  <h3 id="team">${team}</h3>
                </div>
                <div id="section2">
                    <table>
                        
                        <tr>
                            <th>Plays for</th>
                            <td  style="padding-left:25px;">${team}</td>
                        </tr>
                        
                        <tr>
                            <th>Age</th>
                            <td  style="padding-left:25px;">${age}</td>
                        </tr>
                        
                        <tr>
                            <th>Born</th>
                            <td  style="padding-left:25px;">${born}</td>
                        </tr>
                        
                        <tr>
                            <th>Batting Style</th>
                            <td  style="padding-left:25px;">${battingStyle}</td>
                        </tr>
                        
                        <tr>
                            <th>Bowling Style</th>
                            <td  style="padding-left:25px;">${bowlingStyle}</td>
                        </tr>
                       
                        
                    </table>
                </div>
                <div id="section3" style="display: flex;">
                 <div id="card1" style="box-shadow:0px 0px 10px 1px black;margin:30px;padding:40px;">
                    <h3>T20 Batting Carrer:</h3>
                    <table>
                        <tr>
                            <th>Matches</th>
                            <td  style="padding-left:25px;">${t20MatchesA}</td>
                        </tr>
                        
                        <tr>
                            <th>Runs</th>
                            <td  style="padding-left:25px;">${t20Runs}</td>
                        </tr>
        
        
                        <tr>
                            <th>50s</th>
                            <td  style="padding-left:25px;">${t20Fifty}</td>
                        </tr>
        
                        <tr>
                            <th>100s</th>
                            <td  style="padding-left:25px;">${t20Hundred}</td>
                        </tr>
                        
                    </table>
                 </div>
                 <div id="card2" style="box-shadow:0px 0px 10px 1px black;margin:30px;padding:40px;">
                    <h3>T20 Bowling Carrer:</h3>
                    <table>
                        <tr>
                            <th>Matches</th>
                            <td  style="padding-left:25px;">${t20MatchesB}</td>
                        </tr>
                        
                        <tr>
                            <th>Wickets</th>
                            <td  style="padding-left:25px;">${t20Wickets}</td>
                        </tr>
        
                        <tr>
                            <th>Economy</th>
                            <td  style="padding-left:25px;">${t20Econ}</td>
                        </tr>
        
                        <tr>
                            <th>Best Figures</th>
                            <td  style="padding-left:25px;">${t20Best}</td>
                        </tr>
                        
                    </table>
                 </div>

             
     </div>
 </div>
</body>
</html>`;

    res.write(test);

    res.send();
})


app.post("/uallRounder", async (req, res)=> {
    const uallRounder = req.body.uncappedAllRounder;
    const team = req.body.team;
    const T = req.body.T;
    const numberBat = Number(uallRounder);



    const appKey = process.env.key2;

    const url = `https://cricapi.com/api/playerStats?apikey=${appKey}&pid=${numberBat}`;

    const fetch_response = await fetch(url);
    const cricketData = await fetch_response.json();


    const img = (cricketData.imageURL) || ("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAqgwETNY6BqOd76U888zJtx4529Ggiamqsw&usqp=CAU");
    const name = cricketData.name;
    const age = cricketData.currentAge;
    const born = cricketData.born;
    const battingStyle = cricketData.battingStyle;
    const bowlingStyle = cricketData.bowlingStyle;
    /* List A Batting*/
    const t20MatchesA = cricketData.data.batting.listA.Mat;
    const t20Runs = cricketData.data.batting.listA.Runs;
    const t20Fifty = cricketData.data.batting.listA[50];
    const t20Hundred = cricketData.data.batting.listA[100];

    /* ListA Bowling*/
    const t20MatchesB = cricketData.data.bowling.listA.Mat;
    const t20Wickets = cricketData.data.bowling.listA.Wkts;
    const t20Econ = cricketData.data.bowling.listA.Econ;
    const t20Best = cricketData.data.bowling.listA.BBM;

    var test = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>IplFeverr | Ipl Teams</title>
                     
            <!--Font Awesome-->
            <script src="https://kit.fontawesome.com/efd71d3ed7.js" crossorigin="anonymous"></script>
           
            <style>
                   body{
                    background-color:grey;
                   }
                   #close{
                    float: right;
                    font-size:2rem;
                    color:black;
                   }
                   #close:hover{
                       color:purple;
                   }
                   #container{
                    display: flex;
                    flex-direction: column;
                    justify-content:center;
                    align-items:center;
                   }

            </style>

        </head>
        <body>
        <a href ='${T}.html'><i class="fa fa-times" id="close"></i></a>
            <div id="container" >
                <div id="section1">
                  <img src=${img} alt="">
                  <h2 id="name">${name}</h2>
                  <h3 id="team">${team}</h3>
                </div>
                <div id="section2">
                    <table>
                        
                        <tr>
                            <th>Plays for</th>
                            <td  style="padding-left:25px;">${team}</td>
                        </tr>
                        
                        <tr>
                            <th  style="padding-left:25px;">Age</th>
                            <td  style="padding-left:25px;">${age}</td>
                        </tr>
                        
                        <tr>
                            <th>Born</th>
                            <td  style="padding-left:25px;">${born}</td>
                        </tr>
                        
                        <tr>
                            <th>Batting Style</th>
                            <td  style="padding-left:25px;">${battingStyle}</td>
                        </tr>
                        
                        <tr>
                            <th>Bowling Style</th>
                            <td  style="padding-left:25px;">${bowlingStyle}</td>
                        </tr>
                       
                        
                    </table>
                </div>
                <div id="section3" style="display: flex;">
                 <div id="card1" style="box-shadow:0px 0px 10px 1px black;margin:30px;padding:40px;">
                    <h3>T20 Batting Carrer:</h3>
                    <table>
                        <tr>
                            <th>Matches</th>
                            <td  style="padding-left:25px;">${t20MatchesA}</td>
                        </tr>
                        
                        <tr>
                            <th>Runs</th>
                            <td  style="padding-left:25px;">${t20Runs}</td>
                        </tr>
        
        
                        <tr>
                            <th>50s</th>
                            <td  style="padding-left:25px;">${t20Fifty}</td>
                        </tr>
        
                        <tr>
                            <th>100s</th>
                            <td  style="padding-left:25px;">${t20Hundred}</td>
                        </tr>
                        
                    </table>
                 </div>
                 <div id="card2" style="box-shadow:0px 0px 10px 1px black;margin:30px;padding:40px;">
                    <h3>T20 Bowling Carrer:</h3>
                    <table>
                        <tr>
                            <th>Matches</th>
                            <td  style="padding-left:25px;">${t20MatchesB}</td>
                        </tr>
                        
                        <tr>
                            <th>Wickets</th>
                            <td  style="padding-left:25px;">${t20Wickets}</td>
                        </tr>
        
                        <tr>
                            <th>Economy</th>
                            <td  style="padding-left:25px;">${t20Econ}</td>
                        </tr>
        
                        <tr>
                            <th>Best Figures</th>
                            <td  style="padding-left:25px;">${t20Best}</td>
                        </tr>
                        
                    </table>
                 </div>

             
     </div>
 </div>
</body>
</html>`;

    res.write(test);

    res.send();
})


app.post("/playerInfo", async (req, res)=> {
    const playerName = req.body.playerName;

    const appKey = process.env.key1;

    const url = `https://cricapi.com/api/playerFinder?apikey=${appKey}&name=${playerName}`;

    const fetch_response = await fetch(url);
    const cricketData = await fetch_response.json();

    console.log(cricketData.data.length);
    let pid = [], name = [], fullname = [];
    for (var i = 0; i < cricketData.data.length; i++) {
        pid[i] = cricketData.data[i].pid;
        name[i] = cricketData.data[i].name;
        fullname[i] = cricketData.data[i].fullName;
        console.log("2000");
        console.log(pid[i]);
        console.log(name[i]);
        var test = [];
        test[i] = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>IplFeverr | Player Info</title>
                     
           
            <script src="https://kit.fontawesome.com/efd71d3ed7.js" crossorigin="anonymous"></script>
           
            <style>
                   body{
                    background-color:gray;
                   }
                   #close{
                    float: right;
                    font-size:2rem;
                    color:black;
                   }
                   #close:hover{
                       color:purple;
                   }
                   #container{
                    background-color:aliceblue;
                    text-align:center;
                    border:2px solid black;
                    border-radius:10px;
                    padding:15px;
                    margin: 20px auto;
                    width:40%;
                    font-size:1.5rem;
                   }
                   #details{
                       font-size: 1.2rem;
                       padding:6px;
                       border:2px solid black;
                       border-radius:9px;
                       cursor:pointer;
                    }
                    #details:hover{
                        color:#40407a;
                        border:2px solid #40407a;
                        background-color: #ffda79;
                   }
            </style>

        </head>
        <body>

            <div id="container">
                <div id="section1">
                <form action="/playerDetails" id="playerForm" method="POST">
                  <a>${pid[i]}</a>
                  <input type="text" name="Pid" value="${pid[i]}" style="display:none;">
                  <p>${name[i]}</p>
                  <p>${fullname[i]}</p>
                  <button type="submit" id="details">View Details</button>
                </form>
                </div>
              
            </div>
        </body>
        </html>`;


        res.write(test[i]);
    }

    app.post("/playerDetails", async (req, res) => {
        let Pid = req.body.Pid;

        const appKey = process.env.key2;

        const url = `https://cricapi.com/api/playerStats?apikey=${appKey}&pid=${Pid}`;

        const fetch_response = await fetch(url);
        const cricData = await fetch_response.json();

        const img = (cricData.imageURL);
        const name = cricData.name;
        const fullName = cricData.fullName;
        const age = cricData.currentAge;
        const born = cricData.born;
        const country = cricData.country;
        const battingStyle = cricData.battingStyle;
        const bowlingStyle = cricData.bowlingStyle;
        const playingRole = cricData.playingRole;
        const profile = cricData.profile;
        const majorTeams = cricData.majorTeams;

        var detail = `<!DOCTYPE html>
                        <html lang="en">
                    <head>
                    <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>IplFeverr | Ipl Teams</title>
                        
                        <!--Font Awesome-->
                        <script src="https://kit.fontawesome.com/efd71d3ed7.js" crossorigin="anonymous"></script>
                        
                        <style>
                        body{
                            background-color: black;
                            // background: url('https://wallpapercave.com/wp/wp3049846.jpg') no-repeat center center/cover;
                            background: url('https://wallpaperhd.wiki/wp-content/uploads/baseball-stadium-backgrounds-wallpaper.wiki-baseball-stadium-full-hd-wallpaper-pic-wpb008756.jpg') no-repeat center center/cover;
                            }
                            #close{
                                position:absolute;
                                right:0px;
                                top:10px;
                                font-size:2rem;
                                color:white;
                                margin-right:45px;
                            }
                            #close:hover{
                                color:crimson;
                            }
                            #container{
                                position:relative;
                                border-radius:12px;
                                display: flex;
                                flex-direction: column;
                                justify-content:center;
                                align-items:center;
                                width:45%;
                                margin: 40px auto;
                                padding: 75px 60px;
                                color:white;
                                background-color:black;
                               }
                               img{
                                   box-shadow: 0px 0px 10px 0px white;
                               }
            
                        </style>
            
                    </head>
                    <body>
                    <div id="container" >
                    <a href ='info.html'><i class="fa fa-times" id="close"></i></a>
                            <div id="section1" style="text-align:center;">
                              <img src=${img} alt="">
                              <h2 id="name">${name}</h2>
                              <h2 id="fullName" style="color:#0a3d62;">${fullName}</h2>
                            </div>
                            <div id="section2">
                                <table>
                                    
                                    <tr>
                                        <th>Country</th>
                                        <td  style="padding-left:25px;">${country}</td>
                                    </tr>
                                    
                                    <tr>
                                        <th  style="padding-left:25px;">Age</th>
                                        <td  style="padding-left:25px;">${age}</td>
                                    </tr>
                                    
                                    <tr>
                                        <th>Born</th>
                                        <td  style="padding-left:25px;">${born}</td>
                                    </tr>
                                    
                                    <tr>
                                        <th>Batting Style</th>
                                        <td  style="padding-left:25px;">${battingStyle}</td>
                                    </tr>
                                    
                                    <tr>
                                        <th>Bowling Style</th>
                                        <td  style="padding-left:25px;">${bowlingStyle}</td>
                                    </tr>
                                    
                                    <tr>
                                        <th>Major Teams</th>
                                        <td  style="padding-left:25px;">${majorTeams}</td>
                                    </tr>
                                    
                                    <tr>
                                        <th>Playing Role</th>
                                        <td  style="padding-left:25px;">${playingRole}</td>
                                    </tr>
                                   
                                    
                                </table>
                                <p style="text-align:center;color:cyan;font-size:1.2rem;">${profile}</p>
                            </div>                         
                
                        </div>
            </body>
            </html>`;




        res.write(detail);
        res.send();
    });

    res.send();
});


app.listen(PORT, () => {
    console.log("server is running on port 80");
});
