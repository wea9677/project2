$(function(){
    
    var interval = 6000; /*간격이 3초간 이루어진다*/
    $('.slide_main').each(function(){
        var container = $(this); /*this 는 슬라이드 쇼를 말함*/
        function switchImg(){
            /*페이드 전환 1회분의 함수*/
            
            var imgs = container.find('img'); /*이미지들 이름을 imgs 로 정의함*/
            var first = imgs.eq(0); /*제일 처음오는 선두 이미지를 first로 정의 0번이 제일 처음*/
            var second = imgs.eq(1); /*1 두번째 이미지를 의미*/
            first.appendTo(container).fadeOut();
            second.fadeIn();
            /*appendto는 앞이 자식 뒤가 부모*/
        }
        setInterval(switchImg, interval);
    });
    
});