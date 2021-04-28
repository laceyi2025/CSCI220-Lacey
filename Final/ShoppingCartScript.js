   //make sure the html is loaded before running the javascript code to avoid errors
   if (document.readyState == 'loading'){
        document.addEventListener('DOMContentLoaded', ready)
    }else{
        ready()

    }

    function ready(){
        //item 1 information
    document.getElementById("product1").innerHTML = item1.productName;
    document.getElementById("description1").innerHTML = item1.description;
    document.getElementById("price1").innerHTML = "$"+item1.price;
    document.getElementById("quantity1").innerHTML = item1.available;

    //item 2 information
    document.getElementById("product2").innerHTML = item2.productName;
    document.getElementById("description2").innerHTML = item2.description;
    document.getElementById("price2").innerHTML = "$"+item2.price;
    document.getElementById("quantity2").innerHTML = item2.available;

    //item 3 information
    document.getElementById("product3").innerHTML = item3.productName;
    document.getElementById("description3").innerHTML = item3.description;
    document.getElementById("price3").innerHTML = "$"+item3.price;
    document.getElementById("quantity3").innerHTML = item3.available;

    //item 4 information
    document.getElementById("product4").innerHTML = item4.productName;
    document.getElementById("description4").innerHTML = item4.description;
    document.getElementById("price4").innerHTML = "$"+item4.price;
    document.getElementById("quantity4").innerHTML = item4.available;
  

    //make the delete button work and update cart by callling removeCart function
    var removeCartItemBtn = document.getElementsByClassName('btnClear')

    for (var i = 0; i < removeCartItemBtn.length; i++){
        var button = removeCartItemBtn[i]
        button.addEventListener('click', removeCart)
    }
        //make changing quantities work by calling changeQuantity function
        var quantityInputs = document.getElementsByClassName('quantityUpdate')
        for (var i = 0; i < quantityInputs.length; i++){
            var input = quantityInputs[i]
            input.addEventListener('change', changeQuantity)
    }
}

    //actually make remove cart update the total
    function removeCart(event){
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateSubTotal()
    }

    //actually make changing quantity update the total
    function changeQuantity(event){
        var userInput = event.target
        if(isNaN(userInput.value) || userInput.value <=0){
            userInput.value = 1
        }

        updateSubTotal()
    }


    //define all of the variables to do the math to update tha total when called and round the total to two decimals
    function updateSubTotal(){
        var cartItemContainer = document.getElementsByClassName('cartItem')[0]
        var cartRows = cartItemContainer.getElementsByClassName('cartRow')
        var total = 0
        

        for (var i = 0; i < cartRows.length; i++){
            var cartRow = cartRows[i]
            var itemPrice = cartRow.getElementsByClassName('price')[0]
            var itemQuantity = cartRow.getElementsByClassName('quantityUpdate')[0]
            var price = parseFloat(itemPrice.innerText.replace('$','')).toFixed(2)
            var quantity = itemQuantity.value
        
            total =total + (price*quantity)

        }

        total = Math.round(total* 100)/100
        document.getElementsByClassName('cartTotal')[0].innerText = 'Subtotal: $' + total
       }
    

    

    
    

    



