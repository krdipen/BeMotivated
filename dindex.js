function postToGoogle(){
    var username=$("#username").val();
    $.ajax({
        success:function(d){},
        error:function(x,y,z){
            window.open("https://krdipen.github.io/BeMotivated/"+username,"_self");
        }
    });
    return false;
}
