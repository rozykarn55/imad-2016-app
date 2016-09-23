console.log('Loaded!');
//change the text of main-text
var element=document.getElementById('main-text');
element.innerhtml='This is the code done in inspect';

//move the image
var img=document.getElementById('roza');
var marginleft=0;

function moveright(){
    marginleft=marginleft +10;
    
    img.style.marginleft + 'px';
    
    
}
img.onClick = function (){
    var interval=setInterval(moveright,100);
    
};
