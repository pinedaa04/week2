$(function() {
 
var textBox = [];
  
$('#myForm').on('submit', function(){
  
  // adds numbers and text to array
  textBox.push($('#myForm :input').val()); 
  console.log(JSON.stringify(textBox));
  
  // calculates the sum of numbers in array
  var sum = 0;
  for (var i = 0; i < textBox.length; i++){
    sum += parseFloat(textBox[i]);
  }
    
  // gets the count, sum and avg if input is a number
  if ($.isNumeric($('#myForm :input').val())) {
    $('#count').text(textBox.length);
    $('#sum').text(sum.toFixed(2));
    $('#avg').text((sum / textBox.length).toFixed(2));
  
  // if not a number, concatenates string
  } else if (typeof ('#myform :input') === 'string') {
      $('#strings').text(textBox.length);
      $('#concatenate').text(textBox.join(' '));
}; 
  
  // clears the form once submitted
  $('#myForm :input').val("");
    return false;
    });
  });
    
// reloads page with reset button 
$('#reset').click(function() {
    location.reload();
  });