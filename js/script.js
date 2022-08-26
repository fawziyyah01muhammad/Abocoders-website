
 $('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        1000:{
            items:2,
            nav:true,
            loop:false
        }
    }
})


var checkmenu = document.getElementById("checkmenu")  
	function showMenu(){
		checkmenu.style.right = "0px";
	}
	function hideMenu(){
		checkmenu.style.right = "-200px";
	}
