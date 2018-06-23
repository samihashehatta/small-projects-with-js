$("ul").on("click","li",function(){
              $(this).toggleClass("cross");
              
              });
$("ul").on("click","span",function(){
   $(this).parent().fadeOut(900,function(){
       $(this).remove();
   });
   
    event.stopPropagation();
});
$("input[type='text']").keypress(function(event){
    
    if(event.which === 13){
        var newTodo= $(this).val();
        $(this).val("");
        $("ul").append("<li><span> <i class='fa fa-trash' aria-hidden='true'></i></span>"
                       +newTodo+"</li>");
    }
})
$('.fa-plus').click(function(){
    
    $("input[type='text']").fadeToggle();
})