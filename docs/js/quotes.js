/**
 * this code generates blockquotes like this:
 *             <blockquote id="Home" class="blockquote">
                <p class="mb-0">Give a man a shoe, and he will have stinky feet. Teach a man to walk
                    barefoot, and his feet will be ventilated for a lifetime.</p>
                <footer class="blockquote-footer">the one and only <cite title="Source Title">Big Bad Kaya</cite></footer>
              </blockquote>
 */

 $(document).ready(function(){

    
    var getUrl = window.location;
    var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];

    $.ajax({
        type: 'GET',
        url: getBasePath() + '/quotes.json',
        asnyc: true,
        success: function(data) {
            writeQuotes(data);
        },
        error: function(xhr,status,error) {
            console.log("error on loading quotes",error);
        }
    });
 });

 function writeQuotes(quotes) {
    let root = $('#Quotes');
    quotes.forEach(quote => {
        root.append('<blockquote id="Home" class="blockquote"><p class="mb-0">' + quote.text + 
        '</p><footer class="blockquote-footer">' + quote.originIntro + '<cite title="Source Title">' + quote.origin + '</cite></footer></blockquote>')
    })
 }