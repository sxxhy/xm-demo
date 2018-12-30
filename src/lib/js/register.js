(function(){
    var tel=document.getElementsByName('phone')[0];
    var p1=document.querySelector('.register input[name="phone"]+p');
    tel.onblur=function(){
        var i1 = p1.children[0];
        var reg=/^\d{11}$/;
        if (tel.value == '') {
            p1.innerHTML = '<i class="waring"></i>请输入手机号码';
            tel.style.borderColor = '#f66';
        } else{
            if(reg.test(tel.value)){
                p1.innerHTML = '';
                tel.style.borderColor = '';
            }
            else{
                p1.innerHTML = '<i class="waring"></i>手机号码格式错误';
                tel.style.borderColor = '#f66';
            }
        }
    }
    tel.onkeydown=function(){
        p1.innerHTML='';
        tel.style.borderColor = '';
    }   
})()