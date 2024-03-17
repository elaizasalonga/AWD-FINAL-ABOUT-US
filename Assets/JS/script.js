    var image = new Image();
  image.src = "R.png";
  image.onload = function() {
    var aspectRatio = image.width / image.height;
    var viewportWidth = window.innerWidth;
    var viewportHeight = window.innerHeight;
    if (viewportWidth / viewportHeight > aspectRatio) {
      document.body.style.height = viewportWidth / aspectRatio + "px";
    } else {
      document.body.style.width = viewportHeight * aspectRatio + "px";
    }
  }
