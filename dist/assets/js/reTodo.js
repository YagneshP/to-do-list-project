$("#add").click(function () {
    $("input[type='text']").toggleClass("show");
})

//adding to do to the list
$("input[type ='text']").keypress(function (event) {
    if (event.which === 13) {
        //grabbing the value from input and store in the variable "a"
        var a = $(this).val();
        // clear the input
        $(this).val("")
        //adding new todo 
        $("ul").append("<li><span class=\"delete\"><i class=\"far fa-trash-alt\"></i></span> " + a + "</li>");
    }
});

//click on li to finish the task
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
})

//deleting to do

$("ul").on("click", ".delete", function (event) {
    $(this).parent().fadeOut(1000, function () {
        this.remove();
    });

    event.stopPropagation();
})

// selecting "pen" icon to toggle input

$("h1 span").click(function () {
    $("input[type ='text']").fadeToggle();
})