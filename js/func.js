$(document).ready(function(){
    dropdownOpen();//调用
});
baguetteBox.run('.tz-gallery');
function dropdownOpen() {
	$(".dropdown").mouseover(function(){
		$(this).addClass("show").find(".dropdown-menu").addClass("show");
	});
	$(".dropdown").mouseout(function(){
		$(this).removeClass("show").find(".dropdown-menu").removeClass("show");
	});
	// $(".dropdown-menu").mouseout(function(){
	// 	$(this).removeClass("show").parent(".dropdown").removeClass("show");
	// });
}
$('#ShowImage_Form').on('shown.bs.modal', function (e) { 
	// 关键代码，如没将modal设置为 block，则$modala_dialog.height() 为零 
	$(this).css('display', 'block'); 
	var modalHeight=$(window).height() / 2 - $('#ShowImage_Form .modal-dialog').height() / 2; 
	$(this).find('.modal-dialog').css({ 
	  'margin-top': modalHeight 
	}); 
  });
function showimage(source)
{
	$("#ShowImage_Form").find("#img_show").html("<image class='form-sm-img'  src='"+source+"' />");
	$("#ShowImage_Form").modal();
}