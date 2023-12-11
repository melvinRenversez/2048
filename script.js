canvas = document.querySelector("canvas")
ctx = canvas.getContext("2d");

const col = 4
const row = 4
const cote = 800

const size = 200

Pieces = []

for (c = 0; c < col; c++) {
    for (r = 0; r < row; r++) {

        ctx.strokeStyle = "black"
        ctx.strokeRect(c * size, r * size, size, size)

    }
}

function Piece(x, y, size){

    this.x = x
    this.y = y
    this.size = size

    this.draw = function(){
        ctx.fillStyle = "black"
        ctx.fillRect(this.x * size, this.y * size, this.size, this.size)

    }

}






function moveDown() {
    for (let xr = 1; xr < row + 1; xr++) {
        const r = row - xr;
        for (let c = 0; c < col; c++) {
            console.log(r, c);
            for (let i = 0; i < Pieces.length; i++) {
                if (Pieces[i].x === c && Pieces[i].y === r) {
                    console.log("find", c);
                    for (let u = c + 1; u < row; u++) {
                        let collision = false;
                        for (let t = 0; t < Pieces.length; t++) {
                            if ((Pieces[t].y === u && Pieces[t].y === c) || u > 3) {
                                collision = true;
                                break;
                            }
                        }
                        console.log("collision", collision);
                        if (!collision) {
                            Pieces[i].y = u;
                        } else {
                            break;
                        }
                    }
                }
            }
        }
    }
}



function test(){
    
}















for ( i = 0; i < 2 ; i++ ){
    x = Math.trunc(Math.random() * 4)
    y = Math.trunc(Math.random() * 4)
    
    console.log(x, y)
    
    Pieces.push(new Piece(x, y, size))
}





document.addEventListener('keydown', function(e){

    if (e.keyCode === 37){
        console.log("left")
    }
    if (e.keyCode === 38){
        console.log("top")
    }
    if (e.keyCode === 39){
        console.log("right")    
    }
    if (e.keyCode === 40){
        console.log("bottom")
        moveDown()
    }


})








function loop(){

    ctx.clearRect(0, 0, cote, cote)

    for (i = 0; i < Pieces.length; i++){
        
        Pieces[i].draw()

    }

    requestAnimationFrame(loop)
}

loop()