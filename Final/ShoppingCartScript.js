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
  

    var removeCartItemButtons = document.getElementsByClassName('btnClear')

    for (var i = 0; i < removeCartItemButtons.length; i++){
        var button = removeCartItemButtons[i]
        button.addEventListener('click', function(event){
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
        })
    }


    function updateCartTotal(){
        var cartItemContainer = document.getElementsByClassName('cartItem')[0]
        var cartRows = cartItemContainer.getElementsByClassName('cartRow')
        var total = 0
        

        for (var i = 0; i < cartRows.length; i++){
            var cartRow = cartRows[i]
            var priceElement = cartRow.getElementsByClassName('price')[0]
            var quantityElement = cartRow.getElementsByClassName('quantityUpdate')[0]
            var price = parseFloat(priceElement.innerText.replace('$',''))
            var quantity = quantityElement.value
            
            total = total + (price*quantity)
           

        }

        document.getElementsByClassName('subtotal')[0].innerText = '$'+total
       }
    

    

    
    

    



