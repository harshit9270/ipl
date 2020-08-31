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


app.post("/cbatsman", function (req, res) {
    const batsman = req.body.cappedBatsman;
    const team = req.body.team;
    const numberBat = Number(batsman);
    const T = req.body.T;

    const appKey = "0CYUfBW7ODXfytpDSflRHkMxKpU2";
     let data ="";
    const url = `https://cricapi.com/api/playerStats?apikey=${appKey}&pid=${numberBat}`;

    https.get(url, function (response) {

        response.on("data", (chunk) => {
            data += chunk;
        });
        response.on('end', () => {

            const cricketData = JSON.parse(data);
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
            
                <!-- Compiled and minified CSS -->
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
            
                <link href="https://fonts.googleapis.com/css2?family=Cabin+Condensed&display=swap" rel="stylesheet">
                <link href="https://fonts.googleapis.com/css2?family=Cairo&display=swap" rel="stylesheet">
                <link href="https://fonts.googleapis.com/css2?family=Arvo&display=swap" rel="stylesheet">
            
                <!-- Compiled and minified JavaScript -->
                <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
            
                <!--Font Awesome-->
                <script src="https://kit.fontawesome.com/efd71d3ed7.js" crossorigin="anonymous"></script>
            
                <link rel="icon" href="./basic/favicon.png" type="image/x-icon">
                <title>Iplfeverr | Chennai SuperKings</title>
            
                <style>
                    body {
                        font-family: 'Cabin Condensed', sans-serif;
                        background-color: black;
                    }
            
                    #navbar {
                        font-family: 'Arvo', serif;
                        font-weight: 600;
                        position: fixed;
                        top: 0px;
                        z-index: 10;
                    }
            
                    #navbar ul li a:hover {
                        color: #c7edee;
                        background-color: black;
                    }
            
                    .myFloat:hover {
                        filter: saturate(2);
                    }
            
                    a {
                        color: black;
                    }
            
                    #float:hover {
                        transform: rotateY(180deg);
                    }
            
                    #footer {
                        margin-top: 90px;
                        background-color: #4b5d67;
                        font-family: 'Cairo', sans-serif;
                        /* text-align: center; */
                    }
            
                    .socials {
                        font-size: 2rem;
                        margin: 10px;
                    }
            
                    .socials:hover,
                    #footer ul li a:hover {
                        color: darkgoldenrod !important;
                    }
            
                    @media screen and (max-width: 650px) {
                        #logoText {
                            display: none;
                        }
                    }
            
                    #close {
                        float: right;
                        font-size: 2rem;
                        color: black;
                    }
            
                    #close:hover {
                        color: crimson;
                    }
            
                    #container {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        color: white;
                        margin-top: 72px;
                        text-align:center;
                    }

            
                    @media screen and (max-width:600px) {
                        #section3{
                            flex-direction:column;
                        }
                    }
                </style>
            
            </head>
            
            <body>
            
                <!-- navbar -->
            
                <nav id="navbar" style="background-color:#1b2a49;">
                    <div class="nav-wrapper">
                        <a href="/" class="brand-logo"><img src="basic/logo.png" alt="" style="width:70px;filter:invert(100%);"></a>
                        <a href="/" class="brand-logo" id="logoText" style="margin-left: 75px;font-size: 2rem;">Iplfeverr</a>
                        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                        <ul id="main-menu" class="right hide-on-med-and-down">
                            <li><a href="/schedule">Schedule</a></li>
                            <li><a href="/standings">Standings</a></li>
                            <li><a href="/videos">Videos</a></li>
                            <li><a href="/fantasy">Fantasy</a></li>
                            <li><a href="/trivia">Trivia</a></li>
                            <li><a href="/info">Player Info</a></li>
                            <li><a href="/updates">News</a></li>
                            <li><a href="/teams">Teams</a></li>
                        </ul>
                    </div>
                </nav>
            
                <ul class="sidenav" id="mobile-demo" style="background-color:#1b2a49;color:white">
                    <br>
                    <li><a href="/schedule" style="color:white;">Schedule</a></li>
                    <li><a href="/standings" style="color:white;">Standings</a></li>
                    <li><a href="/videos" style="color:white">Videos</a></li>
                    <li><a href="/fantasy" style="color:white">Fantasy</a></li>
                    <li><a href="/trivia" style="color:white">Trivia</a></li>
                    <li><a href="/info" style="color:white">Player Info</a></li>
                    <li><a href="/updates" style="color:white">News</a></li>
                    <li><a href="/teams" style="color:white">Teams</a></li>
                </ul>
            
                <a href='${T}.html'><i class="fa fa-times" id="close"></i></a>
                <div id="container">
                    <div id="section1">
                        <img src=${img} alt="" style="box-shadow:0px 0px 10px 1px black;margin-bottom:20px;padding:2px;">
                        <h2 id="name">${name}</h2>
                        <h3 id="team" style="color:#96bb7c;">${team}</h3>
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
                        <div id="card1" style="margin:30px;padding:40px;">
                            <h3 style="color:#cf7500;">T20 Carrer:</h3>
                            <table>
                                <tr>
                                    <th>Matches</th>
                                    <td style="padding-left:25px;">${t20Matches}</td>
                                </tr>
            
                                <tr>
                                    <th>Runs</th>
                                    <td style="padding-left:25px;">${t20Runs}</td>
                                </tr>
            
            
            
                                <tr>
                                    <th>50s</th>
                                    <td style="padding-left:25px;">${t20Fifty}</td>
                                </tr>
            
                                <tr>
                                    <th>100s</th>
                                    <td style="padding-left:25px;">${t20Hundred}</td>
                                </tr>
            
                            </table>
                        </div>
                        <div id="card2" style="margin:30px;padding:40px;">
                            <h3 style="color:cyan;">ODI Carrer:</h3>
                            <table>
                                <tr>
                                    <th>Matches</th>
                                    <td style="padding-left:25px;">${odiMatches}</td>
                                </tr>
            
                                <tr>
                                    <th>Runs</th>
                                    <td style="padding-left:25px;">${odiRuns}</td>
                                </tr>
            
            
            
                                <tr>
                                    <th>50s</th>
                                    <td style="padding-left:25px;">${odiFifty}</td>
                                </tr>
            
                                <tr>
                                    <th>100s</th>
                                    <td style="padding-left:25px;">${odiHundred}</td>
                                </tr>
                            </table>
                        </div>
            
                    </div>
                </div>
            
            
                <!-- Floating button -->
            
                <div class="fixed-action-btn">
                    <a class="btn-floating btn-large white" style="box-shadow: 0px 0px 0px 1px black;">
                        <img src="basic/logo.png" id="float" alt="" style="width:60px;">
                    </a>
                    <ul>
                        <li><a href="https://www.facebook.com/IPL/" class="btn-floating blue myFloat"><i
                                    class="fa fa-facebook"></i></a>
                        </li>
                        <li><a href="https://www.instagram.com/iplt20/" class="btn-floating pink myFloat"><i
                                    class="fa fa-instagram"></i></a></li>
                        <li><a href="https://twitter.com/IPL" class="btn-floating blue myFloat"><i class="fa fa-twitter"></i></a>
                        </li>
                    </ul>
                </div>
            
            
            
                <!-- Floating button -->
            
                <div class="fixed-action-btn">
                    <a class="btn-floating btn-large white" style="box-shadow: 0px 0px 0px 1px black;">
                        <img src="basic/logo.png" id="float" alt="" style="width:60px;">
                    </a>
                    <ul>
                        <li><a href="/contact#team" class="btn-floating green myFloat">Team</a>
                        </li>
                        <li><a href="https://www.facebook.com/IPL/" class="btn-floating blue myFloat"><i
                                    class="fa fa-facebook"></i></a>
                        </li>
                        <li><a href="https://www.instagram.com/iplt20/" class="btn-floating pink myFloat"><i
                                    class="fa fa-instagram"></i></a></li>
                        <li><a href="https://twitter.com/IPL" class="btn-floating blue myFloat"><i class="fa fa-twitter"></i></a>
                        </li>
                    </ul>
                </div>
            
            
                <!-- Footer -->
            
                <footer class="page-footer" id="footer">
                    <div class="container">
                        <div class="row">
                            <div style="text-align: center;">
                                <h5>follow #IPL</h5>
                                <a href="https://www.facebook.com/IPL/" class="socials"><i class="fa fa-facebook-official"></i></a>
                                <a href="https://www.instagram.com/iplt20/" class="socials"><i class="fa fa-instagram"></i></a>
                                <a href="https://twitter.com/IPL" class="socials"><i class="fa fa-twitter-square"></i></a>
                            </div>
                            <div class="col l3 offset-l1 s6">
                                <h5 class="white-text">Quick Links</h5>
                                <ul>
                                    <li><a class="grey-text text-lighten-3" href="/videos">Videos</a></li>
                                    <li><a class="grey-text text-lighten-3" href="/standings">Points Table</a></li>
                                    <li><a class="grey-text text-lighten-3" href="/schedule">Schedule</a></li>
                                    <li><a class="grey-text text-lighten-3" href="/info">Player Wise Data</a></li>
                                    <li><a class="grey-text text-lighten-3" href="/updates">News</a></li>
                                </ul>
                            </div>
                            <div class="col l3 offset-l1 s6">
                                <h5 class="white-text">Teams</h5>
                                <ul>
                                    <li><a class="grey-text text-lighten-3" href="/csk">Chennai Super Kings</a></li>
                                    <li><a class="grey-text text-lighten-3" href="/dc">Delhi Capitals</a></li>
                                    <li><a class="grey-text text-lighten-3" href="/kxip">Kings XI Punjab</a></li>
                                    <li><a class="grey-text text-lighten-3" href="/kkr">Kolkata Knight Riders</a></li>
                                    <li><a class="grey-text text-lighten-3" href="/mi">Mumbai Indians</a></li>
                                    <li><a class="grey-text text-lighten-3" href="/rr">Rajasthan Royals</a></li>
                                    <li><a class="grey-text text-lighten-3" href="/rcb">Royal Challengers Bangalore</a></li>
                                    <li><a class="grey-text text-lighten-3" href="/srh">Sunrisers Hyderabad</a></li>
                                </ul>
                            </div>
                            <div class="col l3 offset-l1 s6">
                                <h5 class="white-text">Contact</h5>
                                <ul>
                                    <li><a class="grey-text text-lighten-3" href="/contact">Contact Us</a></li>
                                    <li><a class="grey-text text-lighten-3" href="/contact#team">Our Team</a></li>
                                    <li><a class="grey-text text-lighten-3" href="/feedback">Feedback</a></li>
                                </ul>
                            </div>
            
                        </div>
                    </div>
                    <div class="footer-copyright">
                        <div class="container">
                            <span>© &nbsp; iplfeverr.herokuapp.com &nbsp; 2020</span>
                            <a class="grey-text text-lighten-4 right" href="/credits">Content Credits</a>
                        </div>
                    </div>
                </footer>
            
                <script>
                    // JS for floating buuton
            
                    document.addEventListener('DOMContentLoaded', function () {
                        var elems = document.querySelectorAll('.fixed-action-btn');
                        var instances = M.FloatingActionButton.init(elems);
                    });
            
                    document.addEventListener('DOMContentLoaded', function () {
                        var elems = document.querySelectorAll('.sidenav');
                        var instances = M.Sidenav.init(elems);
                    });
            
            
                </script>
            
            </body>
            
            </html>`;

            res.write(test);

            res.send();
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
});



// Uncapped Batsman

app.post("/ubatsman",(req, res) =>{
    const batsman = req.body.uncappedBatsman;
    const team = req.body.team;
    const T = req.body.T;
    const numberBat = Number(batsman);



    const appKey = "QYVTz9QEW0fawaBMu3tsIJNJlxn1";

        let data ="";
    const url = `https://cricapi.com/api/playerStats?apikey=${appKey}&pid=${numberBat}`;

    https.get(url, function (response) {

        response.on("data", (chunk) => {
            data += chunk;
        });
        response.on('end', () => {
            
             const cricketData = JSON.parse(data);
            console.log(cricketData);

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
                    background-color:#ffe8d6;
                   }
                   #card1,#card2{
                   background-color:#f9f6f7;
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
           @media screen and (max-width:600px){
                     #section3{
                          flex-direction:column;
                     }
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
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
});


app.post("/cbowler",  (req, res) => {
    const bowler = req.body.cappedBowler;
    const team = req.body.team;
    const T = req.body.T;
    const numberBowl = Number(bowler);

     

    const appKey = "0CYUfBW7ODXfytpDSflRHkMxKpU2";

       let data ="";
    const url = `https://cricapi.com/api/playerStats?apikey=${appKey}&pid=${numberBowl}`;

    https.get(url, function (response) {

        response.on("data", (chunk) => {
            data += chunk;
        });
        response.on('end', () => {
            
             const cricketData = JSON.parse(data);
            console.log(cricketData);


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
                    background-color:#fab696;
                   }
                   #card1,#card2{
                   background-color:#fbe3b9;
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
           @media screen and (max-width:600px){
                     #section3{
                          flex-direction:column;
                     }
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
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
});

app.post("/ubowler", (req, res)=> {
    const ubowler = req.body.uncappedBowler;
    const team = req.body.team;
    const T = req.body.T;
    const numberBowl = Number(ubowler);



    const appKey = "QYVTz9QEW0fawaBMu3tsIJNJlxn1";

         let data ="";
    const url = `https://cricapi.com/api/playerStats?apikey=${appKey}&pid=${numberBowl}`;

    https.get(url, function (response) {

        response.on("data", (chunk) => {
            data += chunk;
        });
        response.on('end', () => {
            
             const cricketData = JSON.parse(data);
            console.log(cricketData);

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
                    background-color:#a3f7bf;
                   }
                   #card1,#card2{
                   background-color:#e5dfdf;
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
           @media screen and (max-width:600px){
                     #section3{
                          flex-direction:column;
                     }
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
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
});

app.post("/callRounder", (req, res)=> {
    const allRounder = req.body.cappedAllRounder;
    const team = req.body.team;
    const T = req.body.T;
    const numberBat = Number(allRounder);


    const appKey = "0CYUfBW7ODXfytpDSflRHkMxKpU2";

         let data ="";
    const url = `https://cricapi.com/api/playerStats?apikey=${appKey}&pid=${numberBat}`;

    https.get(url, function (response) {

        response.on("data", (chunk) => {
            data += chunk;
        });
        response.on('end', () => {
            
             const cricketData = JSON.parse(data);
            console.log(cricketData);

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
                    background-color:#a3f7bf;
                   }
                   #card1,#card2{
                   background-color:#e5dfdf;
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
           @media screen and (max-width:600px){
                     #section3{
                          flex-direction:column;
                     }
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
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
});

app.post("/uallRounder", (req, res)=> {
    const uallRounder = req.body.uncappedAllRounder;
    const team = req.body.team;
    const T = req.body.T;
    const numberBat = Number(uallRounder);



    const appKey = "0CYUfBW7ODXfytpDSflRHkMxKpU2";

        let data ="";
    const url = `https://cricapi.com/api/playerStats?apikey=${appKey}&pid=${numberBat}`;

    https.get(url, function (response) {

        response.on("data", (chunk) => {
            data += chunk;
        });
        response.on('end', () => {
            
             const cricketData = JSON.parse(data);
            console.log(cricketData);

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
                    background-color:#c2b0c9;
                   }
                   #card1,#card2{
                   background-color:#cccccc;
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
           @media screen and (max-width:600px){
                     #section3{
                          flex-direction:column;
                     }
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
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
});



app.post("/playerInfo", (req, res) => {
    const playerName = req.body.playerName;

    const appKey = "QYVTz9QEW0fawaBMu3tsIJNJlxn1";

    let data = "";

    const url = `https://cricapi.com/api/playerFinder?apikey=${appKey}&name=${playerName}`;

    https.get(url, function (response) {

        response.on("data", (chunk) => {
            data += chunk;
        });
        response.on('end', () => {

            const cricketData = JSON.parse(data);
            console.log(cricketData);

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
                    background-color:black;
                   }
                   #container{
                    background-color:#c8d5b9;
                    text-align:center;
                    border:2px solid white;
                    border-radius:10px;
                    padding:15px;
                    margin: 20px auto;
                    width:45%;
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
                   @media screen and (max-width:600px) {
                    #container {
                        width: 75%;
                    }
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

            app.post("/playerDetails", (req, res) => {
                let Pid = req.body.Pid;

                const appKey = "0CYUfBW7ODXfytpDSflRHkMxKpU2";

                let data1 = "";
                const url = `https://cricapi.com/api/playerStats?apikey=${appKey}&pid=${Pid}`;

                https.get(url, function (response) {

                    response.on("data", (chunk) => {
                        data1 += chunk;
                    });
                    response.on('end', () => {

                        const cricData = JSON.parse(data1);
                        console.log(cricData);

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
                        
                            <!-- Compiled and minified CSS -->
                            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
                        
                            <link href="https://fonts.googleapis.com/css2?family=Cabin+Condensed&display=swap" rel="stylesheet">
                            <link href="https://fonts.googleapis.com/css2?family=Cairo&display=swap" rel="stylesheet">
                            <link href="https://fonts.googleapis.com/css2?family=Arvo&display=swap" rel="stylesheet">
                        
                            <!-- Compiled and minified JavaScript -->
                            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
                        
                            <!--Font Awesome-->
                            <script src="https://kit.fontawesome.com/efd71d3ed7.js" crossorigin="anonymous"></script>
                        
                            <link rel="icon" href="./basic/favicon.png" type="image/x-icon">
                            <title>Iplfeverr | Chennai SuperKings</title>
                        
                            <style>
                                body {
                                    font-family: 'Cabin Condensed', sans-serif;
                                    background-color: black;
                                }
                        
                                #navbar {
                                    font-family: 'Arvo', serif;
                                    font-weight: 600;
                                    position: fixed;
                                    top: 0px;
                                    z-index: 10;
                                }
                        
                                #navbar ul li a:hover {
                                    color: #c7edee;
                                    background-color: black;
                                }
                        
                                .myFloat:hover {
                                    filter: saturate(2);
                                }
                        
                                a {
                                    color: black;
                                }
                        
                                #float:hover {
                                    transform: rotateY(180deg);
                                }
                        
                                #footer {
                                    margin-top: 90px;
                                    background-color: #4b5d67;
                                    font-family: 'Cairo', sans-serif;
                                    /* text-align: center; */
                                }
                        
                                .socials {
                                    font-size: 2rem;
                                    margin: 10px;
                                }
                        
                                .socials:hover,
                                #footer ul li a:hover {
                                    color: darkgoldenrod !important;
                                }
                        
                                @media screen and (max-width: 650px) {
                                    #logoText {
                                        display: none;
                                    }
                                }
                        
                                #close {
                                    position: absolute;
                                    right: 0px;
                                    top: 10px;
                                    font-size: 2rem;
                                    color: white;
                                    margin-right: 5px;
                                }
                        
                                #close:hover {
                                    color: crimson;
                                }
                        
                                #container {
                                    position: relative;
                                    border-radius: 12px;
                                    display: flex;
                                    flex-direction: column;
                                    justify-content: center;
                                    align-items: center;
                                    width: 60%; 
                                    margin: 75px auto;
                                    /* padding: 75px 60px; */
                                    color: white;
                                }
                        
                                @media screen and (max-width:600px) {
                                    #container {
                                        width: 75%;
                                    }
                                    #section2{
                                        flex-direction: column;
                                    }
                                }
                                table{
                                    width:200px;
                                }
                        
                            </style>
                        
                        </head>
                        
                        <body>
                        
                            <!-- navbar -->
                        
                            <nav id="navbar" style="background-color:#1b2a49;">
                                <div class="nav-wrapper">
                                    <a href="/" class="brand-logo"><img src="basic/logo.png" alt="" style="width:70px;filter:invert(100%);"></a>
                                    <a href="/" class="brand-logo" id="logoText" style="margin-left: 75px;font-size: 2rem;">Iplfeverr</a>
                                    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                                    <ul id="main-menu" class="right hide-on-med-and-down">
                                        <li><a href="/schedule">Schedule</a></li>
                                        <li><a href="/standings">Standings</a></li>
                                        <li><a href="/videos">Videos</a></li>
                                        <li><a href="/fantasy">Fantasy</a></li>
                                        <li><a href="/trivia">Trivia</a></li>
                                        <li><a href="/info">Player Info</a></li>
                                        <li><a href="/updates">News</a></li>
                                        <li><a href="/teams">Teams</a></li>
                                    </ul>
                                </div>
                            </nav>
                        
                            <ul class="sidenav" id="mobile-demo" style="background-color:#1b2a49;color:white">
                                <br>
                                <li><a href="/schedule" style="color:white;">Schedule</a></li>
                                <li><a href="/standings" style="color:white;">Standings</a></li>
                                <li><a href="/videos" style="color:white">Videos</a></li>
                                <li><a href="/fantasy" style="color:white">Fantasy</a></li>
                                <li><a href="/trivia" style="color:white">Trivia</a></li>
                                <li><a href="/info" style="color:white">Player Info</a></li>
                                <li><a href="/updates" style="color:white">News</a></li>
                                <li><a href="/teams" style="color:white">Teams</a></li>
                            </ul>
                        
                        
                            <div id="container">
                                <a href='info.html'><i class="fa fa-times" id="close"></i></a>
                                <div id="section1" style="text-align:center;">
                                    <img src=${img} alt="">
                                    <span>
                                    <h2 id="name">${name}</h2>
                                    <h2 id="fullName" style="color:#0a3d62;">${fullName}</h2>
                                    <h2 id="country">${country}</h2>
                                    </span>
                                </div>
                                <div id="section2" style="display: flex;">
                                    
                                    <table style="margin-right: 30px;">
                                        <tr>
                                            <th>Country</th>
                                            <td style="padding-left:25px;">${country}</td>
                                        </tr>
                                        <tr>
                                            <th style="padding-left:25px;">Age</th>
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
                                        <tr>
                                            <th>Playing Role</th>
                                            <td style="padding-left:25px;">${playingRole}</td>
                                        </tr>
                                    </table>
                        
                                    <div>
                                    <p style="color:cyan;margin-left:20px;font-size:1.2rem;">${profile}</p>
                                    
                                    <p style="padding-left:25px;margin-top:45px;font-size:1.3rem;color:orange;">Major Teams</p>
                                    <p style="padding-left:25px;font-size:1.2rem;">${majorTeams}</p>
                                    </div>
                                </tr>
                                </div>
                            </div>
                        
                        
                            <!-- Floating button -->
                        
                            <div class="fixed-action-btn">
                                <a class="btn-floating btn-large white" style="box-shadow: 0px 0px 0px 1px black;">
                                    <img src="basic/logo.png" id="float" alt="" style="width:60px;">
                                </a>
                                <ul>
                                    <li><a href="https://www.facebook.com/IPL/" class="btn-floating blue myFloat"><i
                                                class="fa fa-facebook"></i></a>
                                    </li>
                                    <li><a href="https://www.instagram.com/iplt20/" class="btn-floating pink myFloat"><i
                                                class="fa fa-instagram"></i></a></li>
                                    <li><a href="https://twitter.com/IPL" class="btn-floating blue myFloat"><i class="fa fa-twitter"></i></a>
                                    </li>
                                </ul>
                            </div>
                        
                        
                        
                            <!-- Floating button -->
                        
                            <div class="fixed-action-btn">
                                <a class="btn-floating btn-large white" style="box-shadow: 0px 0px 0px 1px black;">
                                    <img src="basic/logo.png" id="float" alt="" style="width:60px;">
                                </a>
                                <ul>
                                    <li><a href="/contact#team" class="btn-floating green myFloat">Team</a>
                                    </li>
                                    <li><a href="https://www.facebook.com/IPL/" class="btn-floating blue myFloat"><i
                                                class="fa fa-facebook"></i></a>
                                    </li>
                                    <li><a href="https://www.instagram.com/iplt20/" class="btn-floating pink myFloat"><i
                                                class="fa fa-instagram"></i></a></li>
                                    <li><a href="https://twitter.com/IPL" class="btn-floating blue myFloat"><i class="fa fa-twitter"></i></a>
                                    </li>
                                </ul>
                            </div>
                        
                        
                            <!-- Footer -->
                        
                            <footer class="page-footer" id="footer">
                                <div class="container">
                                    <div class="row">
                                        <div style="text-align: center;">
                                            <h5>follow #IPL</h5>
                                            <a href="https://www.facebook.com/IPL/" class="socials"><i class="fa fa-facebook-official"></i></a>
                                            <a href="https://www.instagram.com/iplt20/" class="socials"><i class="fa fa-instagram"></i></a>
                                            <a href="https://twitter.com/IPL" class="socials"><i class="fa fa-twitter-square"></i></a>
                                        </div>
                                        <div class="col l3 offset-l1 s6">
                                            <h5 class="white-text">Quick Links</h5>
                                            <ul>
                                                <li><a class="grey-text text-lighten-3" href="/videos">Videos</a></li>
                                                <li><a class="grey-text text-lighten-3" href="/standings">Points Table</a></li>
                                                <li><a class="grey-text text-lighten-3" href="/schedule">Schedule</a></li>
                                                <li><a class="grey-text text-lighten-3" href="/info">Player Wise Data</a></li>
                                                <li><a class="grey-text text-lighten-3" href="/updates">News</a></li>
                                            </ul>
                                        </div>
                                        <div class="col l3 offset-l1 s6">
                                            <h5 class="white-text">Teams</h5>
                                            <ul>
                                                <li><a class="grey-text text-lighten-3" href="/csk">Chennai Super Kings</a></li>
                                                <li><a class="grey-text text-lighten-3" href="/dc">Delhi Capitals</a></li>
                                                <li><a class="grey-text text-lighten-3" href="/kxip">Kings XI Punjab</a></li>
                                                <li><a class="grey-text text-lighten-3" href="/kkr">Kolkata Knight Riders</a></li>
                                                <li><a class="grey-text text-lighten-3" href="/mi">Mumbai Indians</a></li>
                                                <li><a class="grey-text text-lighten-3" href="/rr">Rajasthan Royals</a></li>
                                                <li><a class="grey-text text-lighten-3" href="/rcb">Royal Challengers Bangalore</a></li>
                                                <li><a class="grey-text text-lighten-3" href="/srh">Sunrisers Hyderabad</a></li>
                                            </ul>
                                        </div>
                                        <div class="col l3 offset-l1 s6">
                                            <h5 class="white-text">Contact</h5>
                                            <ul>
                                                <li><a class="grey-text text-lighten-3" href="/contact">Contact Us</a></li>
                                                <li><a class="grey-text text-lighten-3" href="/contact#team">Our Team</a></li>
                                                <li><a class="grey-text text-lighten-3" href="/feedback">Feedback</a></li>
                                            </ul>
                                        </div>
                        
                                    </div>
                                </div>
                                <div class="footer-copyright">
                                    <div class="container">
                                        <span>© &nbsp; iplfeverr.herokuapp.com &nbsp; 2020</span>
                                        <a class="grey-text text-lighten-4 right" href="/credits">Content Credits</a>
                                    </div>
                                </div>
                            </footer>
                        
                            <script>
                                // JS for floating buuton
                        
                                document.addEventListener('DOMContentLoaded', function () {
                                    var elems = document.querySelectorAll('.fixed-action-btn');
                                    var instances = M.FloatingActionButton.init(elems);
                                });
                        
                                document.addEventListener('DOMContentLoaded', function () {
                                    var elems = document.querySelectorAll('.sidenav');
                                    var instances = M.Sidenav.init(elems);
                                });
                        
                        
                            </script>
                        
                        </body>
                        
                        </html>`;




                        res.write(detail);
                        res.send();
                    });

                }).on("error", (err) => {
                    console.log("Error: " + err.message);
                });
            });
            
            res.send();
        });
        
    }).on("error", (err) => {
    console.log("Error: " + err.message);
});
});



app.listen(PORT, () => {
    console.log("server is running on port 80");
});
