var currentDirectory = window.location.pathname
  .split("/")
  .slice(0, -1)
  .join("/");
// document.getElementById("demo").innerHTML = currentDirectory;

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
//hi
