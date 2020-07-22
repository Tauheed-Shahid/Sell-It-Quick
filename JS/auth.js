const signupBtn = document.getElementById("signupBtn");
const loginBtn = document.getElementById("loginBtn");
// const logoutBtn = document.getElementById("logoutBtnn");
// auth.onAuthStateChanged((user)=>{
//     if(user){
//         // window.location.href = "mainpage.html";
//         console.log(user);
//     }
//     else{
//         // window.location.href="index.html";
//         console.log('User is logged out');
//     }
// });
$('#logoutBtnn').click(function(){
    logout();
// console.log('clikked');
});
signupBtn.addEventListener('click', (e) => {
    e.preventDefault();
    signup();
    // console.log("Signup Clickked");
});

loginBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    login();
    console.log("clicked");
});

function login(){
    const loginEmail = document.getElementById("loginEmail").value;
    const loginPwd=  document.getElementById("loginPasswd").value;
    // const form = document.getElementById('loginForm');

    auth.signInWithEmailAndPassword(loginEmail,loginPwd).then((cred)=>{
        // console.log(cred.user);
        // $('#signinModal').modal('hide');
        // form.reset();
        console.log('logged in!');

    });

    // console.log(loginEmail);
    // console.log(loginPwd);
}

function signup(){
    const email = document.getElementById("signupEmail").value;
    const passwd1 = document.getElementById("signupPasswd1").value;
    const passwd2 = document.getElementById("signupPasswd2").value;
    const name = document.getElementById("signupName").value;

    // console.log(email);
    // console.log(passwd1);
    // console.log(passwd2);
    // console.log(name);
    // const form = document.getElementById('signupForm');

    auth.createUserWithEmailAndPassword(email, passwd1).then(cred => {
        // console.log(cred.user);

        // $('#signupModal').modal('hide');
        // form.reset();

        console.log("User Created");

    });
}


// logoutBtn.addEventListener('click',(e)=>{
//     e.preventDefault();
//     console.log("clicked");
//     // logout();
// });

function logout(){
    auth.signOut();
}