window.onload = function(){

    // Headers start    
    var deskLeftMenu = document.querySelectorAll(".nav_left > ul > li");
    var rightMenu = document.querySelectorAll(".other_site, .members");

    for (var i = 0; i < rightMenu.length; i++) {
        rightMenu[i].addEventListener("mouseenter", hoverOpen);
        rightMenu[i].addEventListener("mouseleave", hoverClose);
    }

    for (var i = 0; i < deskLeftMenu.length; i++) {
        deskLeftMenu[i].addEventListener("mouseenter", hoverOpen);
        deskLeftMenu[i].addEventListener("mouseleave", hoverClose);
    }

    //Desktop 
    function hoverOpen (e) {
        e.preventDefault();
        this.classList.add("active");
        var triangle = this.querySelector("SVG");     
        if (triangle) {
            triangle.style.transform = "rotate(90deg)";
            triangle.style.transformOrigin = "center";
        }   
    }
    function hoverClose (e) {
        e.preventDefault();
        this.classList.remove("active");
        var triangle = this.querySelector("SVG");
        if (triangle) {
            triangle.style.transform = "";
            triangle.style.transformOrigin = "";
        }

    }

    
    var hamburgerMenu = document.querySelector(".hamburger");
    hamburgerMenu.addEventListener("click", hamburgerWork);
    function hamburgerWork (e) {
        e.preventDefault();
        if (this.parentNode.classList.contains("active")) {
            this.parentNode.classList.remove("active");
        } else {
            this.parentNode.classList.add("active");
        }  
    }
    // Headers end

    // add_banner
    $('.slide').bxSlider({
        auto:false, 
        adaptiveHeight:true  
    });
}
