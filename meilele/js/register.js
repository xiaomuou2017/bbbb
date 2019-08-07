function checkUser(){
    var value = document.myform.username.value;
    var td = document.getElementById('username_info');
    if(value.search(/^\w{6,12}$/) === -1){
        td.innerHTML = "用户名必须是6-12位的数字、字母、下划线。";
        td.style.color = "red";
    }else{
        td.innerHTML = "用户名可以使用。";
        td.style.color = "green";
    }
}
function checkEmail(){
    var value = document.myform.email.value;
    var td = document.getElementById('email_info');
    if(value.search(/^\w+@[a-z0-9]+\.[a-z]{2,3}$/) === -1){
        td.innerHTML = "邮箱格式错误。"
        td.style.color = "red";
    }else{
        td.innerHTML = "邮箱可以使用。";
        td.style.color = "green";
    }
    }
function checkPwd(){
var value = document.myform.pwd.value;
    var td = document.getElementById('pwd_info');
    if(value.search(/\w{6,}/) === -1){
        td.innerHTML = "密码最少不得低于六位数"
        td.style.color = "red";
    }else{
        td.innerHTML = "密码可以使用。";
        td.style.color = "green";
    }
    }
function checkRePwd(){
var value = document.myform.repwd.value;
    var td = document.getElementById('repwd_info');
    if(value === document.myform.pwd.value && value !==""){
        td.innerHTML = "密码通过。"
        td.style.color = "green";
    }else{
        td.innerHTML = "密码不符。";
        td.style.color = "red";
    }
 }
 
 var obtn = document.getElementById("btn");
 var ou = document.getElementById("user");
 var opwd = document.getElementById("pwd");
 obtn.onclick = function(){
    var u = ou.value;
    var pwd = opwd.value;
    localStorage.setItem(u,pwd)
    alert("注册成功");
    window.open("../page/login.html");
 }

