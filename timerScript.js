
  var data1,data2,data3;
  var flag=0;
  $("#target5").html($("#target3").html());
  $("#target6").html($("#target4").html());
  $('.eee').click(function(){
   var value1,value2,value3,value4;
   value1=+$("#target1").html();
   value2=+$("#target2").html();
   value3=+$("#target3").html();
   value4=+$("#target4").html();
   switch($(this).val()){
     case '-1':if(value1>0) if(value1<11)$("#target1").html('0'+(value1-1)); else $("#target1").html(value1-1);
	 break;
	 case '+1':if(value1<9)$("#target1").html('0'+(value1+1)); else $("#target1").html(value1+1);
	 break;
	 case '-2':if(value2>0) if(value2<11)$("#target2").html('0'+(value2-1)); else $("#target2").html(value2-1);
	 break;
	 case '+2':if(value2<9)$("#target2").html('0'+(value2+1)); else $("#target2").html(value2+1);
	 break;
	 case '-3':if(value3>0) if(value3<11)$("#target3").html('0'+(value3-1)); else $("#target3").html(value3-1);
	 break;
	 case '+3':if(value3<9)$("#target3").html('0'+(value3+1)); else $("#target3").html(value3+1);
	 break;
	 case '-4':if(value4>0) if(value4<11)$("#target4").html('0'+(value4-1)); else $("#target4").html(value4-1);
	 break;
	 case '+4':if(value4<9)$("#target4").html('0'+(value4+1)); else $("#target4").html(value4+1);
	 break;
   }
   $("#target5").html($("#target3").html());
   $("#target6").html($("#target4").html());
  });
  
  
  $("#pognali").click(function(){
   data1=+$("#target5").html();
   data2=+$("#target6").html();
   data3=100/(data1*60+data2);
   var timerId=setTimeout(function qqq(){
    $("#stop").click(function(){
     clearTimeout(timerId);
    });
    if(data2===0){
	 data2=59;
	 data1-=1;
	}
	else{
	 data2--;
	}
	if(data1<9)$("#target5").html('0'+data1); else $("#target5").html(data1);
    if(data2<9)$("#target6").html('0'+data2); else $("#target6").html(data2);
	$("#krug2").height($("#krug2").height()+10);
	if(data1==0&&data2==0){
	
	 if(flag==0){
	  $("#target5").html($("#target1").html());
      $("#target6").html($("#target2").html());
      data1=+$("#target5").html();
      data2=+$("#target6").html();
	  flag=1
	 }
	 else{
	  $("#target5").html($("#target3").html());
      $("#target6").html($("#target4").html());
      data1=+$("#target5").html();
      data2=+$("#target6").html();
	  flag=0;
	 }
	}
	timerId=setTimeout(qqq,1000);
   }, 1000);
  });