/*
* @Author: dell
* @Date:   2018-12-10 20:26:29
* @Last Modified by:   dell
* @Last Modified time: 2018-12-18 13:25:02
*/
function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
var imgLeft=document.getElementById('img-choice-left');
var imgRight=document.getElementById('img-choice-right');
var moveLeft=document.getElementById('move-left');
var moveRight=document.getElementById('move-right');
var img=document.getElementById('main-img');
imgRight.onmouseover=function(){
	imgRight.className="img-choice-style1";
	imgLeft.className="img-choice-style";
	img.src="img/pp1.jpeg";
}
imgLeft.onmouseover=function(){
	imgLeft.className="img-choice-style1";
	imgRight.className="img-choice-style";
	img.src="img/pp0.jpeg";
}
moveLeft.onclick=function(){
	imgLeft.className="img-choice-style1";
	imgRight.className="img-choice-style";
	img.src="img/pp0.jpeg";
}
moveRight.onclick=function(){
	imgRight.className="img-choice-style1";
	imgLeft.className="img-choice-style";
	img.src="img/pp1.jpeg";
}




	var img1 = document.getElementById("main-middle-img");
	var img2 = document.getElementById("img2");
	var slider = document.getElementById("slider");
	var box = document.getElementById('main-middle-img'); 
	img1.onmouseover=function(){
	    slider.style.display='block';
		img2.style.display='block';
		// Bimg.style.display="block";
 	}
	img1.onmouseout=function(){
	    slider.style.display='none';
		img2.style.display='none';
		// Bimg.style.display='none';
 	}
  
    img1.onmousemove=function(ev){
		var ev=ev||event;
		  
		var oL=ev.clientX-box.offsetLeft-slider.offsetWidth/2;
		var oT=ev.clientY-box.offsetTop-slider.offsetHeight/2;

		var oMaxw=img1.offsetWidth-slider.offsetWidth;
		var oMaxh=img1.offsetHeight-slider.offsetHeight;
		  
		oL=oL>oMaxw?oMaxw:oL<0?0:oL;
		oT=oT>oMaxh?oMaxh:oT<0?0:oT;
	
		slider.style.left = oL+'px';
		slider.style.top = oT+'px' ;
		var Bimg = document.getElementById("Bimg");
		Bimg.src=img.src;
		Bimg.style.width=820+"px";
		Bimg.style.height=820+"px";
		var oBmaxw = img2.offsetWidth - Bimg.offsetWidth; 
		var oBmaxh = img2.offsetHeight - Bimg.offsetHeight; 
		Bimg.style.left = ( oL/oMaxw ) * oBmaxw + 'px';
		Bimg.style.top = ( oT/oMaxh ) * oBmaxh + 'px';
		// console.log("横坐标为："+Bimg.style.left);
		// console.log("纵坐标为："+Bimg.style.top);
	}






	var volumeLeft=document.getElementById('volume-left');
	var volumeRight=document.getElementById('volume-right');
	var numChoice=document.getElementById('num-choice');
	volumeLeft.onclick=function(){
		volumeLeft.className="volume-style2";
		volumeRight.className="volume-style1";
		numChoice.innerHTML="150ml";
	}
	volumeRight.onclick=function(){
		volumeLeft.className="volume-style1";
		volumeRight.className="volume-style2";
		numChoice.innerHTML='"200ml"';
	}
	var reduce=document.getElementById('num-reduce');
	var add=document.getElementById('num-add');
	var input=document.getElementById('num-input');
	var num=parseInt(input.value);
	input.onchange=function(){
		if(parseInt(input.value)>5){
			input.value=5;
			input.innerHTML="5";
			console.log(input);
		}
		if(parseInt(input.value)<5){
			add.style.cursor="pointer";
		}
		if(parseInt(input.value)>1){
			reduce.style.cursor="pointer";
		}
	}
	reduce.onclick=function(){
		if(num<1){
			reduce.style.cursor="not-allowed";
		}else{
			num--;
			input.value=num;
			input.innerHTML=num;
		}
	}
	add.onclick=function(){
		if(num>=5){
			add.style.cursor="not-allowed";
		}else{
			num++;
			input.value=num;
			input.innerHTML=num;
			add.style.cursor="pointer";
		}
	}
	var cartX=document.getElementById('cart-top');
	var cart=document.getElementById('cart-bottom-left');
	var cover=document.getElementById('cover');
	var cartI=document.getElementById('shopping-cart');
	cartX.onclick=function(){
		cover.style.display="none";
	}
	cart.onclick=function(){
		cover.style.display="none";
	}
	cartI.onclick=function(){
		cover.style.display="block";
	}