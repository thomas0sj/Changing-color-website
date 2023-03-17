let hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

let btn = document.getElementById('button');

//Making the background change color when clicking the button
btn.addEventListener('click', function(){
    let hexColor = '#';
    for(let i=0; i<6; i++){ //i is just number of times you loop
        hexColor += hex[getRandomNumber()]; //+= adds the different numbers
    }
    document.getElementById('bcolor');
    bcolor.textContent = hexColor;
    document.body.style.backgroundColor = hexColor
});

//Getting a random number
function getRandomNumber(){
    return Math.floor(Math.random()*hex.length); //Just math.random gets only random number between 0 and 1 without ever getting 1
} //Math.floor gives whole numbers rounding down
//Multiply by hex length to get 0 to 14