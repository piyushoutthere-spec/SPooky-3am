const introscene=document.getElementById("introscene");
const introvid = document.getElementById("introvid");
const creepy=document.getElementById("creepy");

// shows the main web after intro vid
setTimeout(() => {
    introscene.hidden=true;
}, 5000);

const ghosts = document.querySelectorAll(".ghost");
const selectscreen = document.getElementById("ghost-select");
const msgscreen = document.getElementById("msg-screen");
const GHtitle = document.getElementById("GH-title");
const GHmsg = document.getElementById("GH-msg");
const finalscreen=document.getElementById("finalmsg");

// Each ghost has its own story and mesg.

const GHmsgs = [
    "You should have not choosen me",
    "I have been w8ing for a meal",
    "Did u hear smtg bad behind u",
    "This place knows and remeberes everything",
    "You aint alone here lad",
    "You should leave if u can"
];

// Clicking any ghost image should display the message

ghosts.forEach((ghosts,index) => {
    ghosts.addEventListener("click",()=>{
        selectscreen.hidden=true;
        msgscreen.hidden=false;

        GHtitle.textContent=`ghost${index+1}`;
        GHmsg.textContent=GHmsgs[index];

        //The sound should start each time a ghost is clicked
        creepy.currentTime=0;

        creepy.play().catch(() => {
            console.log("Audio playback was blocked");
        });
         setTimeout(() => {
            msgscreen.hidden=true;
            finalscreen.hidden=false;
        }, 5000);   
    });
});
