$('#submit').click(function(){
    if($.trim($('#myMessage').val()) == ''){
       alert('Input can not be left blank');
    }
 });