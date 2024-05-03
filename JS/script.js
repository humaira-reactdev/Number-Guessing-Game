// =====================VARIABLES====================================//

let show=document.querySelector('.show')
let error=document.querySelector('.error')
let playerOne=document.querySelector('.playerOne')
let oneInput=document.querySelector('.one')
let buttonOne=document.querySelector('.buttonOne')
let playerTwo=document.querySelector('.playerTwo')
let twoInput=document.querySelector('.two')
let buttonTwo=document.querySelector('.buttonTwo')
let chanceDisp=document.querySelector('.chanceDisp')
// let playerThree=document.querySelector('.playerThree')
// let three=document.querySelector('.three')
// let buttonThree=document.querySelector('.buttonThree')
let playerNumDisplay=document.querySelector('.playerNumDisplay')
let chanceNum=document.querySelector('.chanceNum')
let chance=1
let playerNumber=1

// =====================VARIABLES====================================//

// ===================PLAYER ONE PART START===========================//

buttonOne.addEventListener('click', ()=>{
    if (oneInput.value==''){
        error.innerHTML="Field cannot be empty"
    }
    else if(oneInput.value>10 || oneInput.value<1){
        error.innerHTML="Number cannot be less than 0 or greater than 10"
    }
    else{
        error.innerHTML=""
        playerNumber++
        playerNumDisplay.innerHTML=playerNumber
        playerOne.style='display:none;'
        playerTwo.style='display:block;'
        chanceNum.innerHTML=chance

    }
})
// ===================PLAYER ONE PART END===========================//


// ===================PLAYER TWO PART START===========================//

buttonTwo.addEventListener('click', ()=>{

    if (twoInput.value==''){
        error.innerHTML="Please provide a number"
    }
    else if(twoInput.value>=10 || twoInput.value<1){
        error.innerHTML="Number cannot be less than 0 or greater than 10"
    }
    else{

        if(twoInput.value!=oneInput.value){
            twoInput.focus()
            twoInput.select()
            chance++
            twoInput.value=''

            if(chance>5){
                if(playerNumber==3){
                    error.innerHTML="You're out of chances. Player 1 wins!"
                    chanceDisp.innerHTML="Player 1's number was: " + oneInput.value
                    playerTwo.style='display:none;'
                    show.style='display:none;'
                    return
                }

                //Player 3 starts
                chance=1
                error.innerHTML=""
                playerNumber++
                playerNumDisplay.innerHTML=playerNumber

            }
            
            else{
                error.innerHTML="Wrong guess! Try again." 
            }

            chanceNum.innerHTML=chance
        } 

        else{
           error.innerHTML="Player " + playerNumber + " wins!"
        }    
    }
        
          
                
    })

// ===================PLAYER TWO PART END===========================//