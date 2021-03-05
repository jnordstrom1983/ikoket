$(document).on("click", "[link]", function(){

    var linkmode = $(this).attr('link-mode');

    if(linkmode == "pop" && app.viewController.canPop() ){
        app.viewController.pop();
        return;
    }

    app.navigate($(this).attr("link"))
})


document.addEventListener('swiped-right', function(e) {
    $(".view.active .back-button").trigger('click')
});






// var manyClickCounter = 0;
// $(document).on("click", function(){
//     manyClickCounter++;
//     console.log("manyClickCounter", manyClickCounter)
//     if(manyClickCounter > 5){
//         console.log("Refreshing")
//         document.location.reload();
//     }
//     setTimeout(function(){
//         manyClickCounter--;
//     }, 3000)

// })
