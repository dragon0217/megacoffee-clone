window.addEventListener("wheel", function(e){
	e.preventDefault();
},{passive : false});

window.onload = function(){
    const elm = document.querySelectorAll('.section');
    const elmCount = elm.length;
    elm.forEach(function(item, index){
      item.addEventListener('mousewheel', function(event){
        event.preventDefault();
        let delta = 0;

        if (!event) event = window.event;
        if (event.wheelDelta) {
            delta = event.wheelDelta / 120;
            if (window.opera) delta = -delta;
        } 
        else if (event.detail)
            delta = -event.detail / 3;

        let moveTop = window.scrollY;
        let elmSelector = elm[index];

        // wheel down : move to next section
        if (delta < 0){
          if (elmSelector !== elmCount-1){
            try{
              moveTop = window.pageYOffset + elmSelector.nextElementSibling.getBoundingClientRect().top;
            }catch(e){}
          }
        }
        
        // wheel up : move to previous section
        else{
          if (elmSelector !== 0){
            try{
              moveTop = window.pageYOffset + elmSelector.previousElementSibling.getBoundingClientRect().top;
            }catch(e){}
          }
        }

        const body = document.querySelector('html');
        window.scrollTo({top:moveTop, left:0, behavior:'smooth'});
      });
    });
  }


  $(window).scroll(function() {
    var scroll = $(document).scrollTop();
    var minusH = $(document).innerHeight() / 10;
    var target1 = $('.box1').offset().top;
    if (scroll > target1 - minusH) {
      $('.box1').addClass('move');
    }
  });


  const spyEls = document.querySelectorAll('.scroll-spy')
  spyEls.forEach(function(spyEl){
    new ScrollMagic
      .Scene({ // 감시할 장면(Scene)을 추가
        triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
        triggerHook: .5 // 화면의 80% 지점에서 보여짐 여부 감시
      })
      .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
      .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
  })