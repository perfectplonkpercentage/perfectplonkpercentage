$(document).ready(function() {
    // all custom jQuery will go here

//calculations - row 1
    $(document).ready(function(){
        $('#volume1').keyup(calculate1);
        $('#price1').keyup(calculate1);
        $('#percentage1').keyup(calculate1);
    });

    function calculate1(e)
    {
        var price1 = parseFloat($("#price1").val()).toFixed(3)
        var volume1 = parseFloat($("#volume1").val())
        var percentage1 = parseFloat($("#percentage1").val())

        var result1 = price1 / (volume1 * percentage1).toFixed(3)

        $("#ppu1").val(result1).toFixed(3)
    }

//calculations - row 2
      $(document).ready(function(){
          $('#volume2').keyup(calculate2);
          $('#price2').keyup(calculate2);
          $('#percentage2').keyup(calculate2);
      });

      function calculate2(e)
    {
        var price2 = parseFloat($("#price2").val()).toFixed(3)
        var volume2 = parseFloat($("#volume2").val())
        var percentage2 = parseFloat($("#percentage2").val())

        var result2 = price2 / (volume2 * percentage2).toFixed(3)

        $("#ppu2").val(result2).toFixed(3)
    }


//calculations - row 3
      $(document).ready(function(){
          $('#volume3').keyup(calculate3);
          $('#price3').keyup(calculate3);
          $('#percentage3').keyup(calculate3);
      });

      function calculate3(e)
    {
        var price3 = parseFloat($("#price3").val()).toFixed(3)
        var volume3 = parseFloat($("#volume3").val())
        var percentage3 = parseFloat($("#percentage3").val())

        var result3 = price3 / (volume3 * percentage3).toFixed(3)

        $("#ppu3").val(result3).toFixed(3)
    }




});
