window.onload = function(){
    cargarpag()
}




function  cargarpag() {
    var game = document.getElementById('game');
    var win = document.getElementById('win');
    const save = game.innerHTML;

    var b1 = document.getElementById('b1');
    var b2 = document.getElementById('b2');
    var b3 = document.getElementById('b3'); 
    
    var b4 = document.getElementById('b4');
    var b5 = document.getElementById('b5');
    var b6 = document.getElementById('b6');

    var b7 = document.getElementById('b7');
    var b8 = document.getElementById('b8');
    var b9 = document.getElementById('b9');

    var c1 = document.getElementById('c1');
    var c2 = document.getElementById('c2');
    var c3 = document.getElementById('c3');

    var c4 = document.getElementById('c4');
    var c5 = document.getElementById('c5');
    var c6 = document.getElementById('c6');

    var c7 = document.getElementById('c7');
    var c8 = document.getElementById('c8');
    var c9 = document.getElementById('c9');

    
    var n;
    var i=1;

    function oprimir(n) {

        if (i <= 1) {
            n.innerHTML = 'X';
            i++;
        } else {
            n.innerHTML = 'O';
            i--;
        }


    }


    
    b1.onclick = function(){
        oprimir(c1);
        selectWinner(winner);
    };
    b2.onclick = function(){
        oprimir(c2);
        selectWinner(winner);
    };
    b3.onclick = function(){
        oprimir(c3);
        selectWinner(winner);
    };

    b4.onclick = function(){
        oprimir(c4);
        selectWinner(winner);
    };
    b5.onclick = function(){
        oprimir(c5);
        selectWinner(winner);
    };
    b6.onclick = function(){
        oprimir(c6);
        selectWinner(winner);
    };

    b7.onclick = function(){
        oprimir(c7);
        selectWinner(winner);
    };
    b8.onclick = function(){
        oprimir(c8);
        selectWinner(winner);
    };
    b9.onclick = function(){
        oprimir(c9);
        selectWinner(winner);
    };


    const winner = [
        [c1,c2,c3],
        [c4,c5,c6],
        [c7,c8,c9],

        [c1,c4,c7],
        [c2,c5,c8],
        [c3,c6,c9],

        [c1,c5,c9],
        [c3,c5,c7],
    ];

    var tablero = [
        c1,c2,c3,
        c4,c5,c6,
        c7,c8,c9
    ];

    function selectWinner(tateti) {

        

        const lineX = ['X','X','X'];
        const lineO = ['O','O','O'];

 for (let f = 0; f < 8; f++) {
        if ( lineX[0] === tateti[f][0].innerHTML && lineX[1] === tateti[f][1].innerHTML && lineX[2] === tateti[f][2].innerHTML){
            win.innerHTML += "<h1 class='winner'>Player 1 wins</h1>";
            
            for( let j = 0; j < 9; j++){
                if(tablero[j].innerHTML ==='X' || tablero[j].innerHTML ==='O'){
                } else {
                    tablero[j].textContent = '';
                }
        }

        } else if (lineO[0] === tateti[f][0].innerHTML && lineO[1] === tateti[f][1].innerHTML && lineO[2] === tateti[f][2].innerHTML) {
            win.innerHTML += "<h1 class='winner'>Player 2 wins</h1>";
            
            for( let j = 0; j < 9; j++){
                if(tablero[j].innerHTML ==='X' || tablero[j].innerHTML ==='O'){
                } else {
                    tablero[j].textContent = '';
                }
        }
        }
 }
  

};


var resett = document.getElementById('reset'); 
    resett.onclick = function() {
        game.innerHTML = save;
        win.innerHTML = '';
        cargarpag();
    };
}



