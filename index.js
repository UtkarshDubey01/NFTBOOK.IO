// first slider
$('.slider-part').slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,

  responsive: [
    {
      breakpoint: 1068,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: true,
      }
    },
    {
      breakpoint: 790,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      }
    },
  ]


});

// second slider
$('.trending-slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,

  responsive: [
    {
      breakpoint: 1086,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        arrows: false,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      }
    },

  ]
});

// third slider
$('.auction-slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,

  responsive: [
    {
      breakpoint: 1068,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
      }
    },

    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
      }
    },
  ]

});

// fourth slider
$('#topUserSlider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1068,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      }
    },

  ]
});


// -----tabs-----------
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active-tab");
    current[0].className = current[0].className.replace(" active-tab", "");
    this.className += " active-tab";
  });
};


var headerTop = document.getElementById("firstTabTop");
var btnsTop = headerTop.getElementsByClassName("sellbuye-tab");
for (var i = 0; i < btnsTop.length; i++) {
  btnsTop[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active-top-tab");
    current[0].className = current[0].className.replace(" active-top-tab", "");
    this.className += " active-top-tab";
  });
};


var headerTop2 = document.getElementById("secondTabTop");
var btnsTop2 = headerTop2.getElementsByClassName("sellbuye-tab2");
for (var i = 0; i < btnsTop2.length; i++) {
  btnsTop2[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active-top-tab2");
    current[0].className = current[0].className.replace(" active-top-tab2", "");
    this.className += " active-top-tab2";
  });
};

// ---dropdowns----------
//  Youtube dropdown
const targetDiv = document.querySelector('.youtube-dropdown-user')
const btn = document.querySelector('.youtube-dropdown')
btn.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  }
};

//   Tiktok Dropdown
const targetDivtwo = document.querySelector('.tiktok-dropdown-user')
const btntwo = document.querySelector('.tiktok-dropdown')
btntwo.onclick = function () {
  if (targetDivtwo.style.display !== "none") {
    targetDivtwo.style.display = "none";
  } else {
    targetDivtwo.style.display = "block";
  }
};

//-----border dropdown------
var dropMain = document.getElementById("dropdownID");
var DropData = dropMain.getElementsByClassName("dropdown-here");
for (var i = 0; i < DropData.length; i++) {
  DropData[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active-dropdown");
    current[0].className = current[0].className.replace("active-dropdown", "");
    this.className += "active-dropdown";
  });
};

// -----header open close
$(document).ready(function () {
  $(".menu-open-icon").click(function () {
    $(this).toggleClass("add-script");
  });
});


// --------Load More Function--------------
function LoadMore() {
  var btnload = document.querySelector(".explore-load-btn")
  var loadmore = document.getElementById("loadmore-section");
  loadmore.classList.add("load-more-section-block");
  btnload.style.display = "none"
}


// --------------filter--------
const filter = document.querySelector('.filter-main-div')
const filterbtn = document.querySelector('.filter-btn')
filterbtn.onclick = function () {
  if (filter.style.display !== "none") {
    filter.style.display = "none";
  } else {
    filter.style.display = "flex";
  }
};