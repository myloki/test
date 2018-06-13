;(function(){
	window.ajax=function(option){
		//将type的值默认设置为get
		option.type=option.type || 'get';
		
		//将dataType返回的数据类型默认设置为json
		option.dataType=option.dataType || 'json';
		
		
		//创建一个对象
		var ajax=new XMLHttpRequest();
		//请求方式
		ajax.open(option.type,option.url);
		//接收或传送数据
		//如果是post方式
		if(option.type=='post'){
			//需要一个请求头
			ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
			//接收或传送数据
			ajax.send(option.data);
		}else{
			ajax.send();
		}
		
		//监听状态
		ajax.onreadystatechange=function(){
			//读取完成的状态码是4
			//if(ajax.readyState==2 && ajax.status==200){
			if(ajax.readyState==4 && ajax.status==200){
				var data=ajax.responseText;
				
				//获取数据后将数据类型转为json
				if(option.dataType=='json'){
					data = JSON.parse(data);
				}
				
				//success:function(){
				//这儿是请求成功获得数据后调用success函数，
				option.success(data);
			}
		}
		
	}
})();
