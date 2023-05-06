
/*first we create a function called generate,in this function we store an array called quotes and inside that array we create our 
object,with multiple keys corresponding author's name and a string as a value for each key.each value corresponds a quote by that author*/

function generate() {
    var quotes = {
        "Sylvia Plath" : '"I do not know what it is like to not have deep emptions.Even when i feel nothing,I feel it completely."',
        "Sylvia plath-2" : '"Someone , somewhere , can you understand me a little,love me a little?"',
        "Sylvia plath-3" : '"Why can\'t I try on different lives,like dresses,to see which one fits best?"',
        "Sylvia Plath-4" : '"I am terrified by this dark thing that sleeps in me."',
        "Sylvia plath-5" : '"Out of the ash I rise with my red hair and i eat men like air."',
        "Sylvia Plath-6" : '"I have the choice of being constantly active and happy or introspectively passive and sad.Or I can go mad by ricocheting in between."',
        "Sylvia plath-7" : '"If i didn\'t think I would be much happier."',
        "Sylvia plath-8" : '"Eternity bores me, I never wanted it."'
    }

    /*next the function creates another array called authors with all of the keys in the object above.*/

    var authors = Object.keys(quotes);

    /*the function then creates another variable called author by generating a random number between 0 and the length of the 
    "authors" array */

    var author = authors[Math.floor(Math.random() * authors.length)];

  /*once the author is selected the function finds the quote associated with that author and puts it in a variable called quote*/

    var quote = quotes[author];

  /*at the end function goes to the html and finds elements with the class name of author and quotes,then replaces them with
  the value that it created before */

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;

}
