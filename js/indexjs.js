//初始化
$(document).ready(function(){
	//定义content的滚动高度
	var temp=window.innerHeight-60;
	$(".Common-ContHeight").css('min-height',temp+'px');
	
	//轮播图的自动时间设置
	var mSlider=mui("#mslider");
	mSlider.slider({
		interval: 5000
	});
	//侧滑容器父节点
	var offCanvasWrapper = mui('#offCanvasWrapper');
	document.getElementById('userPic').addEventListener('tap', function() {
		offCanvasWrapper.offCanvas('show');
	});
})