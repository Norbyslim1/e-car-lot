$(document).ready(function(){
    var check= localStorage.getItem("username");
    var check2= localStorage.getItem("password");
        if ((check!='admin@carlot.com') &&(check1 !='zxcvbnm')){
            $("#delete").hide();
            $("#update").hide();
        }
    $('#ad-form').submit(function(e){
        e.preventDefault();
        var channel=$('#brand').val();
        $.ajax({
            url: ("http://localhost:3000/cars"),
            dataType: 'json',
            type: 'Post',
            contentType: 'application/json',
            data: JSON.stringify({
                "brand":$('#brand').val(),
                "model": $('#model').val(),
                "series": $('#series').val(),
                "product_description": $('#description').val(),
                "img_url": $('#img_url').val(),
               
                // "brand": "Toyota",
                // "model": "avalon",
                // "series": "ES-L",
                // "product_description": "v6 petrol engine with automatic transmission and high suspension. low fuel consumption",
                // "img_url": "assets/images/2014-Toyota-Avalon-Limited.jpg",
                // "price": "4000000",
                // "price": $('#price').val(),
                // "id": "BaSZi2i"  
                }),
            processData: false,
            success: function(){
                //   $('#response').html(JSON.stringify(data));
                alert("Congratulations, Car has been added Successfully");
            //   window.location.assign('http://localhost:4000/all-products.html')
            },
            error: function(errorThrown) {
                console.log(errorThrown);
            }  
        });
    })
});