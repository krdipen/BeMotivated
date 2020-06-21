function postToGoogle(){
    var kerberos=$("#emailid").val();
    $.ajax({
        url:"https://docs.google.com/forms/d/e/1FAIpQLSfNaReT96NWmLYFfh_XFflym8b7B4WpPtN29j0d_1uloSMzBg/formResponse?",
        data:{
            "entry.1955518625":kerberos
        },
        type:"POST",
        dataType:"xml",
        success:function(d){},
        error:function(x,y,z){
            alert("You will receive an email on "+kerberos.toLowerCase()+"@iitd.ac.in with the OTP.\nClick \"OK\" to continue with your IITD Email Verification.");
            window.open("https://krdipen.github.io/BeMotivated/signup","_self");
        }
    });
    return false;
}
