{
const playGame = function(playerInput){
    clearMessages();
    
    const getMoveName = function(argMoveId){
        if(argMoveId == 1){
        return 'kamień';
        }
        else if(argMoveId == 2){
            return "papier";
        }
        else if(argMoveId == 3){
            return "nożyce"
        }
        else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
        }
    }
    
    const displayResult = function (argComputerMove, argPlayerMove){
        console.log('moves:', argComputerMove, argPlayerMove);
        if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
            printMessage('Ty wygrywasz!');
        }
        else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
            printMessage('Ty wygrywasz!');
        }
        else if( argComputerMove == "nożyce" && argPlayerMove =='kamień'){
            printMessage('Ty wygrywasz!');
        }
        else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
            printMessage('Przegrywasz:(');
        }
        else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
            printMessage('REMIS');
        }
        else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
            printMessage('Przegrywasz:(');
        }
        else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
            printMessage('REMIS');
        }
        else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
            printMessage('Przegrywasz:(');
        }
        else if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce' ){
            printMessage('REMIS');
        }
        
        
    }
    
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    /*console.log('Wylosowana liczba to: ' + randomNumber);*/

    let computerMove = getMoveName(randomNumber);

    
    
    /*console.log(getMoveName('2'));*/
    
    

    /*if(randomNumber == 1){
    computerMove = 'kamień';
    }
    else if(randomNumber == 2){
    computerMove = 'papier';
    }
    else if(randomNumber == 3){
    computerMove = 'nożyce'
    }*/

    printMessage('Mój ruch to: ' + computerMove);

    /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/
    /*console.log('komputer wpisał:' + computerMove);
    console.log('Gracz wpisał: ' + playerInput);*/

    let playerMove = getMoveName(randomNumber);

    /*if(playerInput == '1'){
    playerMove = 'kamień';
    }
    else if(playerInput == "2"){
        playerMove = 'papier';
    }
    else if(playerInput == "3"){
        playerMove = 'nożyce';
    }*/
    printMessage('Twój ruch to: ' + playerMove);

    displayResult(computerMove, playerMove);
    /*if( computerMove == 'kamień' && playerMove == 'papier'){
        printMessage('Ty wygrywasz!');
    }
    else if( computerMove == 'papier' && playerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
    }
    else if( computerMove == "nożyce" && playerMove =='kamień'){
        printMessage('Ty wygrywasz!');
    }
    else if( computerMove == 'kamień' && playerMove == 'nożyce'){
        printMessage('Przegrywasz:(');
    }
    else if( computerMove == 'kamień' && playerMove == 'kamień'){
        printMessage('REMIS');
    }
    else if( computerMove == 'papier' && playerMove == 'kamień'){
        printMessage('Przegrywasz:(');
    }
    else if( computerMove == 'papier' && playerMove == 'papier'){
        printMessage('REMIS');
    }
    else if( computerMove == 'nożyce' && playerMove == 'papier'){
        printMessage('Przegrywasz:(');
    }
    else if( computerMove == 'nożyce' && playerMove == 'nożyce' ){
        printMessage('REMIS');
    }*/
}
document.getElementById('play-rock').addEventListener('click', function(){
    playGame('1');
  });
document.getElementById('play-paper').addEventListener('click', function(){
    playGame('2');
  });  
document.getElementById('play-scissors').addEventListener('click', function(){
    playGame('3');
  });  
}