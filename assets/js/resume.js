function showHide(bullet) {
    var bulletId = document.getElementById(bullet);
        if (bulletId.style.display !== "none") {
            bulletId.style.display = "none";
        } else {
            bulletId.style.display = "block";
        }
    }
