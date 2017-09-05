// JQUERY

// Document ready function
$(document).ready (function() {
    console.log("ready");

    $.each([3, 5, 7], function(index){
        console.log(this + 1 + '!');
    });

    var array = ["one", "two", "three"];

    $.each(array, function (index) {

        // turns it into ints
        console.log(index)

        // console logs the strings with each letter split up
        console.log(this)

        // console logs the array
        console.log(array)

        // console logs the first index (aka two)
        console.log(array[1])
    })


});

/*

==========================================================

EXAMPLES TO HELP ME THROUGH JQUERY

 // On click functions
 $(document).on("click", ".????", function () { })
 $("#gifsarea").on("click", function() { });

 // empty
 $("#???").empty();

 // Giving attributes
 var shows = $(this).attr("data-show");

// Prepending
 $("#gifsarea").prepend(showDiv);


==========================================================

APIS AND AJAX CALLS


 var queryURL = "???" +
 <variable that holds user input> + "???";
 console.log(queryURL);

// AJAX request
 $.ajax({
 url: queryURL
 }).done(function (response) {

 // Storing data from AJAX request in a variable
 var results = response.data;

 });

==========================================================


 */