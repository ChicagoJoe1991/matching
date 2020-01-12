log = console.log;
let colors = ['white', 'blue', 'green', 'red', 'purple', 'pink', 'yellow', 'orange', 'grey', 'tomato', 'brown', 'turquoise','wheat','cornflowerblue','olive','white', 'blue', 'green', 'red', 'purple', 'pink', 'yellow', 'orange', 'grey', 'tomato', 'brown', 'turquoise','wheat','cornflowerblue','olive'];

//return a random number between 0 - 29
let randNum = () => {
    let rand = Math.abs(Math.round(Math.floor(30) * Math.random()-1));
    return rand;
}
//select a random element in an array and move it to a different location in the same array
const change = (arr, x, y) => {
    let arr3 = arr.splice(y, 0, arr.splice(x, 1)[0]);
    return arr3;
  };

  // take an array of 30 colors andreorder the array to create a new random order
let randColor = arr => {
    for(i=0;i<30;i++){
        let rand = randNum();
        let rand2 = randNum();
        change(arr, rand, rand2);
    };
    return arr;
} ;

//call the randColor function and store the array in colorArray
let colorArray = randColor(colors);
log(colorArray);

//display 30 buttons on the page. All of the tiles are black at this stage in the game. 
const buttons = () => {
    let myButtons = document.getElementById('myButtons');
    let tileGroup = document.createElement('ul');
    tileGroup.id = 'tileGroup';
    tileGroup.className = 'tileGroup';
    for(i=0; i < 30; i++){
        list = document.createElement('li');
        list.id = i;
        list.className = 'tile';
        $(list).css('background-color', 'black');
        myButtons.appendChild(tileGroup);
        tileGroup.appendChild(list);
    };
};

//call the buttons function
buttons();

//create a function for gameplay
const play = (arr) =>{
    let counter = 0;
    let id1 = 0;
    let id2 = 0;
    let color1 = '';
    let color2 = '';
    let tile1 = '';
    let tile2 = '';
    let counter2 = 0;

    $('.myButtons ul li').click(function() {
        if(counter == 2){
            tile1.css('background-color', 'black');
            tile2.css('background-color', 'black');
            counter = 0;
        }
        if(counter == 0){
            id1 = $(this).attr('id');
            color1 = arr[id1];
            $(this).css('background-color', color1);
            tile1 = $(this);
            counter++
        }else if(counter == 1){
            id2 = $(this).attr('id');
            color2 = arr[id2];
            $(this).css('background-color', color2);
            tile2 = $(this);
            counter2++;
            counter++
            document.getElementById('score').innerHTML = counter2;
            if(color1 == color2 && id1 != id2){
                tile1.hide();
                tile2.hide();
                counter = 0;
            };
        };
    });

};

//call the play function
play(colorArray);








