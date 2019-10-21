/*
 * My jQuery selectors
 *
 * Apply a style such as a yellow background to the following elements.
 * Test your selectors one at a time.
 */

// all elements
 $("*").css("background-color", "yellow");

// all p elements
$("p")

// the p element with an ID of "intro"
$("#intro")

// all elements with a class of "note"
$(".note")

// all DIV elements with a class of note
$("div.note")

// all p elements in the article element
$("article p")

// the last element in any section which is a p tag
$("p:last")

// the first paragraph on the page
$("p:first")

// all p elements which have a link
//$("p [href]").css("background-color","red");

// the second li within nested ul element
//$("ul li:nth-child(2)").css("background-color","red");

// every second and third p element
$("p:nth-child(-n+2),p:nth-child(3)").css("background-color","red");