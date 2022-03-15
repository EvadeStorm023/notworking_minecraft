var canvas= new fabric.Canvas("myCanvas")

bh = 30;
bw = 30;

pxpos = 20;
pypos = 20;

bobj = " ";
playerobj = " ";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){

        playerobj= Img;
        playerobj.scaleToWidth(150)
        playerobj.scaleToHeight(150)
        playerobj.set({
            top:pypos,
            left:pxpos
        });
        canvas.add(playerobj);
    })
}
function block_update(getImage){
    fabric.Image.fromURL(getImage, function(Img){

        bobj= Img;
        bobj.scaleToWidth(bw)
        bobj.scaleToHeight(bh)
        bobj.set({
            top:pypos,
            left:pxpos
        });
        canvas.add(playerobj);
    })
}

window.addEventListener('keydown', my_keydown)

function my_keydown(e){
  kc =  e.keyCode;
  console.log(kc)
if(kc == '84'){
    console.log(kc)
    block_update('cloud.jpg')
}
if(kc == '79'){
    block_update('trunk.jpg')
}
if(kc == '71'){
    block_update('unique.png')
}
if(kc == '68'){
    block_update('dark_green.png')
}
if(kc == '76'){
    block_update('light_green.png')
}
if(kc == '77'){
    block_update('ground.png')
}
if(kc == '78'){
    block_update('roof.jpg')
}
if(kc == '68'){
    block_update('wall.jpg')
}
if(kc == '89'){
    block_update('yellow_wall.png')
}
if(kc == '38'){
    up();
}
if(kc == '40'){
    down();
}
if(kc == '39'){
    right();
}
if(kc == '37'){
    left();
}
if(e.shiftKey == true && kc =='80'){
    bh = bh + 10;
    bw = bw + 10;
    document.getElementById('wv').innerHTML = bw;
    document.getElementById('hv').innerHTML = bh;
   
}
if(e.shiftKey == true && kc == '77'){
    bh = bh - 10;
    bw = bw - 10;
    document.getElementById('wv').innerHTML = bw;
    document.getElementById('hv').innerHTML = bh;
}

}

function up(){
if(pypos >=0){
    pypos = pypos - bh;
    canvas.remove(playerobj)
    player_update();
}
}

function down(){
    if(pypos <= 250){
        pypos = pypos + bh;
        canvas.remove(playerobj)
        player_update();
    }
}

function left(){
    if(pxpos >=0){
        pxpos = pxpos - bw
        canvas.remove(playerobj)
        player_update();
    }
}


function right(){
    if(pxpos <=450){
     pxpos = pxpos + bw
     canvas.remove(playerobj)
     player_update();
    }
}




