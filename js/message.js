var message = {};
message.success = function(message, time){
    if(time == null) time = 1000;
    $("#success_message").text(message);
    $("#success").addClass("visible");
    message.successTimeout = setTimeout(function(){
        $("#success").removeClass("visible")    
        
    }, time)
}
$(document).on("click", "#success", function(){
    clearTimeout(message.successTimeout);
    $("#success").removeClass("visible")
})

