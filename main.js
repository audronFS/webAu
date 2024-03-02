var currentDirectory = window.location.pathname
  .split("/")
  .slice(0, -1)
  .join("/");

if (currentDirectory === "/views") {
  var header = "header.html";
  var footer = "footer.html";
  var color = "#000000";
} else {
  var header = "views/header.html";
  var footer = "views/footer.html";
}
fetch(header)
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("header").innerHTML = data;
    var myElement = document.querySelector("#change");
    myElement.style.backgroundColor = color;
  });

fetch(footer)
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("footer").innerHTML = data;
  });

// Google Tag Manager

// document.head.innerHTML =
//   document.head.innerHTML +
//   `<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//   new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//   j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//   'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//   })(window,document,'script','dataLayer','GTM-54NZPDS');</script>`;

// //<!-- Google Tag Manager (noscript) -->
// document.body.innerHTML =
//   document.body.innerHTML +
//   `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-54NZPDS"
// height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`;
