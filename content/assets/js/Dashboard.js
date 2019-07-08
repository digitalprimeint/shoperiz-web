// List of Product 
function initialHide() {
  $("#list-product").hide();
  $('#create-product').hide();
  $('#report-products').hide();
  $('#add-data-product').hide();
  $('#content-Web-option').removeClass("display");
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
      checkTempleteOne()
      break;
    case 'check-template-2':
      ckeckTemplateTwo();
      break;
  }
}

function AddDataTemplated(op) {
  if (op === 'btn-template-1') {
    $('#add-data-product').show();
    displayTemplate(true)
  } else {
    $('#add-data-product').show();
    displayTemplate(true)
  }
}
function OtherTemplate(op) {
  displayTemplate(op)
}

// materials input 
function checkValue(element) {
  if ($(element).val())
    $(element).addClass('has-value');
  else
    $(element).removeClass('has-value');
}
$(document).ready(function () {
  $('.form-control').each(function () {
    checkValue(this);
  })
  $('.form-control').blur(function () {
    checkValue(this);
  });

});



// check templated One 
function checkTempleteOne() {
  $('#icon-2').removeClass("text-success").addClass('text-dark');
  $('#icon-1').removeClass('text-dark').addClass("text-success");
  $("#btn-template-2").prop('disabled', true);
  $("#btn-template-1").prop('disabled', false);
}
// check templated Two 
function ckeckTemplateTwo() {
  $('#icon-1').removeClass('text-success').addClass("text-dark");
  $('#icon-2').removeClass('text-dark').addClass("text-success");
  $("#btn-template-1").prop('disabled', true);
  $("#btn-template-2").prop('disabled', false);
}
function displayTemplate(op) {
  if (op === true) {
    $("#check-template-2").addClass('display');
    $("#check-template-1").addClass('display');
  } else {
    $("#check-template-2").removeClass('display');
    $("#check-template-1").removeClass('display');
    $('#add-data-product').hide();
    $('#icon-1').removeClass('text-success').addClass("text-dark");
    $('#icon-2').removeClass('text-success').addClass("text-dark");
    $("#btn-template-1").prop('disabled', true);
    $("#btn-template-2").prop('disabled', true);
    // $('#create-product').toggle();
    // $('#content').hide();
  }
}

initialHide();