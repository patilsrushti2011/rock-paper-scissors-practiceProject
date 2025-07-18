let userscore=0;
let compscore=0;
const Uscore=document.querySelector(".user-score");
const Comscore=document.querySelector(".comp-score");
const choices=document.querySelectorAll(".box");
const msg=document.querySelector("#msg");
function gencompchoice()
{
    // let arr=choices;
    // console.log(arr);
    const options=["rock" ,"paper" ,"scissor"];
    const randomidx=Math.floor(Math.random()*3);
    return options[randomidx];


    
}

const draw=()=>
    {
        console.log("game was draw")
    }
    
    const showwin =(userwin,userchoice,compchoice)=>
        {
            
            if(userwin)
                {
                    console.log("you win");
                    msg.innerHTML=`You Win! Your ${userchoice} beats ${compchoice}`;
                    msg.style.backgroundColor="green";

                //   msg.classList.add("color");
                   Uscore.innerHTML=++userscore;
                    
                }
                else
                {
                console.log("you loose");
                msg.innerHTML="you loose!"
                msg.style.backgroundColor="red";
                Comscore.innerHTML=++compscore;
                msg.innerHTML=`You loose and computer win! ${compchoice} beats  Your ${userchoice }`;
                }
                

        }
const playgame =(userchoice)=>
    {
        console.log("user choice was =",userchoice);
        const compchoice=gencompchoice();
        console.log("computer choice was =",compchoice);
      if(userchoice==compchoice)
        {
            //draw
            draw();
            msg.innerHTML="game draw! Play again";
            msg.style.backgroundColor="brown";
        }
        else{
          let userwin=true;
          if(userchoice==="rock")
            {
                //computer choices are paper and sessor
                userwin=compchoice==="paper"?false:true;
            }
            else if(userchoice==="paper")
                {
                    //compuer choices are rock and sessor
                    userwin=compchoice==="rock"?true:false;
                }
            else
            {
                //  //compuer choices are rock and paper
                userwin=compchoice==="paper"?true:false;
            }

            showwin(userwin,userchoice,compchoice);
        }

         }   


choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click" ,()=>{
    const userchoice=choice.getAttribute("id");
    //    console.log("user choice was clicked",userchoice);
       playgame(userchoice);

    })
    
})