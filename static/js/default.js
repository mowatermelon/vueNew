function aa(){
  //console.log( bindHeight().height);
  if(document.getElementById("fun_new")){
    document.getElementById("fun_new").style.height= bindHeight().height + "px";
  }
  if(document.getElementById("fun_mood")){
    document.getElementById("fun_mood").style.height= bindHeight().height + "px";
  }
  if(document.getElementById("fun_setting")){
    document.getElementById("fun_setting").style.height= bindHeight().height + "px";
  }
  if(document.getElementById("fun_pic")){
    document.getElementById("fun_pic").style.height= bindHeight().height + "px";
  }
  //console.log(document.getElementById("showN").style.height);
  if(document.getElementById("showN")){
    document.getElementById("showN").style.height= bindHeight().height - 105 + "px";
  }

  if(document.getElementById("foot")){
      if(document.getElementsByTagName("showN").length>0){
        document.getElementById("foot").style.bottom=0;
      }else{
        document.getElementById("foot").style.top= bindHeight().height - 50 + "px";
      }
  }

  if(document.getElementsByTagName("input")){
    /*var myinput = document.getElementsByTagName("input");
    myinput.forEach(function(index,data){

      addListener(myinput[index],"click",function(){
          document.getElementById("foot").style.display="none";
      });
      addListener(myinput[index],"click",function(){
          document.getElementById("foot").style.display="block";
      });
    })*/
  }

}
//绑定屏幕高度
function  bindHeight(){

  var winWidth,winHeight;
  var p={"width":"","height":""};
    // 获取窗口宽度
  if (window.innerWidth)
  winWidth = window.innerWidth;
  else if ((document.body) && (document.body.clientWidth))
  winWidth = document.body.clientWidth;
  // 获取窗口高度
  if (window.innerHeight)
  winHeight = window.innerHeight;
  else if ((document.body) && (document.body.clientHeight))
  winHeight = document.body.clientHeight;
  // 通过深入 Document 内部对 body 进行检测，获取窗口大小
  if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth)
  {
  winHeight = document.documentElement.clientHeight;
  winWidth = document.documentElement.clientWidth;
  }
  p.width=winWidth;
  p.height=winHeight;
  return p;
}
//js绑定监听事件
function addListener(element,e,fn){
        if(typeof window.addEventListener != "undefined"){
             element.addEventListener(e,fn,false);
        }else{
            element.attachEvent("on" + e,fn);
        }
}


//页面地址跳转
function goUrl(url) {
  //alert(item.newId);
  window.location.href = url;
}

export default {
  name: 'defaultjs'
};
