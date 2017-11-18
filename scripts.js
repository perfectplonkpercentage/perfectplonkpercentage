$(document).ready(function() {
    // all custom jQuery will go here

//calculations - row 1
    $(document).ready(function(){
        $('#volume1').keyup(calculate);
        $('#price1').keyup(calculate);
        $('#percentage1').keyup(calculate);
    });

    function calculate(e)
    {
        var price1 = parseFloat($("#price1").val()).toFixed(3)
        var volume1 = parseFloat($("#volume1").val())
        var percentage1 = parseFloat($("#percentage1").val())

        var result1 = price1 / (volume1 * percentage1)

        $("#ppu1").val(result1)
    }

//calculations - row 2
      $(document).ready(function(){
          $('#volume2').keyup(calculate);
          $('#price2').keyup(calculate);
          $('#percentage2').keyup(calculate);
      });

      function calculate(e)
    {
        var price2 = parseFloat($("#price2").val()).toFixed(3)
        var volume2 = parseFloat($("#volume2").val())
        var percentage2 = parseFloat($("#percentage2").val())

        var result2 = price2 / (volume2 * percentage2)

        $("#ppu2").val(result2)
    }

//calculations - row 3
      $(document).ready(function(){
          $('#volume3').keyup(calculate);
          $('#price3').keyup(calculate);
          $('#percentage3').keyup(calculate);
      });

      function calculate(e)
    {
        var price3 = parseFloat($("#price3").val()).toFixed(3)
        var volume3 = parseFloat($("#volume3").val())
        var percentage3 = parseFloat($("#percentage3").val())

        var result3 = price3 / (volume3 * percentage3)

        $("#ppu3").val(result3)
    }

//COMMENT SECTION
/**
*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/

var disqus_config = function () {
this.page.url = https:/perfectplonkpercentage.github.io/;  // Replace PAGE_URL with your page's canonical URL variable
this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};
*/
(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'https://perfectplonkpercentage.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();



});
