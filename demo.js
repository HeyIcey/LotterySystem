var data=['IPhone 7', 'ThinkPad T450', '欧洲豪华10日游', '500元现金大奖', 'Mac笔记本', '65寸液晶电视', '云南10日游', '奔驰Smart'];
var timer = null;
var flag = 0;
window.onload = function () {
		var play = document.getElementById('play'),
			stop = document.getElementById('stop');
		//鼠标事件 
		play.onclick = playFun;
		stop.onclick = stopFun;
		// 键盘事件
		document.onkeyup = function(event){
			if (event.keyCode == 13) {
				if (flag == 0) {
					playFun();
					flag = 1;
				}else{
					stopFun();
					flag = 0;
				}
			}
		};
}
function playFun(event) {
	var title = document.getElementById('title');
	var play = document.getElementById('play');
	clearInterval(timer);
	timer = setInterval(function () {
		var random = Math.floor(Math.random()*data.length);
		title.innerHTML = data[random];
	},50);
	play.style.background='grey';
}
function stopFun(){
	var play = document.getElementById('play');
	clearInterval(timer);
	play.style.background='#00bfff';

}