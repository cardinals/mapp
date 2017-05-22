$(document).ready(function(){
	mPageOpen(".myhref",'pages/mdetail.html','mdetail');
	mPageOpen(".loginBtn",'pages/mlogin.html','mlogin');
	mPageOpen("#mgame",'pages/mgame.html','mgame');
	mPageOpen("#mdownload",'pages/mdownload.html','mdownload');
	mPageOpen("#mhistory",'pages/mhistory.html','mhistory');
	mPageOpen("#msearch",'pages/msearch.html','msearch');
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
