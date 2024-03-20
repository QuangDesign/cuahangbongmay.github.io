//code dung de chuyen doi
document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector('.buger-menu');
  const navbar = document.querySelector('.navbar');

  burgerMenu.addEventListener('click', function () {
    navbar.classList.toggle('active');
    burgerMenu.classList.toggle('active');
  });
});

//hieu ung khi scroll den phan tu do se chuyen tu trai sang 
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".sideslip");

  function checkPosition() {
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      let position = item.getBoundingClientRect().top;
      let screenHeight = window.innerHeight;

      if (position < screenHeight * 0.75) {
        item.classList.add("show");
      } else {
        item.classList.remove("show");
      }
    }
  }

  window.addEventListener("scroll", checkPosition);
});

//owl-carousel
function initOwlCarousel() {
  let windowWidth = $(window).width();
  let featuresDiv = $('#sanPham');

  if (windowWidth < 991 && !featuresDiv.hasClass('owl-carousel')) {
      featuresDiv.addClass('owl-carousel');
      featuresDiv.owlCarousel({
          loop: true,
          nav: false,
          margin: 20,
          autoplay: true, 
          autoplayTimeout: 3000, 
          responsive: {
            360: {
              items: 1,
            },
            520: {
              items: 2,
            },
            850: {
              items: 3,
            },
          }
      })
  } else if (windowWidth >= 991 && featuresDiv.hasClass('owl-carousel')) {
      featuresDiv.removeClass('owl-carousel');
      featuresDiv.trigger('destroy.owl.carousel');
      featuresDiv.find('.owl-stage-outer').children().unwrap();
  }
}

$(document).ready(function () {
  initOwlCarousel();
});

$(window).resize(function () {
  initOwlCarousel();
});

$(document).ready(function () {
  $("#noiBat").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true, 
    autoplayTimeout: 3000, 
    
    responsive: {
      0: {
        items: 1,
      },
      799: {
        items: 2,
      },
      1280: {
        items: 4,
      },
    },
  });
});

//hien thi so luong san pham bang alert

$(document).ready(function() {
  $('.plus-btn').click(function() {
    var input = $(this).parent().find('.quantity-input');
    var value = parseInt(input.val());
    input.val(value + 1);
  });

  $('.minus-btn').click(function() {
    var input = $(this).parent().find('.quantity-input');
    var value = parseInt(input.val());
    if (value > 1) {
      input.val(value - 1);
    }
  });

  $('.btn-buy').click(function() {
    var quantity = parseInt($(this).parent().find('.quantity-input').val());
    alert('Bạn đã mua ' + quantity + ' sản phẩm.');
  });
});