$(document).ready(function(){
    // New Burger AJAX call
    $("#submit").on("click", function(event){
        event.preventDefault();

        var newBurg = {
            burger_name: $("#newBurger").val().trim() 
        }

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurg
        }).then(
            function(){
                console.log("New burger added.");
                location.reload();
            }
        );
        console.log("okay")
    });

    $(".devour-btn").on("click", function(event){
        var id = $(this).data("id");

        var devouredObj = {
            devoured: true
        }
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredObj
        }).then(
            function(){
                console.log("You've devoured a burger.");
                location.reload();
            }
        )
    });

});