

function verifyUser(){
    let userName=document.getElementById("user").value;
    let pass=document.getElementById("pass").value;  
    let Name = userName.toLowerCase();
   if(Name === "amol" && pass === "123")
   {
    location.href = 'home.html';
   }
   else if(userName === "" || pass === "") {
       alert("Must enter username and password");
   } else {
       alert("UserName and Password Not Match");
   }
}

function resetUser() {
    document.getElementById("user").value = "";
    document.getElementById("pass").value = "";
}