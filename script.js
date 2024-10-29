// Controlling CSS and Attributes from JS

// document.getElementById("some-id").style; //Accesses CSS rule for "some-id" element

// document.getElementById("android").style.border = "2px solid black";

// document.getElementById("some-image").src = "images/newpic.png";  // CHanges an image

// document.getElementById("some-a-tag").href = "https://Pokemon-go.com" // Changes the hyperlink

// Changeing an Image vs Adding a new image
// To add an image where there wasn't one before, you need a container for he image in HTML
// Containers are empty <p>, <h1>, <div> elements.
// for E.g. In html: ,div id="imf-container"></div>

// document.getElementById("img-container").innerHTML =
//   "<img src='images/pic.png'";

// Apple vs Android

document.getElementById("android").addEventListener("click", changeToAndorid);
function changeToAndorid() {
  // Change the 'Android vs Apple' image to the android image in the image folder

  document.getElementById("logo").src = "images/Android-Logo.jpg";

  document.getElementById("the-link").innerHTML = "Android Home";

  document.getElementById("the-link").style.background = "#a4c93b";

  document.getElementById("the-link").href = "http://www.android.com/";

  document.getElementById("the-html").style.background = "#a4c93b";

  document.getElementById("the-body").style.fontFamily = "'Roboto', sans-serif";

  document.getElementById("android").classList.add("redborder");

  document.getElementById("apple").classList.remove("redborder");
}

document.getElementById("apple").addEventListener("click", changeToApple);

function changeToApple() {
  document.getElementById("logo").src = "images/Apple-Logo.jpg";

  document.getElementById("the-link").innerHTML = "Apple Home";

  document.getElementById("the-link").style.background = "#b6bcca";

  document.getElementById("the-link").href = "https://www.apple.com/";

  document.getElementById("the-html").style.background = "#b6bcca";

  document.getElementById("the-body").style.fontFamily =
    "'Brygada 1918', serif";

  document.getElementById("apple").classList.add("redborder");
  document.getElementById("android").classList.remove("redborder");
}
