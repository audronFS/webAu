$(document).on("click", '[data-toggle="lightbox"]', function (event) {
  event.preventDefault();
  $(this).ekkoLightbox({ showArrows: false });
});
// $(this).ekkolightbox({
//   loadingMessage: "Loading…",
//   showArrows: true,
//   leftArrow: "<<<",
//   rightArrow: ">>>",
// });
