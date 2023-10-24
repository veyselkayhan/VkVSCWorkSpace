/* ------------------------------------ Click on login and Sign Up to  changue and view the effect
---------------------------------------
*/

const time_to_show_login = 400;
const time_to_hidden_login = 200;

function change_to_login() {
document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";  
document.querySelector('.cont_form_login').style.display = "block";
document.querySelector('.cont_form_sign_up').style.opacity = "0";               

setTimeout(function(){  document.querySelector('.cont_form_login').style.opacity = "1"; },time_to_show_login);  
  
setTimeout(function(){    
document.querySelector('.cont_form_sign_up').style.display = "none";
},time_to_hidden_login);  
  }

  const time_to_show_sign_up = 100;
  const time_to_hidden_sign_up = 400;

function change_to_sign_up(at) {
  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
  document.querySelector('.cont_form_sign_up').style.display = "block";
document.querySelector('.cont_form_login').style.opacity = "0";
  
setTimeout(function(){  document.querySelector('.cont_form_sign_up').style.opacity = "1";
},time_to_show_sign_up);  

setTimeout(function(){   document.querySelector('.cont_form_login').style.display = "none";
},time_to_hidden_sign_up);  


}    

const time_to_hidden_all = 500;

function hidden_login_and_sign_up() {

document.querySelector('.cont_forms').className = "cont_forms";  
document.querySelector('.cont_form_sign_up').style.opacity = "0";               
document.querySelector('.cont_form_login').style.opacity = "0"; 

setTimeout(function(){
document.querySelector('.cont_form_sign_up').style.display = "none";
document.querySelector('.cont_form_login').style.display = "none";
},time_to_hidden_all);  
  
}

let user = { Email: "", Username: "", Password: "" };

function completeRegistration() {
  const email = document.getElementById("email_sign").value;
  const username = document.getElementById("username_sign").value;
  const password = document.getElementById("password_sign").value;
  const confirmPassword = document.getElementById("confirmPassword_sign").value;

  if (password !== confirmPassword) {
      alert("Şifreler uyuşmuyor!");
      return;
  }
  user = {
      Email: email,
      Username: username,
      Password: password,
  };
  console.log(user);

  openModal();
}


function openModal() {
  const modal = document.getElementById("registrationModal");
  if (modal) {
    modal.classList.add("active"); 
  } else {
    console.error("Modal öğesi bulunamadı.");
  }
}

function closeModal() {
  const modal = document.getElementById("registrationModal");
  modal.classList.remove("active"); 
}





function loginUser() {
  const email = document.getElementById("email_log").value;
  const password = document.getElementById("password_log").value;
  if (email.trim() === "") {
    alert("Email alanı boş bırakılamaz");
    return;
  }

  if (user.Email === email && user.Password === password) {
    alert("Giriş Başarili");
    window.location.href="/homePage.html"

  } else {
    alert("Kullanıcı email veya Şifre Hatalı");
  }
}

    
    
