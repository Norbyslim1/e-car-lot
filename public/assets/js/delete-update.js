


$('#submit').click(function(event){
    event.preventDefault();
    var bran= $('#brand').val();
    var mod=$('#model').val();
    $(document).ready(function(){
        $('#select-div').empty();
        $('#del-div').empty();
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
                        if((cars[i].brand==bran) && (cars[i].model==mod)){
                        $("#all-products").append('<br><div class="container" id="'+cars[i].id+'"><h5>Available</h5><img style="width:250px" id= "image" src="'+ cars[i].img_url + '"alt="Toyota avalon"><br><h5>price:'+cars[i].price+'</h5><h5>brand: '+cars[i].brand+'</h5><h5>series: '+cars[i].series+'</h5><h5>description: '+cars[i].product_description+'</h5><h5>product id:'+cars[i].id+'</h5><br><hr>');
                        
                    }}
                    for (var j=0; j<1; j++ ){
                        $('#del-div').append('<input type="text" Style="width:250px;" placeholder="input product id" id="txt"><button id="delete" style="padding:10px; width:80px; background-color: firebrick">delete</button></div><button id="update" style="padding:10px; margin-left:10px; width:80px; background-color: cyan">update</button></div>')
                            var check= localStorage.getItem("username");
                            var check2= localStorage.getItem("password");
                            if ((check!='admin@carlot.com') &&(check1 !='zxcvbnm')){
                            $("#delete").hide();
                            $("#update").hide();
                            }
                        $('#delete').click(function(){
                            var prodId= $('#txt').val();

                            $(document).ready(function(){
  
                                //GET ALL PRODUCTS
                                $.ajax({
                                    url:"http://localhost:3000/cars/"+prodId,
                                    dataType:"json",
                                    type:'DELETE',
                                    data:{
                                       format:'json',
                                    },
                                    
                                    success:function(data){
                                        alert("item deleted succefully");},})
                                    
                                    
                        

                        })
                    })
                    $('#update').click(function(){
                        $(this).hide();
                        var upd=$('#txt').val(); console.log(upd);
                        $('#select-div').append('<br><input type="text" Style="width:250px;" placeholder="input product id" id="txt"><button id="update2" style="padding:10px; margin-left:10px; width:80px; background-color: cyan">update</button></div>');

                        $('#update2').click(function(){
                            for (k=0; k< cars.length; k++){

                            if (cars[k].id==upd){
                                brand1= cars[k].brand;
                                model1=cars[k].model;
                                series1=cars[k].series;
                                desc= cars[k].product_description;
                                im= cars[k].img_url;

                                $('#update2').click(function(e){
                                    e.preventDefault();

                                    $.ajax({
                                        url: "http://localhost:3000/cars/"+ upd,
                                        dataType: 'json',
                                        type: 'PUT',
                                        contentType: 'application/json',
                                        data: JSON.stringify({
                                            "brand":brand1,
                                            "model": model1,
                                            "series": series1,
                                            "product_description": desc,
                                            "img_url": im,
                                            "price": txt}),

                                            processData: false,
                                            success: function(){
                                            //   $('#response').html(JSON.stringify(data));
                                            alert("item's price has been updated Successfully");
                                            //   window.location.assign('http://localhost:4000/all-products.html')
                                            },
                                            error: function(errorThrown) {
                                            console.log(errorThrown);
                                            }  
                            })               
                        })

                    }}})

                })
                
                
                
                }
                
                
                }
                
                
                })
            })
        })