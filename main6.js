$(function(){
  const birthday = '1969-02-14';
   $('#birthday').on("change",function(){
     if($(this).val() == birthday){
       $('h1').fadeIn();
    }
 });
});
