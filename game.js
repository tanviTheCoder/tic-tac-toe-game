let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGameBtn = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let count=0;
let turnO=true;
const winpatterns=
[
    [0,1,2],
    [0,3,6],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO)
        {
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        count++;

        let iscorrect=checkwinner();
        if(count===9&& !iscorrect)
        {
            drawgame();
        }
    });
});

const drawgame=()=>
{
    msg.innerText=`draw the game`;
    msgContainer.classList.remove("hide");
}

const resetbt=()=>
{
    turnO=true;
    count = 0;
    enabled();
    msgContainer.classList.add("hide");

}

const disabled=()=>
{
    for(box of boxes)
    {
        box.disabled=true;
    }
}

const enabled=()=>
{
    for(box of boxes)
    {
        box.disabled=false;
        box.innerText="";

    }    
}

const showwinner=(winner)=>
{
    msg.innerText=`congratutations, ${winner} is winner`;
    msgContainer.classList.remove("hide");//remove the hide for the msgcontainer for display who is the winner
    disabled();

}

const checkwinner=()=>
{
    for( let pattern of winpatterns)
    {
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "")
        {
            if(pos1val === pos2val && pos2val === pos3val)
            {
                showwinner(pos1val);
            }    
        }
    }
};

newGameBtn.addEventListener("click",resetbt);
reset.addEventListener("click",resetbt);
