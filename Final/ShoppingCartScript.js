    //item 1 information
    document.getElementById("product1").innerHTML = item1.productName;
    document.getElementById("description1").innerHTML = item1.description;
    document.getElementById("price1").innerHTML = item1.price;
    document.getElementById("quantity1").innerHTML = item1.available;

    //item 2 information
    document.getElementById("product2").innerHTML = item2.productName;
    document.getElementById("description2").innerHTML = item2.description;
    document.getElementById("price2").innerHTML = item2.price;
    document.getElementById("quantity2").innerHTML = item2.available;

    //item 3 information
    document.getElementById("product3").innerHTML = item3.productName;
    document.getElementById("description3").innerHTML = item3.description;
    document.getElementById("price3").innerHTML = item3.price;
    document.getElementById("quantity3").innerHTML = item3.available;

    //item 4 information
    document.getElementById("product4").innerHTML = item4.productName;
    document.getElementById("description4").innerHTML = item4.description;
    document.getElementById("price4").innerHTML = item4.price;
    document.getElementById("quantity4").innerHTML = item4.available;
  
    var item1Price = document.getElementById("price1").value;
    var item1Quantity = document.getElementById("quantity1").value;
    var item1Total = (item1Price * item1Quantity).toFixed(2) - 0;

    var item2Price = document.getElementById("price2").value;
    var item2Quantity = document.getElementById("quantity2").value;
    var item2Total = (item2Price * item2Quantity).toFixed(2) - 0;

    var item3Price = document.getElementById("price3").value;
    var item3Quantity = document.getElementById("quantity3").value;
    var item3Total = (item3Price * item3Quantity).toFixed(2) - 0;

    var item4Price = document.getElementById("price4").value;
    var item4Quantity = document.getElementById("quantity4").value;
    var item4Total = (item4Price * item4Quantity).toFixed(2) - 0;
    
    var taxRate = .07
    var subtotal = item1Total+item2Total+item3Total+item4Price
    var tax = subtotal * taxRate
    var total = subtotal + tax

    window.onload=function updateTotals(){
        
        
        document.getElementById("subtotal").innerHTML = subtotal;
        document.getElementById("tax").innerHTML = tax;
        document.getElementById("total").innerHTML = total;

    }


    

    

    
    

    



