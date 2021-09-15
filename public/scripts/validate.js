function check(){
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var pass = document.getElementById("pwd");
    var repass =document.getElementById("rpwd");
    var mobile = document.getElementById("mobile");
      if(name.value == ""){
        window.alert("User Name can't be blank");
      //  console.log(email);
        name.focus();
        return false;
      }
      else if((name.length>3 || name.length<10)){
        window.alert("User Name not less than 3 character")
        name.focus();
        return false;
      }
      else if(email.value == ""){
       // console.log("Email Can't be blank");
        window.alert("Email can't be blank");
        email.focus();
        return false;
      }
    //   else if(pass.value == ""){
    //     window.alert("Password can't be blank");
    //     pass.focus();
    //     return false;
    //   }
    //   else if(repass.value == ""){
    //       window.alert("Repassword can't be blank");
    //       repass.focus();
    //       return false;
    //   }
    //   else if(pass.value != repass.value){
    //     window.alert("Password Mismatch");
    //     repass.focus();
    //     return false;
    //   }
      else if(mobile.value == ""){
          window.alert("Mobile Number Can't be blank");
          mobile.focus();
          return false;
      }
    //   else if(mobile.value.length !=10){
    //       window.alert("Mobile Number must be 10 digit");
    //       mobile.focus();
    //       return false;
    //   }
      else if(org.value == ""){
        window.alert("Institute/Organization name can't be blank");
        name.focus();
        return false;
      }
      // if(5==="5")
      // alert("hello");
      // else
      // alert("hi"+typeof(5));
    return true;
    }