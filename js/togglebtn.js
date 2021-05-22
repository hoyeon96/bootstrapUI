(function (window, document) {
  'use strict';

  const $toggleBtn = document.getElementById('toggle-btn'); // Return Element
  const $toggles = document.querySelectorAll('.toggle'); // Return NodeList
  const $btnclick = document.querySelectorAll('.btnclick');


  $toggleBtn.addEventListener('mousedown', function () {
  toggleElements2();
  });



   $toggleBtn.addEventListener('click', function () {
  toggleElements2();
  });


  function toggleElements2() {
  [].forEach.call($btnclick, function (toggle) {
  	
  	if(!$('.btnclick').hasClass('clicked')){
	    toggle.classList.toggle('clicked');
  		}
  	
  });
}

  })(window, document);

$(document).click(function(e){ 
	if (!$(e.target).is('.toggle')) {
	 	$(".btnclick.clicked").classList.remove("clicked");
	 } 
	 //ex
	//   if (!$(e.target).is('#')) {
	//    $("#해당영역ID").css("display","none"); 
	// } 
});





// 태훈이 코드 //
  // $toggleBtn.addEventListener('click', function () {
  // toggleElements();
  // });

//   function toggleElements() {
//     [].forEach.call($toggles, function (toggle) {
//       toggle.classList.toggle('on');
//     });
// }