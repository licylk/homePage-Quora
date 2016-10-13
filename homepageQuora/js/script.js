// JavaScript Document

var chooseSw=document.getElementsByClassName("ios")[0];
var oUl=document.getElementsByClassName("android")[0];
var oLishow=oUl.getElementsByClassName("showli")[0];


(function(){
	if(oLishow.addEventListener) {
     oLishow.addEventListener("mouseover",showList,false);
    } else if (oUl.attachEvent) {
	  oLishow.attatchEvent("onmouseover",showList)	
	} else {
	  oLishow.onmouseover=showList; 	
	}
})();

(function(){
	if(oLishow.addEventListener) {
     oLishow.addEventListener("mouseleave",function(){
		oLishow.timer=setTimeout(hiddenList,100)},false);
    } else if (oLishow.attachEvent) {
	  oLishow.attatchEvent("onmouseleave",function(){
		oLishow.timer=setTimeout(hiddenList,100)})	
	} else {
	  oLishow.onmouseleave=function(){
		oLishow.timer=setTimeout(hiddenList,100)}; 	
	}
})();

(function(){	
	
   	if(oUl.addEventListener) {
     oUl.addEventListener("mouseover",function(){
		clearTimeout(oLishow.timer); 
	 },false);
    } else if (oUl.attachEvent) {
	  oUl.attatchEvent("onmouseover",function(){
		clearTimeout(oLishow.timer); 
	 })	
	} else {
	  oUl.onmouseover=function(){
		clearTimeout(oLishow.timer); 
	 };	
	}
})();

(function(){	
	
   	if(oUl.addEventListener) {
     oUl.addEventListener("mouseleave",function(){
		oLishow.timer=setTimeout(hiddenList,100)}
	 ,false);
    } else if (oUl.attachEvent) {
	  oUl.attatchEvent("onmouseover",function(){
		oLishow.timer=setTimeout(hiddenList,100)})
	} else {
	  oUl.onmouseover=function(){		
		oLishow.timer=setTimoeut(hiddenList,100)}
	 };	
	
})();

function showList(){
   var aLi=oUl.getElementsByTagName("li");
   
   for (var i=0; i<aLi.length; i++) {
	 if(aLi[i].className=="hiddenli") {
	   aLi[i].className="showcli";
	   aLi.mouseover=function(){
		this.style.border="1px solid #ccc";   
		}	 
	 }   
   }
  }
 

function hiddenList(){
 var aLi=oUl.getElementsByTagName("li");
 for (var j=0;j<aLi.length;j++){
	 if(aLi[j].className=="showcli") {
	   aLi[j].className="hiddenli";	 
	 }
 }	
}