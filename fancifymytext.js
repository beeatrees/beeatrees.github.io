alert("Hello, world!");

document.getElementById("button").style.propertyName = "text area";

function resizeText(multiplier) {
    if (document.body.style.fontSize == "") {
      document.body.style.fontSize = "4.0em";
    }
    document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (multiplier * 0.2) + "em";
  }

