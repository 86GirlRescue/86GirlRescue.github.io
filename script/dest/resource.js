var imagePath = "https://86girlrescue.github.io/images";

window.onload = function() {
    var container = document.getElementsByTagName("div")[0].getElementsByTagName("div")[0];
    for (var i = 0; i < images.length; ++i) {
        var img = new Image();
        img.src = imagePath + "/" + images[i];
        container.appendChild(img);
    }
};