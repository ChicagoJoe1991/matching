log = console.log;
let colors = ['black', 'blue', 'green', 'red', 'purple', 'pink', 'yellow', 'orange', 'grey', 'tomato', 'brown', 'turquoise','wheat','samoln','olive','black', 'blue', 'green', 'red', 'purple', 'pink', 'yellow', 'orange', 'grey', 'tomato', 'brown', 'turquoise','wheat','samoln','olive'];

// take an array of 15 colors and create a new random array of 15 pairs of colors in a random order
let randNum = () => {
    let rand = Math.abs(Math.round(Math.floor(30) * Math.random()-1));
    return rand;
}




const change = (arr, x, y) => {
    let arr3 = arr.splice(y, 0, arr.splice(x, 1)[0]);
    return arr3;
  };

let randColor = arr => {
    for(i=0;i<30;i++){
        let rand = randNum();
        let rand2 = randNum();
        change(arr, rand, rand2);
    };
    return arr;
} ;

log(randColor(colors));

let colorArray = randColor(colors);

const buttons = arr => {
    let myButtons = document.getElementById('myButtons');
    let tileGroup = document.createElement('ul');
    tileGroup.id = 'tileGroup';
    tileGroup.class = 'tileGroup';
    for(i=0; i < 30; i++){
        list = document.createElement('li');
        list.id = 'tile';
        list.class = 'tile';
        $(list).css('background-color', [arr[i]]);
        list.innerHTML = i;
        myButtons.appendChild(tileGroup);
        tileGroup.appendChild(list);
    };
};

buttons(colorArray);

// $(document).ready(function() {
//     $('game').hover(function() {
//         $(this).hide()
//     });
// });

const turn = () =>{
    let counter = 0;
    $('.myButtons ul li').click(function() {
        $(this).css('background-color', 'black');
    });

}
turn();








