function tab_reset(){
	$('#tab_phd').removeClass("active");
	$('#tab_master').removeClass("active");
	$('#tab_gra').removeClass("active");
	$('#stu_phd').css("display","none");
	$('#stu_master').css("display","none");
	$('#stu_gra').css("display","none");
}
function tab_phd_click(){
	tab_reset();
	$('#tab_phd').addClass("active");
	$('#stu_phd').css("display","flex");
}
function tab_master_click(){
	tab_reset();
	$('#tab_master').addClass("active");
	$('#stu_master').css("display","flex");
}
function tab_gra_click(){
	tab_reset();
	$('#tab_gra').addClass("active");
	$('#stu_gra').css("display","flex");
}
