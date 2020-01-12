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


let colorArray = randColor(colors);
log(colorArray);

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

const turn = (arr) =>{
    let counter = 0;
    let id1 = 0;
    let id2 = 0;
    let color1 = '';
    let color2 = '';
    let tile1 = '';
    let tile2 = '';

    $('.myButtons ul li').click(function() {
        if(counter == 0){
            id1 = $(this).attr('id');
            color1 = arr[id1];
            $(this).css('background-color', color1);
            tile1 = $(this);
            counter++
        }else{
            id2 = $(this).attr('id');
            color2 = arr[id2];
            $(this).css('background-color', color1);
            tile2 = $(this);
            if(color1 == color2 && id1 != id2){
                tile1.hide();
                tile2.hide();
            }else{
                tile1.css('background-color', 'black');
                tile2.css('background-color', 'black');
            }
            counter = 0;
        }
             
        
    });

}
turn(colorArray);








