/*
* @Author: dell
* @Date:   2018-12-10 20:26:00
* @Last Modified by:   dell
* @Last Modified time: 2018-12-28 21:42:34
*/
window.onload=function(){
	var top=document.getElementById('top');
	var right=document.getElementById('right');
	var inner=document.getElementById('inner');
	inner.style.marginTop=0+"px";
	window.onscroll=function(){
		var a=document.documentElement.scrollTop||document.body.scrollTop;
		if(a>180){
			top.style.position='fixed';
			top.style.top=0+"px";
			top.style.width=1350+"px";
			top.style.paddingLeft=85+"px";
			right.style.marginTop=-15+"px";
			inner.style.marginTop=150+"px";
		}else{
			top.style.position='static';
			right.style.marginTop=0+"px";
			inner.style.marginTop=0+"px";
		}
	}
}
function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}
		var box = document.getElementById('animate');
		var oNavlist = document.getElementById('nav').children;
		var slider = document.getElementById('animate-ul');
		var left = document.getElementById('animate-left');
		var right = document.getElementById('animate-right');
		var index = 1;
		var li=0;
		var timer;
		var isMoving = false;
		slider.style.marginLeft=-800+"px";
		left.style.opacity=0;
		right.style.opacity=0;
		box.onmouseover = function(){
			animate(left,{opacity:90})
			animate(right,{opacity:90})
			clearInterval(timer)
		}
		box.onmouseout = function(){
			clearInterval(timer);
			animate(left,{opacity:0})
			animate(right,{opacity:0})
			timer = setInterval(next, 3000);
		}
		right.onclick = next;
		left.onclick = prev;
		for( var i=0; i<oNavlist.length; i++ ){
			oNavlist[i].index = i;
			oNavlist[i].onclick = function(){
				index = this.index+1;
				navmove();
				animate(slider,{marginLeft:-800*index});
			}
			oNavlist[i].onousedown=function(){
			var e=e||window.event;
			e.preventDefault();
		}
		}
		function next(){
			if(isMoving){
				return;
			}
			isMoving = true;
			index++;
			navmove();
			animate(slider,{marginLeft:-800*index},function(){
				if(index==7){
					slider.style.marginLeft = -800+'px';
					index = 1;
				}
				isMoving = false;
			});
		}
		function prev(){
			if(isMoving){
				return;
			}
			isMoving = true;
			index--;
			navmove();
			animate(slider,{marginLeft:-800*index},function(){
				if(index==0){
					slider.style.marginLeft = -4800 +'px';
					index = 6;
				}
				isMoving = false;
			});
		}
		function navmove(){
			for( var i=0; i<oNavlist.length; i++ ){
				oNavlist[i].className = "";
			}
			if(index >6 ){
				oNavlist[0].className = "active";
			}else if(index<=0){
				oNavlist[5].className = "active";
			}else {
				oNavlist[index-1].className = "active";
			}
		}
		timer = setInterval(next, 3000);
		function up(obj){
			if(num==380){
				obj.style.marginTop=-16+"px";
				num=16;
			}
			num++;
			obj.style.marginTop=-num+"px";
		}
		var num=0;
		var news=document.getElementById('news-ul');
		var news1=document.getElementById('news-move');
		news.style.marginTop=0+"px";
		var timer1=setInterval(function(){
			up(news);
		}, 10);
		news1.onmouseout=function(){
			clearInterval(timer);
			timer1=setInterval(function(){
			up(news);
		}, 10);
		}
		news1.onmouseover=function(){
			clearInterval(timer1);
		}




//右侧标签滑动特效

		var flag=0;
		var first=document.getElementById('right-first');
		first.onmouseover=function(){
			if(flag==0){
				flag=1;
				var timer=setInterval(function(){
					var left=parseInt(getStyle(first,'left'));
					if(left==0){
						flag=2;
						first.style.left=0+"px";
						clearInterval(timer);
					}else{
						left--;
						first.style.left=left+"px";
					}
			}, 0.001)
			}	
		}
		first.onmouseout=function(){
			first.style.left=0+"px";
			var left=parseInt(getStyle(first,'left'));
			if(flag==2&&left==0)
			{
				var timer=setInterval(function(){
					var left=parseInt(getStyle(first,'left'));
					if(left==77){
						first.style.left=77+"px";
						clearInterval(timer);
						flag=0;
					}else{
						left++;
						first.style.left=left+"px";
					}
				}, 0.001)
			}
		}
		var second=document.getElementById('right-second');
		second.onmouseover=function(){
			console.log("on");
			if(flag==0){
				flag=1;
				var timer=setInterval(function(){
					var left=parseInt(getStyle(second,'left'));
					if(left==0){
						flag=2;
						second.style.left=0+"px";
						clearInterval(timer);
					}else{
						left--;
						second.style.left=left+"px";
					}
			}, 0.001)
			}	
		}
		second.onmouseout=function(){
			console.log("out");
			second.style.left=0+"px";
			var left=parseInt(getStyle(second,'left'));
			if(flag==2&&left==0)
			{
				var timer=setInterval(function(){
					var left=parseInt(getStyle(second,'left'));
					if(left==77){
						second.style.left=77+"px";
						clearInterval(timer);
						flag=0;
					}else{
						left++;
						second.style.left=left+"px";
					}
				}, 0.001)
			}
		}
		var third=document.getElementById('right-third');
		var bottom=document.getElementById('right-third-bottom');
		var middle=document.getElementById('right-third-middle');
		middle.style.background='rgb(255,156,97)';
		third.onmouseover=function(){
			if(flag==0){
				flag=1;
				var timer=setInterval(function(){
					var left=parseInt(getStyle(third,'left'));
					if(left==0){
						flag=2;
						third.style.left=0+"px";						
						bottom.style.backgroundPosition=500+"px "+0+"px";
						middle.style.background='url(img/erwei.png)';
						clearInterval(timer);
					}else{
						left--;
						third.style.left=left+"px";
					}
			}, 0.001)
			}	
		}
		third.onmouseout=function(){
			third.style.left=0+"px";
			var left=parseInt(getStyle(third,'left'));
			if(flag==2&&left==0)
			{
				var timer=setInterval(function(){
					var left=parseInt(getStyle(third,'left'));
					console.log(left);
					if(left==77){
						third.style.left=77+"px";
						bottom.style.backgroundPosition=10+"px "+43+"px";
						middle.style.background='rgb(255,156,97)';
						clearInterval(timer);
						flag=0;
					}else{
						left++;
						third.style.left=left+"px";
					}
				}, 0.001)
			}
		}
		var fourth=document.getElementById('right-fourth');
		fourth.onmouseover=function(){
			if(flag==0){
				flag=1;
				var timer=setInterval(function(){
					var left=parseInt(getStyle(fourth,'left'));
					if(left==0){
						flag=2;
						fourth.style.left=0+"px";
						clearInterval(timer);
					}else{
						left--;
						fourth.style.left=left+"px";
					}
			}, 0.001)
			}	
		}
		fourth.onmouseout=function(){
			fourth.style.left=0+"px";
			var left=parseInt(getStyle(fourth,'left'));
			if(flag==2&&left==0)
			{
				var timer=setInterval(function(){
					var left=parseInt(getStyle(fourth,'left'));
					console.log(left);
					if(left==77){
						fourth.style.left=77+"px";
						clearInterval(timer);
						flag=0;
					}else{
						left++;
						fourth.style.left=left+"px";
					}
				}, 0.001)
			}
		}
		var phone=document.getElementById('phonefee-select');
		var phonefeeNum=document.getElementById('phonefee-num');
		for(i=1;i<=10;i++){
       		var option=document.createElement('option');
       		var str=i;
       		option.value=str*10;
       		option.innerHTML=str*10;
       		phone.appendChild(option);
       	}
       	phone.onchange=function(){
       		phonefeeNum.innerHTML="¥"+phone.value;
       		console.log(phonefeeNum);
       	}