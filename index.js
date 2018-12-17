/*
* @Author: dell
* @Date:   2018-12-10 20:26:00
* @Last Modified by:   dell
* @Last Modified time: 2018-12-16 23:02:51
*/
window.onload=function(){
	var top=document.getElementById('top');
	var right=document.getElementById('right');
	window.onscroll=function(){
		var a=document.documentElement.scrollTop||document.body.scrollTop;
		if(a>180){
			top.style.position='fixed';
			top.style.top=0+"px";
			top.style.width=1350+"px";
			top.style.paddingLeft=85+"px";
			right.style.marginTop=130+"px";
		}else{
			top.style.position='static';
			right.style.marginTop=0+"px";
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
		slider.style.left=-800+"px";
		box.onmouseover = function(){
			animate(left,{opacity:50})
			animate(right,{opacity:50})
			clearInterval(timer)
		}
		box.onmouseout = function(){
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
				animate(slider,{left:-800*index});
			}
		}
		function next(){
			if(isMoving){
				return;
			}
			isMoving = true;
			index++;
			navmove();
			animate(slider,{left:-800*index},function(){
				if(index==7){
					slider.style.left = -800+'px';
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
			animate(slider,{left:-800*index},function(){
				if(index==0){
					slider.style.left = -4800 +'px';
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
				obj.style.top=-16+"px";
				num=16;
			}
			num++;
			obj.style.top=-num+"px";
		}
		var num=0;
		var news=document.getElementById('news-ul');
		var news1=document.getElementById('news-move');
		news.style.top=0+"px";
		var timer1=setInterval(function(){
			up(news);
		}, 10);
		news1.onmouseout=function(){
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
		var firstTop=document.getElementById('right-first-top');
		var firstBottom=document.getElementById('right-first-bottom');
		first.onmouseover=function(){
			if(flag==0){
				flag=1;
				var timer=setInterval(function(){
					var top=parseInt(getStyle(firstTop,'background-position'));
					var bottom=parseInt(getStyle(firstBottom,'background-position'));
					if(top==0){
						flag=2;
						firstTop.style.backgroundPosition=0+"px "+1+"px";
						firstBottom.style.backgroundPosition=0+"px "+0+"px";
						clearInterval(timer);
					}else{
						top--;
						bottom--;
						firstTop.style.backgroundPosition=top+"px "+1+"px";
						firstBottom.style.backgroundPosition=bottom+"px "+0+"px";
					}
			}, 0.001)
			}	
		}
		first.onmouseout=function(){
			firstTop.style.backgroundPosition=0+"px "+1+"px";
			firstBottom.style.backgroundPosition=0+"px "+0+"px";
			var top=parseInt(getStyle(firstTop,'background-position'));
			if(flag=2&&top==0)
			{
				var timer=setInterval(function(){
					var top=parseInt(getStyle(firstTop,'background-position'));
					var bottom=parseInt(getStyle(firstBottom,'background-position'));
					if(top==78){
						firstTop.style.backgroundPosition=78+"px "+1+"px";
						firstBottom.style.backgroundPosition=79+"px "+0+"px";
						clearInterval(timer);
						flag=0;
					}else{
						top++;
						bottom++;
						firstTop.style.backgroundPosition=top+"px "+1+"px";
						firstBottom.style.backgroundPosition=bottom+"px "+0+"px";
					}
				}, 0.001)
			}
		}
		var second=document.getElementById('right-second');
		var setup=document.createElement('div');
		setup.id="setup";
		second.appendChild(setup);
		second.onmouseover=function(){
			if(flag==0){
				flag=1;
				var timer=setInterval(function(){
					var top=parseInt(getStyle(second,'background-position'));
					var set=parseInt(getStyle(setup,'margin-left'));
					if(top==0){
						flag=2;
						second.style.backgroundPosition=0+"px "+0+"px";
						setup.style.marginLeft=60+"px";
						clearInterval(timer);
					}else{
						top--;
						set--;
						if(set<60){
							setup.style.marginLeft=60+"px";
						}else{
							setup.style.marginLeft=set+"px";
						}
						second.style.backgroundPosition=top+"px "+0+"px";
						console.log(setup.style.marginLeft);
					}
			}, 0.001)
			}	
		}
		second.onmouseout=function(){
			second.style.backgroundPosition=0+"px "+0+"px";
			setup.style.marginLeft=60+"px";
			var top=parseInt(getStyle(second,'background-position'));
			var set=parseInt(getStyle(setup,'margin-left'));
			if(flag=2&&top==0)
			{
				var timer=setInterval(function(){
					var top=parseInt(getStyle(second,'background-position'));
					if(top==79){
						second.style.backgroundPosition=79+"px "+0+"px";
						setup.style.marginLeft=120+"px";
						clearInterval(timer);
						flag=0;
					}else{
						top++;
						set++;
						second.style.backgroundPosition=top+"px "+0+"px";
						setup.style.marginLeft=set+"px";
					}
				}, 0.001)
			}
		}