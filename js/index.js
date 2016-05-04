window.onload=function(){
	//banner轮播图
	var imgs=getClass("banner-img1")[0].getElementsByTagName('a');
	//console.log(imgs);
	var btns=getClass("btn")[0].getElementsByTagName("li");
	//console.log(btns);
	var index=0;
	var t=setInterval(wheel,2000)
	function wheel(){
      index++;
      if(index>imgs.length-1){
       index=0;
      }
      for (var i = 0; i < imgs.length; i++) {
      	imgs[i].style.zIndex="0";
      	btns[i].style.background="#ccc";
      };
      imgs[index].style.zIndex="1";
      btns[index].style.background="#f2f2f2";
	}
	for (var i = 0; i < btns.length; i++) {
		btns[i].index=i;
		btns[i].onclick=function(){
           //console.log(this.index);
           for (var j = 0; j < btns.length; j++) {
           	btns[j].style.background="#ccc";
           	imgs[j].style.zIndex="0";
           };
           this.style.background="#f2f2f2";
           imgs[this.index].style.zIndex="1";
		}
	};
	var banner=getClass("banner-in")[0];
	//console.log(banner)
	banner.onmouseover=function(){
      clearInterval(t)
	};
	banner.onmouseout=function(){
       t=setInterval(wheel,2000)
	}; 


	//国际大牌选项卡
	var pinpai=getClass("rmpp-top")[0].getElementsByTagName("a");
	//console.log(pinpai);
	var tus=getClass("rmpp-tu");
	//console.log(tus);

      for (var i = 0; i < pinpai.length; i++) {
      	pinpai[i].index=i;
      	pinpai[i].onclick=function(){
      		//console.log(this.index)
      		for (var j = 0; j < tus.length; j++) {
      			tus[j].style.display="none";
                pinpai[j].style.borderBottom="0";
                pinpai[j].style.fontWeight="0";
                pinpai[j].style.color="#666";
      		};
      		tus[this.index].style.display="block";
      		this.style.borderBottom="2px solid #000";
      		this.style.fontWeight="700";
      		this.style.color="#2f2f2f";

      	}
      };


}