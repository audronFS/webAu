// $(document).ready(function () {
//     jQuery('[id=carousel]').each(function (ind, obj) {
//         $(obj).click(function () {

//             $(obj).animate({
//                 width: '500px',
//                 height: "300px",
//             });

//         });
//         $("#aqui").click(function () {
//             $(obj).animate({ width: '80px', height: "100px" });
//         });

//     });
// });

// function allDisplay() {
//   document.getElementsByClassName("carousel-cell").style.display = "block";
// }

// function elecDisplay() {
//   document.getElementById("audiovisual").style.visibility = "none";
// }
// function audioDisplay() {
//     document.getElementById("electronic").style.visibility = "none";
//   }

$(document).ready(function () {
  if ($(window).width() < 992) {
    //   $("h1").css("font-size", "18px");
    //   $("h2").css("font-size", "16px");
    $("h3").css("font-size", "16px");
    // $("h4").css("font-size", "8px");
  }
});

$(document).ready(function () {
  $(".audiovisual").css("display", "none");
  $(".electronic").css("display", "none");
  $(".instrumental").css("display", "none");
  $(".orchestration").css("display", "none");
  $(".carousel-cell").css("background", "url(../../images/whitepattern.jpg)");

  $("#toggle").click(function () {
    $(".container2").css("margin-bottom", "40%");
  });

  $("#All").click(function () {
    $(".all").css("display", "block");
    $(".audiovisual").css("display", "none");
    $(".electronic").css("display", "none");
    $(".instrumental").css("display", "none");
    $(".orchestration").css("display", "none");
    // $(".carousel-cell").css("background", "url(../../images/whitepattern.jpg)");
    // $(".container2").css("margin-bottom", "25%");
  });
  $("#Electronic").click(function () {
    $(".all").css("display", "none");
    $(".audiovisual").css("display", "none");
    $(".electronic").css("display", "block");
    $(".instrumental").css("display", "none");
    $(".orchestration").css("display", "none");
    // $(".carousel-cell").css(
    //   "backgroundColor",
    //   "url(../../images/bluepattern-copy.png)"
    // );
  });
  $("#Audiovisual").click(function () {
    $(".all").css("display", "none");
    $(".audiovisual").css("display", "block");
    $(".electronic").css("display", "none");
    $(".instrumental").css("display", "none");
    $(".orchestration").css("display", "none");
    // $(".carousel-cell").css("background", "url(../../images/whitepattern.jpg)");
  });
  $("#Instrumental").click(function () {
    $(".all").css("display", "none");
    $(".audiovisual").css("display", "none");
    $(".electronic").css("display", "none");
    $(".instrumental").css("display", "block");
    $(".orchestration").css("display", "none");

    // $(".carousel-cell").css("background", "url(../../images/whitepattern.jpg)");
  });
  $("#Orchestration").click(function () {
    $(".all").css("display", "none");
    $(".audiovisual").css("display", "none");
    $(".electronic").css("display", "none");
    $(".instrumental").css("display", "none");
    $(".orchestration").css("display", "block");
    // $(".carousel-cell").css("background", "url(../../images/whitepattern.jpg)");
  });
});

// Crude way to check that the screen is at least 1024x768
// if ($(window).width() <= 1024) {
//     $(".composer").css("display", "none");
//   }

// function myFunction() {
//     var x = "Total Width: " + screen.width + "px";
//     document.getElementById("demo").innerHTML = x;
//   }

//   if ($(window).width() < 960) {
//     alert('Less than 960');
//  }
//  else {
//     alert('More than 960');
//  }
