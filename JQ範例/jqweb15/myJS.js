${function(){
    
    $("#gotop").click(function () {
        $("#html,body").animate({ scrollTop: 0 }, 800);
        event.preventDefault();/*阻擋預設事件*/
    })

}}