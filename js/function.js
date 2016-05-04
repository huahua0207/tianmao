//解决getElementsByClassName
function getClass(classname,obj){
	var obj=obj||document;//如果传了第二个参数，obj就是传的参数,如果                            
	if(obj.getElementsByClassName){
		 //alert("支持");
         return obj.getElementsByClassName(classname);
        
	}else{
		var arr=[];
		var alls=obj.getElementsByTagName("*");
		 for (var i = 0; i < alls.length; i++){
		 	  if(check(alls[i].className,classname)){

                  arr.push(alls[i])  
		 	  }
		 };
		 return arr;
	}
}

  function check(newclass,oldclass){
  	 var flag=false;
      var Nc=newclass.split(" ")
      for (var i = 0; i < Nc.length; i++) {
         if(Nc[i]==oldclass){
           flag=true;
         }   
      };
      return flag;
  }


//解决获取修改兼容问题
  function getText(obj,val){
	if(val==undefined){
	        if(typeof obj.textContent=='string'){
	        //console.log("f/c/ie9-11")
	     return obj.textContent;
	    }else{
	    	//alert("ie6-8/chorme")
	    	return obj.innerText;
	    	
	    }
	}else{
		 if(typeof obj.textContent=='string'){
	        //console.log("f/c/ie9-11")
	      obj.textContent=val;
	    }else{
	    	//alert("ie6-8/chorme")
	    	obj.innerText=val;
	    	
	    }
	}
    
}
