$(function() {
 
var textBox = [];
  
$('#myForm').on('submit', function(){
  

  textBox.push($('#myForm :input').val()); 
  console.log(JSON.stringify(textBox));
  
  
  var sum = 0;
  for (var i = 0; i < textBox.length; i++){
    sum += parseFloat(textBox[i]);
  }
    
  
  if ($.isNumeric($('#myForm :input').val())) {
    $('#count').text(textBox.length);
    $('#sum').text(sum.toFixed(2));
    $('#avg').text((sum / textBox.length).toFixed(2));
  
  
  } else if (typeof ('#myform :input') === 'string') {
      $('#strings').text(textBox.length);
      $('#concatenate').text(textBox.join(' '));
}; 
  

  $('#myForm :input').val("");
    return false;
    });
  });
    
 
$('#reset').click(function() {
    location.reload();
  });