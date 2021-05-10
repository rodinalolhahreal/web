$(document).ready(function(){
    console.log("Site loaded!")
})
function mojefunkce() {
    alert("Zpráva")
}
$(document).ready(function(){
    $('#btn1').on("click",function(){
     $('#myImg').toggle('slow');
    });
  });
$(document).keydown(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '37'){
        alert('Levá');    
    }
    else if(keycode == '38'){
        alert('Horní');    
    }
    else if(keycode == '39'){
        alert('Pravá');    
    }
    else if(keycode == '40'){
        alert('Dolní');    
    }
});