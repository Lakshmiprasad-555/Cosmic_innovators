const body = document.body;
const imageUrls = [
    'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSViu6y493Fet9gWlqrnZOSeLeQJ9W4kFxNTdsngO5k&s")',
  ];
//   let currentImageIndex = 0;
function fun(){
    imageUrls[0].style.position="absolute";
    imageUrls[0].style.left="0";

}
function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }
    else if(input == "")return "Sorry! please type something at there"
    else if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else if(input==null){
        return "Sorry";
    }
    else{
        // alert(c)
        if(input == "sun"){
            fun();

            // body.style.backgroundImage = imageUrls[0];
        }
        return "Is there any thing else you want to know";
    }
}