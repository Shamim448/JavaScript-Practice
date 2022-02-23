
for( ; ; ){
    var randomNumber = Math.floor(Math.random()*10) ;
    if(randomNumber == 9){
        console.log("you are winner!");
        break;
    }
    else if(randomNumber == 0){
        continue; 
    }else{
        console.log("You got number " + randomNumber);
    }
         
}