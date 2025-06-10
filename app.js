let gameSeq = [];
let userSeq = [];

let highS = [];
let btns = ["yellow","red","green","blue"];

let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');
let started = false ; 
let level = 0;

document.addEventListener("keypress", function(){
    if(started == false){
        started = true;
        levelup();
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function()
        {
    btn.classList.remove("flash");
    },250
);
}

function userflash(btn){
    btn.classList.add("usflash");
    setTimeout(function()
        {
    btn.classList.remove("usflash");
    },250
);
}

function levelup(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    highS.push(level);
    let rdnIdx = Math.floor(Math.random() *3);
    let rdnCol = btns[rdnIdx];
    let rdnBtn = document.querySelector(`.${rdnCol}`);
    
    gameSeq.push(rdnCol);


    gameflash(rdnBtn);
}

function checkAns(idx){
    

    if(gameSeq[idx] === userSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup,1000);
        }
    }
    else{let highestLevel = 0;
        if(level > highestLevel){
        highestLevel = level;
    }
    
        h3.innerText = `Highest: Level ${highestLevel}`;
        h2.innerHTML = `Game is over ! Your Score is <b> ${level} </b> <br> Press any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white";

        },250)
        reset();
    }
}

function btnpress(){
    let btn = this;
    userflash(btn);
    rdnCol = btn.getAttribute("id");
    userSeq.push(rdnCol);

    checkAns(userSeq.length - 1);

}

let btnall = document.querySelectorAll(".btn");
for(btn of btnall){
    btn.addEventListener("click", btnpress);
}


function reset(){
    started = false;
    gameSeq=[];
    userSeq=[];
    level = 0;
}
