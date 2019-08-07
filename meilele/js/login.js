function checkUser(){
    var value = document.getElementById("username").value;
    var span = document.getElementById('username_info');
    if(value.search(/^\w{6,12}$/) === -1){
        span.innerHTML = "用户名必须是6-12位的数字、字母、下划线。";
        span.style.color = "red";
    }else{
        span.innerHTML = "用户名可以使用。";
        span.style.color = "green";
    }
}

function checkPwd(){
	var value = document.getElementById("pwd").value;
		var span = document.getElementById('pwd_info');
		if(value.search(/\w{6,}/) === -1){
			span.innerHTML = "密码最少不得低于六位数"
			span.style.color = "red";
		}else{
			span.innerHTML = "密码可以使用。";
			span.style.color = "green";
		}
    }

var ousername = document.getElementById("username");
var opassword = document.getElementById("pwd");
var obtn1 = document.getElementById("btn1");
var obtn2 = document.getElementById("btn2");
console.log(opassword)
obtn2.onclick = function(){
    window.open("../page/register.html")
}
obtn1.onclick = function(){
    var u = ousername.value;
    var p = opassword.value;
    if(u==""||p==""){
        alert("用户名和密码不能为空")
    }else{
        var v = localStorage.getItem(u);
        if(p==v){
            alert("登录成功")
            window.open("../index.html")
        }else{
            alert("登录失败")
        }
    }
}
