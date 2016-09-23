console.log('Loaded!');
//change the text of main-text
var element=document.getElementById('main-text');
element.innerhtml='This is the code done in inspect';

//move the image
var img=document.getElementById('roza');
img.onClick = function (){
    img.style.Marginleft='100px';
    
};
