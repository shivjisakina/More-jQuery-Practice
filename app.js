// JQUERY

// Document ready function
$(document).ready (function() {
    console.log("ready");

    // ====================================================================
    // $.each
    // ====================================================================

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

    // ====================================================================
    // $.isArray
    // ====================================================================

    var foo = [];
    var bar = ["Apple", "Mango", "Strawberry"];
    var baz = "Test";
    console.log('foo is an array: ' + $.isArray(foo)); // Returns true
    console.log('bar is an array: ' + $.isArray(bar)); // Returns true
    console.log('baz is an array: ' + $.isArray(baz)); // Returns false

    var fruits = ["Apple", "Mango", "Strawberry", "Plum"];
    console.log('Index of Apple is: ' + $.inArray("Apple", fruits)); //Returns 0
    console.log('Index of Banana is: ' + $.inArray("Banana", fruits)); //Returns -1
    console.log('Index of Mango is: ' + $.inArray("Mango", fruits, 2)); //Returns -1

    // ====================================================================
    // Sorting and reversing
    // ====================================================================

    var empfName = ["John", "Adam", "Steve", "Peter"];
    console.log(empfName.sort()); // Will produce Adam, John, Peter, Steve
    console.log(empfName.reverse()) // Will produce Steve, Peter, John, Adam

    var age = [40, 70, 9, 98];
    console.log(age.sort()); //Incorrect sort values. 40,70,9,98
    console.log(age.sort(function(a, b){return a-b})); //Correct sort values. 9,40,70,98

    // Putting it in the html
    $(".everything").text(age.sort(function(a, b){return a-b}));

    // ====================================================================
    // Removing from an array
    // ====================================================================

    var empfName2 = ["John", "Adam", "Steve", "Peter"];
    var nameToRemove = "Adam";
    console.log(empfName2.splice($.inArray(nameToRemove, empfName2), 1)); // ["Adam"]

    // removing duplicate items from array
    function removeDuplicate(arrItems) {
        var newArr = [];
        $.each(arrItems, function(i, e) {
            if ($.inArray(e, newArr) == -1) newArr.push(e);
        });
        return newArr;
    }
    var numbers = [1, 4, 16, 10, 4, 8, 16];
    var newArr = removeDuplicate(numbers);
    console.log(newArr) // 1, 4, 16, 10, 8

});
