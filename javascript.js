//make the computer a random number between 1 and 3 and store in the cpu selection
function getComputerChoice(){
let cpu = Math.floor(Math.random() * 3);
if(cpu===0){
    cpu="rock";
}else if (cpu===1){
    cpu="paper";
}else cpu="scissors";
return cpu;
}
//compare selection vs cpu to define the winner, return 1 for user win and 2 por cpu win for tie or invalid input return 0
function playRound(user,cpu){
    if (user===cpu){
        console.log("TIE");
        return 0;
    }else if (user==="rock"&&cpu==="paper"){
        console.log("cpu wins!");
        return 2;
    }else if (user==="rock"&&cpu==="scissors"){
        console.log("you win");
        return 1;
    }else if(user==="paper"&&cpu==="rock"){
        console.log("you win");
        return 1;
    }else if(user==="paper"&&cpu==="scissors"){
        console.log("cpu wins");
        return 2;
    }else if(user==="scissors"&&cpu==="rock"){
        console.log("cpu wins");
        return 2;
    }else if(user==="scissors"&&cpu==="paper"){
        console.log("you win");
        return 1;
    }else console.log("Invalid input")
    return 0;
}
//Make variables to keep the score
let userScore=0;
let cpuScore=0;
//Make a function to make the game 5 times
function game(){
let result;
    for(i=0;i<5;i++){

        console.log("round "+(1+i));
        //ask for the user to make a selection and save it in a variable
        let selection = prompt("Choose rock paper or scissors: ");
        //make the selection lowercase to properly compare
        selection = selection.toLowerCase();
        //make the cpu to generate a selection randomly
        let cpu= getComputerChoice();
        //make a variable to store the result of the playround
        result = playRound(selection,cpu);
        if (result===1){
            userScore++;
        }else if (result===2){
            cpuScore++;
        };

        

    }
    //comparar los resultados
    if (userScore>cpuScore){
        console.log("YOU WIN");
    }else console.log("You lost");

}
game();