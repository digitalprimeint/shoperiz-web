// List of Product 
function initialHide() {
  $("#list-product").hide();
  $('#create-product').hide();
  $('#report-products').hide();
}

function contentshow() {
  $('#content').show();
}
// list product 
$("#list-P").on('click', function () {
  $('#list-product').toggle();
  $('#content').hide();
});

$("#list-product-close").on('click', function () {
  initialHide();
  contentshow();
});

// create Product 
$("#create-P").on('click', function () {
  $('#create-product').toggle();
  $('#content').hide();
});

$("#create-product-close").on('click', function () {
  initialHide();
  contentshow();
});

function selectTemplate(op) {
  switch (op) {
    case 'check-template-1':
      $('#icon-2').removeClass("text-success").addClass( 'text-dark' );
      $('#icon-1').removeClass('text-dark').addClass( "text-success" );
      break;
    case 'check-template-2':
      $('#icon-1').removeClass('text-success').addClass( "text-dark" );
      $('#icon-2').removeClass('text-dark').addClass( "text-success" );
      break;
  }
}
initialHide()