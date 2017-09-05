// JQUERY

// Document ready function
$(document).ready (function() {
    console.log("ready");

    $.each([3, 5, 7], function(index){
        console.log(this + 1 + '!');
    });

    // Trying to see what I can do with a $.each
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

        // doesnt work because this is the vanilla js way
        //console.log(array[i])

        // console logs "three" for some reason
        console.log(array[index])
    })

    var arr = [ "one", "two", "three", "four", "five" ];
    var obj = { one: 1, two: 2, three: 3, four: 4, five: 5 };

    $.each( arr, function( i, val ) {
        $( "#" + val ).text( "Mine is " + val + "." );

        // Will stop running after "three"
        return ( val !== "three" );
    });

    $.each( obj, function( i, val ) {
        $( "#" + i ).append( document.createTextNode( " - " + val ) );
    });


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