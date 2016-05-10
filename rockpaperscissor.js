var userChoice;
var computerChoice;
var userScore=0;
var computerScore=0;

   $(".start-bottom").on("click", function(){
    console.log("i am in the start bottom click function");
    $('.game-choices').hide();
    $('.banner-container').hide(); 
})
// console.log("user selected " + userChoice);



  
$(".banner-container").hide()

$(".scissors").on("click", function(){
    userChoice="scissors";
    console.log("user selected " + userChoice);
    computerChooses()
    checkForWinner()
})

$(".paper").on("click", function(){
    userChoice="paper";
    console.log("user selected " + userChoice);
    computerChooses()
    checkForWinner()
})

$(".rock").on("click", function(){
    userChoice="rock";
    console.log("user selected " + userChoice);
    computerChooses()
    checkForWinner()
})

$(".try-again").on("click", function(){
    console.log("you want to try agian")
    $('.game-choices').show()
    $('.banner-container').hide()
  
})

$(".try-again").on("mouseenter", function(){
    $('.try-again').css("text-decoration", "underline")
})

$(".try-again").on("mouseleave", function(){
    $('.try-again').css("text-decoration", "none")
})

var computerChooses = function(){
    var randomNumber=Math.floor(Math.random()*3) ;
    var options = ["rock", "scissors", "paper"];
    console.log(options[randomNumber]);
    computerChoice= options[randomNumber];
    console.log("computer selected " + computerChoice);
}


var checkForWinner = function(){
    if (computerChoice === "paper") {
        if (userChoice === "paper") {
            console.log("tie") 
            $('.banner-container').show()
            $('.user-winner').hide()
            $('.computer-winner').hide()
            $('.tie').show()
            $('.game-choices').hide()
            
        }
        if (userChoice === "scissors") {
            console.log("user won! ")
            $('.banner-container').show()
            $('.user-winner').show()
            $('.computer-winner').hide()
            $('.tie').hide()
            $('.game-choices').hide()
           
            userScore++;
            $(".userscore").text("User Score:"+userScore)
        }
        if (userChoice ==="rock") {
            console.log("computer won!")
            $('.banner-container').show()
            $('.computer-winner').show()
            $('.user-winner').hide()
            $('.tie').hide()
            $('.game-choices').hide()
           
            
            computerScore++; 
             $(".computerscore").text("Computer Score:"+computerScore)
        }
    }


    if (computerChoice === "rock"){
        if (userChoice === "rock"){
            console.log("tie")
            $('.banner-container').show()
            $('.user-winner').hide()
            $('.computer-winner').hide()
            $('.tie').show()
            $('.game-choices').hide()
        }
        if (userChoice === "paper"){
            console.log("user won!")
            $('.banner-container').show()
            $('.user-winner').show()
            $('.cmputer-winner').hide()
             $('.tie').hide()
             $('.game-choices').hide()
             
            userScore++;
            $(".userscore").text("User Score:"+userScore)
            }
        if (userChoice === "scissors"){
            console.log("computer won!")
            $('.banner-container').show()
            $('.computer-winner').show();
            $('.user-winner').hide();
             $('.tie').hide()
            $('.game-choices').hide()
            
            computerScore++;
             $(".computerscore").text("Computer Score:"+computerScore)
        }
    }


    if(computerChoice === "scissors") {
        if (userChoice === "scissors") {
            console.log("tie")
            $('.banner-container').show()
            $('.user-winner').hide()
            $('.computer-winner').hide()
            $('.tie').show();
            $('.game-choices').hide()
        }    
        if (userChoice === "rock"){
            console.log("you win")
            $('.banner-container').show()
            $('.user-winner').show();
            $('.computer-winner').hide();
             $('.tie').hide()
             $('.game-choices').hide()
             
            userScore++;
            $(".userscore").text("User Score:"+userScore)
        }    
        if (userChoice=== "paper"){
            console.log("you lose")
            $('.banner-container').show()
            $('.computer-winner').show();
            $('.user-winner').hide();
             $('.tie').hide()
             $('.game-choices').hide()
             
            computerScore++;
            $(".computerscore").text("Computer Score:"+computerScore);
        }
    }
}

