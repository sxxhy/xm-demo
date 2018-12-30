(function(){
    (function(){
        var cart=document.getElementsByClassName('cart-content')[0];
        var cartA=document.getElementsByClassName('cart')[0];
        var cartIn=document.getElementsByClassName('cart-info')[0];
        cart.addEventListener('mouseover',function(){ 
            cartA.className+=' hover';
            cartIn.style.height='98px';
            cartIn.style.boxShadow='0 2px 3px #ccc';
        })
        cart.onmouseout=function(){
            cartA.className=cartA.className.replace('hover','');
            cartIn.style.height='';
            cartIn.style.boxShadow='';
        }
        var form=document.querySelector('#nav form');
        var text=document.getElementsByTagName('input')[0];
        var sub=document.getElementsByTagName('input')[1];
        form.onmouseover=function(){
            text.style.borderColor='#B0B0B0';
            sub.style.borderColor='#B0B0B0';
        }
        form.onmouseout=function(){
            text.style.borderColor='';
            sub.style.borderColor='';
        }
        text.addEventListener('focus',function(){
            this.style.borderColor='#ff6700';
            sub.style.borderColor='#ff6700';
            form.onmouseover=null;
            form.onmouseout=null;
        })
        text.addEventListener('blur',function(){
            this.style.borderColor='';
            sub.style.borderColor='';
            form.onmouseover=function(){
                text.style.borderColor='#B0B0B0';
                sub.style.borderColor='#B0B0B0';
            }
            form.onmouseout=function(){
                text.style.borderColor='';
                sub.style.borderColor='';
            }
        })
    })();
    (function(){
        function task(){
        //找到有show的img
        var img=document.getElementsByClassName('show')[0];
        var aBtn=document.getElementsByClassName('active')[0];
        //清空前一个img的show
        img.className='';
        //如果img有下一个兄弟
        aBtn.className='';
        if(arguments.length==0){
            var imgN=img.nextElementSibling;
            var btnN=aBtn.nextElementSibling;
            var imgP=img.parentElement.children[0];
            var btnP=aBtn.parentElement.children[0];
        }else{
            var imgN=img.previousElementSibling;
            var btnN=aBtn.previousElementSibling;
            var imgP=img.parentElement.children[img.parentElement.children.length-1];
            var btnP=aBtn.parentElement.children[aBtn.parentElement.children.length-1];
        }
        if(imgN){
          imgN.className='show';
          btnN.className='active';
        }else{
          imgP.className='show';
          btnP.className='active';
        }
      }
      var timer=setInterval(task,5000);
      var menu=document.getElementById('menu');
      menu.onmouseover=function(){
        clearInterval(timer);
      }
      menu.onmouseout=function(){
        timer=setInterval(task,5000);
      }
      var btns=document.getElementsByClassName('btn');
      var imgs=document.querySelectorAll('#menu .big-img img');
      for(var i=0;i<btns.length;i++){
        btns[i].index=i;      
        btns[i].onclick=function(){
            var img=document.getElementsByClassName('show')[0];
            var aBtn=document.getElementsByClassName('active')[0];
            img.className='';
            aBtn.className='';
            this.className='active';
            imgs[this.index].className='show';
        }
      }
      var btnR=document.getElementsByClassName('btn-r')[0];
      btnR.onclick=function(){
        task();
      }
      var btnL=document.getElementsByClassName('btn-l')[0];
      btnL.onclick=function(){
        task(1);
      }
    })();
    (function(){
        var listChild=document.getElementsByClassName('list-child');
        var divs=document.querySelectorAll('#menu .menu-list li div');
        for(var div of divs){
            var ul=div.children;
            div.style.width=248*ul.length+'px';
        }
        for(var list of listChild){
            list.onmouseover=function(){
                var div=this.children[1];
                div.style.display='block';
            }
            list.onmouseout=function(){
                var div=this.children[1];
                div.style.display='none';
            }
        }
    })();
    (function(){
        window.onload=function(){
            function task(){
            var end=new Date("2020/11/16 14:09:40");
            var now=new Date();
            var s=parseInt((end-now)/1000);
            if(s>0){
                var d=parseInt(s/3600/24);
                if(d<10) d="0"+d;
                var h=parseInt(s%(3600*24)/3600);
                if(h<10) h="0"+h;
                var m=parseInt(s%3600/60);
                if(m<10) m="0"+m;
                s%=60;
                if(s<10) s="0"+s;
                var hour=document.getElementsByClassName('flashover-time')[0];
                var minute=document.getElementsByClassName('flashover-minute')[0];
                var second=document.getElementsByClassName('flashover-second')[0];
                hour.innerHTML=h;
                minute.innerHTML=m;
                second.innerHTML=s;
            }else{
                hour.innerHTML='00';
                minute.innerHTML='00';
                second.innerHTML='00';
            }
        };
        task();
        setInterval(task,1000);
        var btn01=document.getElementById('btn01');
        var btn02=document.getElementById('btn02');
        var ul=document.querySelector('#carousel-info .flashover-list ul');
        btn01.style.cursor='default';
        btn01.children[0].className='iC';
        btn02.children[0].className='iH';
        btn01.onclick=function(){
            if(ul.style.left==='') left=0;
            else
                var left=parseInt(ul.style.left);
            if(left>=0 || (left<=-990&&left>=-1990)){
                ul.style.left='0px';
            }else{
                ul.style.left='-998px';
            }
            if(left===0 || left===-998){
                this.style.cursor='default';
                this.children[0].className='iC';
            }else{
                this.style.cursor='pointer';
                this.children[0].className='iH';
            }
            btn02.style.cursor='pointer';
            btn02.children[0].className='iH';
        }
        btn02.onclick=function(){
            if(ul.style.left=='') left=0;
            else
                var left=parseInt(ul.style.left);
            if(left>=0){
                ul.style.left='-998px';
            }else if(left<=-990&&left>=-1990){
                ul.style.left='-1996px';
            }
            if(left===-998 || left===-1996){
                this.style.cursor='default';
                this.children[0].className='iC';
            }else{
                this.style.cursor='pointer';
                this.children[0].className='iH';
            }
            btn01.style.cursor='pointer';
            btn01.children[0].className='iH';
        }
    }
    })();
    (function(){
        function pL(uPath) {
            var ul = document.querySelector(`.${uPath} .more-list ul`);
            var as=document.querySelectorAll(`.${uPath} .more-list ul li a`);
            ul.addEventListener('mouseover', function (e) {
                if (e.target.nodeName === 'A') {
                    var a = e.target;
                    var divs = document.querySelectorAll(`.${uPath} .left-img~div`);
                    for(var aA of as){
                        aA.className='';
                    }
                    for (var div of divs) {
                        div.className = div.className.replace('other', '');
                        if (div.getAttribute('data-list') == a.getAttribute('href') && div.className.indexOf('other') == -1) {
                            div.className += ' other';
                        }
                    }
                    a.className='active';
                }
            })
            ul.addEventListener('click', function (e) {
                e.preventDefault();
            })
        }
        pL('house-app');
        pL('intelligence');
    })();
    (function(){
        var lis=document.querySelectorAll('#fixed-nav>.fixed-list>li');
        for(var li of lis){
            li.onmouseover=function(){
                var div=this.children[1];
                div.style.display='block';
            }
            li.onmouseout=function(){
                var div=this.children[1];
                div.style.display='none';
            }
        }
        var toTop=document.getElementsByClassName('fixed-toTop')[0];
        window.onscroll=function(){
            if(document.documentElement.scrollTop>300){
                toTop.style.opacity='1';
            }else{
                toTop.style.opacity='0';
            }
        }
        toTop.onclick=function(){
            document.documentElement.scrollTop=0;
        }

    })()
})()