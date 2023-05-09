
history.scrollRestoration = "manual";
//새로고침 시 항상 top:0 위치로 이동된다.

// history.scrollRestoration = "auto";
//현재 위치를 기억하여 새로고침시 그자리를 유지한다.

// 문서 전체 높이값 구하는 공식
var bodyH = document.body, /* 전체 body */
htmlH = document.documentElement; /* 전체 html */

var height = Math.max( bodyH.scrollHeight, bodyH.offsetHeight, 
                     htmlH.clientHeight, htmlH.scrollHeight, htmlH.offsetHeight );
// css에 넣기 좋게 px 붙이기
height= height + "px";

let bar=document.querySelectorAll(".bar");
function selfIntroduce(e){
    // 자기소개 게이지 애니메이션
    if(page==2){
      $(bar).each(function(e, i){
        let barGauge=i.getAttribute("data-bar");
        // console.log(barGauge);
        i.innerHTML=barGauge + "%";
        i.style.width=barGauge + "%";
        });
    }else{
      $(bar).each(function(e, i){
        i.innerHTML="";
        i.style.width= 0 + "%";
        });
    }
};
let pg=document.querySelectorAll(".pg");
let navLink=document.querySelectorAll(".nav_link"); 
$(navLink).eq(0).css({textShadow:"0 0 10px #fff"});
$(navLink).eq(0).css({color:"#fff"});

let logoImg=document.querySelector(".logo"); 
function pagenationColor (i) {
  if(page<3){
    $(navLink).css({textShadow:"none"});
    $(navLink).css({color:"#646464"});
    $(navLink).eq(i).css({textShadow:"0 0 10px #fff"});
    $(navLink).eq(i).css({color:"#fff"});
  }else if(page<pg.length){
    $(navLink).css({textShadow:"none"});
    $(navLink).css({color:"#646464"});
    $(navLink).eq(2).css({textShadow:"0 0 10px #fff"});
    $(navLink).eq(2).css({color:"#fff"});
  }else if(page==pg.length){
  $(navLink).css({textShadow:"none"});
  $(navLink).css({color:"#646464"});
  $(navLink).eq(3).css({textShadow:"0 0 10px #fff"});
  $(navLink).eq(3).css({color:"#fff"});
  }
  if(page==1){$(logoImg).css({display:"block"});}
  else{$(logoImg).css({display:"none"});}
  pg[0].addEventListener("click", function(e){
    e.preventDefault();
    $(navLink).css({textShadow:"none"});
    $(navLink).css({color:"#646464"});
    $(navLink).eq(0).css({textShadow:"0 0 10px #fff"});
    $(navLink).eq(0).css({color:"#fff"});
    $(logoImg).css({display:"block"});
  })
  pg[1].addEventListener("click", function(e){
    e.preventDefault();
    $(navLink).css({textShadow:"none"});
    $(navLink).css({color:"#646464"});
    $(navLink).eq(1).css({textShadow:"0 0 10px #fff"});
    $(navLink).eq(1).css({color:"#fff"});
    $(logoImg).css({display:"none"});
  })
  $(pg).css({background:"#646464"});
  $(pg).eq(i).css({background:"#fff"});
           // 스크롤 시 상단 네비게이션 색상변화
}

  // Y position 이 0이 아닐 경우를 대비
  var mHtml = $("html");
  var page = 1;
  mHtml.stop().animate({scrollTop : 0},10);

//스크롤 휠 한번에 1칸
$(".pg:first").stop().css({background:"#fff"});

function wheelEvent(e){/* 껏다켰다 하기위해서 이벤트등록 */
  e.stopPropagation();
  if(mHtml.is(":animated")) return; // 휠 애니메이션 중복적용방지 한번에 1칸씩
  /* object.is(1,2)는 보통 1과2가 같은지 뭍는 메서드 */
  /* return명령어 도달하면 값을 반환하고 함수실행 중단 */
  if(e.originalEvent.deltaY > 0){ // 스크롤 내릴때
    /* deltaY 세로 스크롤방향 올릴때는 +1 내릴때는 -1 (읽기전용속성) */
    /* originalEvent JQuery가 감싸지 않은 오리지널 이벤트 */
      if(page == con.length) return;  /* page가 .con수일때(끝까지옴) 리턴 */
      page++;
  } else if(e.originalEvent.deltaY < 0){ // 스크롤 올릴때
      if(page == 1) return; /* page가 1일때(첫페이지일때) 리턴 */
      page--;
  } /* $(window).height()는 윈도우 viewport 높이 */
  var posTop =(page-1) * $(window).height(); /* posTop은 con높이*(page-1) */
  mHtml.stop().animate({'scrollTop' : posTop});
  console.log(page);
  console.log($(window).height());
  // 자기소개 게이지 애니메이션
  selfIntroduce();
  // 페이지네이션 페이지스크롤시 페이지버튼 색변경
  let i=page-1;
  $(pg).css({background:"#646464"});
  $(pg).eq(i).css({background:"#fff"});
  // 스크롤 시 상단 네비게이션 색상변화
  if(page<3){
    $(navLink).css({textShadow:"none"});
    $(navLink).css({color:"#646464"});
    $(navLink).eq(i).css({textShadow:"0 0 10px #fff"});
    $(navLink).eq(i).css({color:"#fff"});
  }else if(page<pg.length){
    $(navLink).css({textShadow:"none"});
    $(navLink).css({color:"#646464"});
    $(navLink).eq(2).css({textShadow:"0 0 10px #fff"});
    $(navLink).eq(2).css({color:"#fff"});
  }else if(page==pg.length){
  $(navLink).css({textShadow:"none"});
  $(navLink).css({color:"#646464"});
  $(navLink).eq(3).css({textShadow:"0 0 10px #fff"});
  $(navLink).eq(3).css({color:"#fff"});}
  if(page==1){$(logoImg).css({display:"block"});}
  else{$(logoImg).css({display:"none"});}

};
 //껏다켰다 하기위해서 이벤트등록
$(window).on("wheel", wheelEvent);



let con=document.querySelectorAll(".con"); 
let mlist=document.querySelectorAll(".m_list");  


// 페이지네이션 클릭 시 해당 위치로 이동 page값도 변경
for(let i=0;i<pg.length;i++){
  pg[i].addEventListener("click", function(e){
    e.preventDefault();
    $(".pg").css("background", "#646464");
    this.style.background="#fff";
    let targetY=this.getAttribute("href");
    let tarpos=document.querySelector(targetY).offsetTop;
    window.scrollTo({top:tarpos, behavior:"smooth"});
    page=i+1;
    console.log(page);
    // 페이지네이션 클릭 시 상단 네비게이션 색상변화
    pagenationColor();
    selfIntroduce();

  });
};
// 페이지네이션 자기소개 누를시 이동
pg[1].addEventListener("click", selfIntroduce);

// 상단 네비게이션 페이지이동
for(let i=0;i<navLink.length;i++){
  navLink[i].addEventListener("click", function(e){
      e.preventDefault();
      $(navLink).css({textShadow:"none"});
      $(navLink).css({color:"#646464"});
      $(this).css({color:"#fff"});
      $(this).css({textShadow:"0 0 10px #fff"});
      let targetY=this.getAttribute("href");
      let tarpos=document.querySelector(targetY).offsetTop;
      window.scrollTo({top:tarpos, behavior:"smooth"});
      page=i+1; // 페이지 한섹션씩 이동하는데 점프하면 페이지값이 변하지않아 생기는 혼동방지
      if(i==0){$(logoImg).css({display:"block"});}
      else{$(logoImg).css({display:"none"});}
    // 네비게이션 클릭에 따라 페이지네이션 색상변화 설정 
      if(page==navLink.length){ /* 마지막 DESIGN 을 눌렀을때 */
        $(pg).css({background:"#646464"});
        $(pg).last().css({background:"#fff"});
        page=pg.length; /* page값이 navLink.length 값이 되어서 변환 */
      }else{ /* 나머지 */
        $(pg).css({background:"#646464"});
        $(pg).eq(i).css({background:"#fff"});
      }
  });
};
navLink[1].addEventListener("click", selfIntroduce);

let dropArrow=document.querySelector(".drop_arrow");
let floatArrow=document.querySelector(".float_arrow");
// 비쥬얼 화살표 페이지이동
dropArrow.addEventListener("click", function(e){
  e.preventDefault();
  let targetY=document.querySelector(".drop_arrow>a").getAttribute("href");
  let tarpos=document.querySelector(targetY).offsetTop; 
  window.scrollTo({top:tarpos, behavior:"smooth"});
  page=2; // 페이지 한섹션씩 이동하는데 점프하면 페이지값이 변하지않아 생기는 혼동방지
  selfIntroduce();
  $(logoImg).css({display:"none"});
  let i=page-1;
       pagenationColor(i);
});
//마지막 화살표 페이지이동
floatArrow.addEventListener("click", function(e){
  e.preventDefault();
  let targetY=document.querySelector(".float_arrow>a").getAttribute("href");
  let tarpos=document.querySelector(targetY).offsetTop;
  window.scrollTo({top:tarpos, behavior:"smooth"});
  page=1; // 페이지 한섹션씩 이동하는데 점프하면 페이지값이 변하지않아 생기는 혼동방지
  $(logoImg).css({display:"block"});
  let i=page-1;
       pagenationColor(i);
});

// 포트폴리오 애니메이션 효과 배경튀어나오는 효과 포트폴리오 나타나는 효과
window.addEventListener("scroll", function(){
  $(".con").removeClass("show");
  $(".con").children(".m_list").removeClass("appear");
  for(let i=3;i<=pg.length;i++){
  if(page==i){$("#con"+i).addClass("show");
              $("#con"+i).children(".m_list").addClass("appear");}
}});              /* 꼭 ""안에 변수가 들어갈 필요없음 */


  //움직이는 자기소개 이미지
  var docStyle = document.documentElement.style; /* documentElement -전체웹문서- */
  let img=document.querySelector("#employee");
  let con2=document.querySelector("#con2");
  var scy=window.scrollY;

  document.addEventListener('mousemove', function(e) {
    let mouseX=e.clientX - con2.offsetWidth/2; /* con2 가로중앙 */
    let mouseY=e.clientY - con2.offsetHeight/2; /* con2 세로중앙 */

    console.log(scy);
    docStyle.setProperty('--mouse-x', mouseX); /* con2 내부 마우스 가로위치 */
    docStyle.setProperty('--mouse-y', mouseY); /* con2 내부 마우스 세로위치 */
  });     /* Setproperty(속성명, 새 속성값) 속성명을 우측 새 속성값으로 변경 */


  // 키보드 방향키 누를시 이벤트
window.addEventListener("keydown", function(event){
  // console.log(event.keycode);
  console.log(event.key);
  mHtml.stop().animate({scrollTop : posTop});
  if((event.key=="ArrowDown")||(event.key=="PageDown")){
    if(page == con.length) return; /* .con.length보다 커지려할때 반환 */
    page++; /* 페이지 내릴때 */
    var posTop =(page-1) * $(window).height();
    mHtml.stop().animate({scrollTop : posTop});
    // 페이지네이션 페이지스크롤시 페이지버튼 색변경
    let i=page-1;
    // 스크롤 시 상단 네비게이션 색상변화
    pagenationColor(i);
    selfIntroduce();
  }
  if((event.key=="ArrowUp")||(event.key=="PageUp")){
    if(page == 1) return; /* 1보다 낮아지려핼때 반환 */
    page--; /* 페이지 올릴때 */
    var posTop =(page-1) * $(window).height();
    mHtml.stop().animate({scrollTop : posTop});
    // 페이지네이션 페이지스크롤시 페이지버튼 색변경
    let i=page-1;
    pagenationColor(i);
    selfIntroduce();
  }
});

  // design 이미지 hover 시 배경화면 변화
  var dsImg=document.querySelectorAll(".d_c");
  let dsBg=document.querySelector(".designthum");

$(dsImg).mouseenter(function () {
  if(page!=pg.length){
    $(dsBg).stop().css({'display': 'none'}, 500);
    $(dsImg).stop().css({'filter': 'brightness(1)'}, 500);}
    $(dsBg).stop().css({'display': 'block'}, 500);
    $(dsImg).stop().css({'filter': 'brightness(.4)'}, 500);
    $(this).stop().css({'filter': 'brightness(1)'}, 500);
})
$(dsImg).mouseleave(function () {
  $(dsBg).stop().css({'display': 'none'}, 500);
  $(dsImg).stop().css({'filter': 'brightness(1)'}, 500);
})

let btn=document.querySelectorAll(".vali");
let pop=document.querySelectorAll(".pop");
let popClose=document.querySelectorAll(".pop_inner>button");
let popOverlay=document.querySelectorAll(".pop_overlay");
for(let i=0;i<4;i++){
  $(btn).eq(i).click(function(r){
    r.preventDefault();
    i=i+1;
    $(pop).removeClass("on");
    $("#pop"+i).addClass("on");
    $('body').addClass('hidden'); /* 스크롤 움직임 막기 */
    $(window).off('wheel'); /* 휠이벤트 끄기 */
    i=i-1;
  });
}
  $(popClose).on("click", function(e){
    e.preventDefault();
    $(pop).removeClass("on");
    $('body').removeClass('hidden'); /* 스크롤 움직임 정상화 */
    $(window).on("wheel", wheelEvent); /* 휠이벤트 재실행 */
  });
  $(popOverlay).on("click", function(e){
    e.preventDefault();
    $(pop).removeClass("on");
    $('body').removeClass('hidden'); /* 스크롤 움직임 정상화 */
    $(window).on("wheel", wheelEvent); /* 휠이벤트 재실행 */
  });
  

  // 북촌한옥마을 모바일페이지 액자

$(".mpop").on("click", function(e){
  let w=$(window).width();
  console.log(w);
  if(w>800){ /* viewport가 767 이상이면 실행 */
    e.preventDefault();
    $(".m_pop").addClass("on");
    $('body').addClass('hidden');
    $(window).off('wheel'); /* 휠이벤트 끄기 */
    return;
  }
  else{ /* 반환 */
      return;
  }
});

// 액자 닫기
$(".mpop_btn").on("click", function(e){
$(".m_pop").removeClass("on");
$('body').removeClass('hidden');
$(window).on("wheel", wheelEvent); /* 휠이벤트 재실행 */
});
$(".mpop_overlay").on("click", function(e){
$(".m_pop").removeClass("on");
$('body').removeClass('hidden');
$(window).on("wheel", wheelEvent); /* 휠이벤트 재실행 */
});

//모바일 터치스크린 이벤트
let vh = window.innerHeight * 0.01; /* .con, #contents 높이값 */
document.documentElement.style.setProperty("--vh", `${vh}px`); /* --vh css값 변경 */

window.addEventListener("resize", () => {
  console.log("resize");
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});


var startX,startY, endX,endY;
// 모바일 터치 시작지점
  $("#wrap").on('touchstart',function(event){
      startY = event.originalEvent.changedTouches[0].screenY;
  });
  //모바일 터치 떼는지점
$("#wrap").on('touchend',function(event){
    event.stopPropagation();
     endY=event.originalEvent.changedTouches[0].screenY;
    if(mHtml.is(":animated")) return; /* 중복적용 막기 */
    if(startY-endY>50){
      if(page==con.length) return false; /* 1페이지보다 위로 못가게 막음 */
      page++;
     }else if(endY-startY>50){
      if(page==1) return false; /* 마지막페이지보다 뒤로 못가게 막음 */
      page--;
     }else if(startY-endY<50 || endY-startY<50 ){
      return; /* 조금 움직이면 막음 false하면 터치자체가 막힘 */
     }
     var posTop =(page-1) * $(window).height(); /* posTop은 con높이*(page-1) */
    mHtml.stop().animate({'scrollTop' : posTop});
    let i=page-1;
    pagenationColor(i);
    selfIntroduce();
});
