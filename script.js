document.getElementById('signForm').addEventListener('submit' , function(event){
var allFilled =true;
var inputs = document.querySelectorAll('input');

inputs.forEach(function(input){
  if(input.value.trim() == ''){
        allFilled = false;
    }

});

if(!allFilled){
    document.getElementById('error-message').style.display = 'block';
    event.preventDefault();
}
else{
    document.getElementById('error-message').style.display = 'none';

}








})  