const introscene=document.getElementById("introscene");
const introvid = document.getElementById("introvid");
const maincontent=document.getElementById("maincontent")
const creepy=document.getElementById("creepy");

// shows the main web after intro vid
setTimeout(() => {
    introscene.hidden=true;
    maincontent.hidden=false;
}, 5000);

const ghosts = document.querySelectorAll(".ghost");
const selectscreen = document.getElementById("ghost-select");
const msgscreen = document.getElementById("msg-screen");
const GHtitle = document.getElementById("GH-title");
const GHmsg = document.getElementById("GH-msg");
const finalscreen=document.getElementById("finalmsg");

// Each ghost has its own story and mesg.

const GHmsgs = [
    "You should have not choosen me. I was once trapped in this place, waiting for someone to see me. Everyone who came here died before they could discover what was hiding behind the shadows.Now you choose , I wonder how long you will last. All of them here are hungary is what all i can say child",
    "I have been waiting for a meal for a long time. The last visitor thought this place was safe just like you!. I heard their footsteps grow closer every night to get out of here but they never made it. you have arrived now and i am getting hungary again!!.",
    "Did you hear something bad behind you? I heard it too,long before you came here. At first, it sounded like footsteps but then it started whispering the names of people and we never know whose names.Every time I turned around, the hallway was empty. But still you could hear something. Whatever follows you has learned to wait lad!",
    "This place knows and remembers everything. Every visitor who came to these halls left something behind, even if they managed to escape(you think someone escaped?!! Haha). The walls remembers their voice,The doors knows their footsteps and the darkness knows their fear!.Soon you may become one of those memory's",
    "You aint alone here lad.Something has been watching you the moment you entered this place.It follows silently, never getting really close, never falling too far.I said the same to previous visitors but they thought i was imagining things. Now you see it yourself and for yourself!",
    "You should leave if you can.Do not trust the lights, the doors, the silence that follows you everywhere.I thought there was a way back but all the way led me back to the same place so now you know you can't leave.If the screen goes black do not assume that everything is over!"
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
        }, 9000);   
    });
});
