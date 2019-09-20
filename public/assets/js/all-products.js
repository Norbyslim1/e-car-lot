$(document).ready(function(){
var check= localStorage.getItem("username");
console.log(check);
    //GET ALL PRODUCTS
    $.ajax({
        type:'GET',
        url:"http://localhost:3000/cars",
        dataType:"json",
        contentType:'application/json',
        data:{
           format:'json'
        },
        
        success:function(data){
            var cars = data; console.log(cars);// $("#all-products").append('<img src="'+cars[1].img_url+ '"style="width:350px" alt="Toyota avalon">');
            var output=''
                for(var i=0; i<cars.length ; i++){
                    $("#all-products").append('<div class="container" id="'+cars[i].id+'"><h5>Available</h5><img style="width:250px" id= "image" src="'+ cars[i].img_url + '"alt="Toyota avalon"><br<h5>'+cars[i].price+'</h5><h5>'+cars[i].brand+'</h5><h5>'+cars[i].series+'</h5><h5>'+cars[i].product_description+'</h5><h5>'+cars[i].id+'</h5>')
                // //     $("#all-products").append('<input type="button" class="btn" value="Details"></a>');
                // // </article>`
                
                //                 $("#all-products").append('<img src="'+cars[i].model+ '" alt="Toyota avalon">');
                // $("#all-products").append('<div class="category category-available">Available Cars</div>');
                //$("#all-products").append('<img src="'+cars[i].img_url+ '" alt="Toyota avalon">');
            //     $("#all-products").append('<div class="container">');
            //       $("#all-products").append('<div><small>&#8358 '+cars[i].price+'</small></div>');
            //       $("#all-products").append('<div><small>'+cars[i].brand+'</small></div>');
            //   //'</div>'
              
            //   $("#all-products").append('<hr>')
            //   $("#all-products").append('<p>'+cars[i].product_description+'</p>');
            //   $("#all-products").append('<a href="product.html?'+cars[i].id+'">');
            //     $("#all-products").append('<input type="button" class="btn" value="Details"></a>');
            // </article>`
                
                }
            // $("#all-products").html(output);    
            // var user = location.search.substring(1);       
            // $("#user").html(user);
            
        },
    })
    })