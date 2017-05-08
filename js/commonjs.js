$(document).ready(function(){
	mPageOpen(".myhref",'pages/mdetail.html','mdetail');
})


//detailpage页面打开方法
function mPageOpen(hrefStr,targetPath,targetID){
	$(hrefStr).on('tap',function(){
		mui.openWindow({
			url:targetPath,
			id:targetID,
			extras:{
				videoid:$(this).attr("mdata")
			}
		})
	})
}
