$(document).ready(function() {
    // all custom jQuery will go here

    function getTotal()
    {
        //Here we get the total price by calling our function
        //Each function returns a number so by calling them we add the values they return together
        var cakePrice = getCakeSizePrice() + getFillingPrice() +
                              candlesPrice() + insciptionPrice();

        //display the result
        document.getElementById('totalPrice').innerHTML =
                                          "Total Price For Cake $"+cakePrice;

    }



    function calculate() {
  		var myBox1 = document.getElementById('box1').value;
  		var myBox2 = document.getElementById('box2').value;
  		var result = document.getElementById('result');
  		var myResult = myBox1 * myBox2;
  		result.value = myResult;
  	}

    function calc(){
       var textValue1 = document.getElementById('input1').value;
       var textValue2 = document.getElementById('input2').value;

       document.getElementById('output').value = textValue1 * textValue2;
     }

var myName = "Maartje";

  function sayMyName(name){
    alert("Hi," + name + "!");
  }







});
