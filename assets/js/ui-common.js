/* ---------------------------------
  navigation
--------------------------------- */

var pagelink = 0;

$(window).on("load resize", function () {
  if (!window.matchMedia("(max-width:750px)").matches) {
    //PC表示の設定
    pagelink = 80;
  } else {
    //スマホ表示の設定
    pagelink = 40;
  }
});

$(function () {
  //URLのハッシュ値を取得
  var urlHash = location.hash;
  //ハッシュ値があればページ内スクロール
  if (urlHash) {
    //スクロールを0に戻す
    $("body,html").stop().scrollTop(0);
    setTimeout(function () {
      //ロード時の処理を待ち、時間差でスクロール実行
      scrollToAnker(urlHash);
    }, 400);
  }

  //通常のクリック時
  $('a[href^="#"].scroll').click(function () {
    //ページ内リンク先を取得
    var href = $(this).attr("href");
    //リンク先が#か空だったらhtmlに
    var hash = href == "#" || href == "" ? "html" : href;
    //スクロール実行
    scrollToAnker(hash);
    //リンク無効化
    return false;
  });

  // 関数：スムーススクロール
  // 指定したアンカー(#ID)へアニメーションでスクロール
  function scrollToAnker(hash) {
    var target = $(hash);
    var position = target.offset().top;
    $("body,html")
      .stop()
      .animate({ scrollTop: position - pagelink }, 600);
  }
});


/* ---------------------------------
  読み込み js-loader
--------------------------------- */

$(window).on('load', function () {
  $('#js-loader').fadeOut(500)
});




/* ---------------------------------
 375px未満はviewport固定
--------------------------------- */
!(function () {
 const viewport = document.querySelector('meta[name="viewport"]');
 function switchViewport() {
   const value =
     window.outerWidth > 375
       ? 'width=device-width,initial-scale=1'
       : 'width=375';
   if (viewport.getAttribute('content') !== value) {
     viewport.setAttribute('content', value);
   }
 }
 addEventListener('resize', switchViewport, false);
 switchViewport();
})();


/* ---------------------------------
  メニュー開閉関数
--------------------------------- */

function menuIn() {
	$('.menu-trigger').addClass('active');
	$('.navInner').addClass('active');
  $('#menu').fadeIn(200);
  $('body').addClass('scroll_fixed');
}
function menuOut() {
	$('.menu-trigger').removeClass('active');
	$('.navInner').removeClass('active');
	$('#menu').fadeOut(300);
  $('body').removeClass('scroll_fixed');
}

$(window).on('load', function () {

	$(".navInner").on('click.menuopen',function(){
		if($(this).children().hasClass('active')){
			menuOut();
		} else {
			menuIn();
		}
	});

  $('#menu a').on('click', function(){
    $('.menu-trigger').removeClass('active');
    $('.navInner').removeClass('active');
		$('#menu').fadeOut(300);
    $('body').removeClass('scroll_fixed');
  });

});


/* ---------------------------------
  スクロールして表示領域に入ったらclass付与
--------------------------------- */

// 1回のみ
$(function () {
  $(".js-fadeUp").on("inview", function () {
    $(this).addClass("is-inview");
  });
  $(".js-fadeIn").on("inview", function () {
    $(this).addClass("is-inview");
  });
});

// $(function(){
//   $(".js-fadeUp").on("inview", function (event, isInView) {
//     if (isInView) {
//       $(this).stop().addClass("is-inview");
//     } else {
//       $(this).stop().removeClass("is-inview");
//     }
//   });

//   $(".js-fadeIn").on("inview", function (event, isInView) {
//     if (isInView) {
//       $(this).stop().addClass("is-inview");
//     } else {
//       $(this).stop().removeClass("is-inview");
//     }
//   });

// });


/* --------------------------------------
  一定量スクロール後 ボタン表示
-------------------------------------- */

$(function() {
    var fixedBtn = $('#fixed-contact');
    fixedBtn.hide();
    //ボタン表示位置
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            fixedBtn.fadeIn();
        } else {
            fixedBtn.fadeOut();
        }
    });
});