$('#fadeout').click(function () {
   $('.par_fadeout').fadeToggle()
})
$('#append').click(function (){
   $('.par_append').text('jQuery API\n' +
       'jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. ')
})
$('#changecolor').click(function (){
   $('.par_changecolor').css('color', 'yellow' )
})
$('#animate').click(function (){
  var anim =  $('.par_animate');
  anim.animate( {padding: "20px"}, "slow")
   anim.animate( {opacity: "0.4"})
   anim.animate( {padding: "5px 5px"}, "slow")
   anim.animate( {opacity: "1"})
})
$('#show').click(function (){
    $('.par_show').html('<input>  </input>');
})
$('#backround').click(function (){
    $('#body').css({background: 'white'});

})

