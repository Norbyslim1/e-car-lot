//deleting an element
$('#subit1').click(function(event){
    event.preventDefault();
    var user= $('#email').val();
var pass=$('#password').val();

    if ((user == 'admin@carlot.com') && (pass=='zxcvbnm')){
        localStorage.setItem("username",user);
        localStorage.setItem("password", pass);
        alert('admin login successful');
        window.location.assign('all-products.html');

    }else{
        localStorage.setItem("username",user);
        localStorage.setItem("password", pass);
        alert('wrong admin email or password entered');}

})