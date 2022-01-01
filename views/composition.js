// // external js: flickity.pkgd.js

// var utils = window.fizzyUIUtils;

// var carousel = document.querySelector(".carousel");
// var flkty = new Flickity(carousel, {
//   prevNextButtons: false,
//   pageDots: false,
//   wrapAround: true,
//   //   autoPlay: 3000,
//   lazyLoad: true,
// });
// // elements
// var cellsButtonGroup = document.querySelector(".button-group--cells");
// var cellsButtons = utils.makeArray(cellsButtonGroup.children);

// // cell select
// cellsButtonGroup.addEventListener("click", function (event) {
//   if (!matchesSelector(event.target, ".button")) {
//     return;
//   }
//   var value = 0;
//   var index = cellsButtons.indexOf(event.target);
//   switch (index) {
//     case 1:
//       value = 2;
//       break;
//     case 2:
//       value = 4;
//       break;
//     case 3:
//       value = 5;
//       break;
//     case 4:
//       value = 0;
//       break;
//   }
//   flkty.select(value);
// });
// // previous
// var previousButton = document.querySelector(".button--previous");
// previousButton.addEventListener("click", function () {
//   flkty.previous();
// });
// // next
// var nextButton = document.querySelector(".button--next");
// nextButton.addEventListener("click", function () {
//   flkty.next();
// });
