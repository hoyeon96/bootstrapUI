(function (window, document) {
  'use strict';

  const $toggleBtn = document.getElementById('toggle-btn'); // Return Element
  const $toggles = document.querySelectorAll('.toggle'); // Return NodeList
  const $btnclick = document.querySelectorAll('.btnclick');


// 태훈이 코드 //
  // $toggleBtn.addEventListener('click', function () {
  // toggleElements();
  // });

//   function toggleElements() {
//     [].forEach.call($toggles, function (toggle) {
//       toggle.classList.toggle('on');
//     });
// }


  $toggleBtn.addEventListener('click', function () {
  toggleElements2();
  });

  function toggleElements2() {
  [].forEach.call($btnclick, function (toggle) {
    toggle.classList.toggle('clicked');
    toggle.classList.toggle('visible');
  });
}

  })(window, document);


