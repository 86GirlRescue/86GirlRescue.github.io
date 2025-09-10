var imagePath = "https://page.nmb.baby/images";
// var imagePath = "https://cdn.jsdelivr.net/gh/86GirlRescue/86GirlRescue.github.io/images";

window.onload = function() {
    var container = document.getElementsByTagName("div")[0].getElementsByTagName("div")[0];
    for (var i = 0; i < images.length; ++i) {
        var img = new Image();
        img.src = imagePath + "/" + images[i];
        container.appendChild(img);
    }
	var link = document.createElement("a");
	link.href = "https://page.nmb.baby/contact.html";
	link.style["width"] = "100%";
	link.style["display"] = "block";
	link.style["box-sizing"] = "border-box";
	link.style["padding"] = "1em";
	link.style["background"] = "#f73131";
	link.style["color"] = "#ffffff";
	link.style["position"] = "fixed";
	link.style["left"] = "0";
	link.style["bottom"] = "0";
	link.style["text-align"] = "center";
	link.style["font-size"] = "1.1em";
	link.innerHTML = "获取联系方式";
	document.body.appendChild(link);
};