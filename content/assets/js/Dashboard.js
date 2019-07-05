// List of Product 
$("#list-product").hide();
$("#list-P").on('click', function () {  
    $('#list-product').toggle()   
});

$("#list-product-close").on('click', function () {
  $("#list-product").hide(); 
});

$("#viewStatus").on('click',function(){
$("#status").modal('show');
})