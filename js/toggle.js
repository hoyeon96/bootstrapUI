<<<<<<< HEAD
(function (window, document) {
  'use strict';

  const $toggles = document.querySelectorAll('.toggle'); // Return NodeList
  const $toggleBtn = document.getElementById('toggle-btn'); // Return Element
  
  $toggleBtn.addEventListener('click', function () {
    toggleElements();
  });

  // window.addEventListener('resize', function () {
  //   if (window.innerWidth > 768) {
  //     offElements();
  //   }
  // });

  function toggleElements() {
    [].forEach.call($toggles, function (toggle) {
      toggle.classList.toggle('on');
    });
  }

  // function offElements() {
  //   [].forEach.call($toggleBtn, function (toggleBtn) {
  //     toggle.classList.remove('on');
  //   });
  // }
=======
(function (window, document) {
  'use strict';

  const $toggles = document.querySelectorAll('.toggle'); // Return NodeList
  const $toggleBtn = document.getElementById('toggle-btn'); // Return Element
  
  $toggleBtn.addEventListener('click', function () {
    toggleElements();
  });

  // window.addEventListener('resize', function () {
  //   if (window.innerWidth > 768) {
  //     offElements();
  //   }
  // });

  function toggleElements() {
    [].forEach.call($toggles, function (toggle) {
      toggle.classList.toggle('on');
    });
  }

  // function offElements() {
  //   [].forEach.call($toggleBtn, function (toggleBtn) {
  //     toggle.classList.remove('on');
  //   });
  // }
>>>>>>> 7c3b6bb7abcb2684d269bb12fbe1ef020cdc1346
})(window, document);