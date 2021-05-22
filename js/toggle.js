// (function (window, document) {
//   'use strict';

//   const $toggles = document.querySelectorAll('.toggle-menu'); // Return NodeList
//   const $toggleBtn = document.getElementById('toggle-btn'); // Return Element

//   $toggleBtn.addEventListener('click', function () {
//     toggleElements();
//   });

//   function toggleElements() {
//     [].forEach.call($toggles, function (toggle) {
//       toggle.classList.toggle('on');
//     });



// })(window, document);



$(function(){
  $("#toggle-btn").click(function(){
     $("#toggle-menu").slideToggle();
  });
});


