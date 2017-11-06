$(document).ready(function() {
    // all custom jQuery will go here

    $(document).ready(function(){
        $('#a1').keyup(calculate);
        $('#a2').keyup(calculate);
    });
    function calculate(e)
    {
        $('#a3').val($('#a1').val() * $('#a2').val());
    }

    $(document).ready(function() {
        // all custom jQuery will go here

        $(document).ready(function(){
            $('#a1').keyup(calculate);
            $('#a2').keyup(calculate);
        });
        function calculate(e)
        {
            $('#a3').val($('#a1').val() * $('#a2').val());
        }


    
});
