$(document).ready(function(){
  $('.butt').click(function(){
    grabAww()
  })
})
function grabAww(){
  $.get('https://galvanize-cors.herokuapp.com/http://www.reddit.com/r/pics/.json', function (data) {
    var placeholder = document.querySelectorAll('.placeholders')
    console.log(placeholder.length)
    for(var i = 0; i < placeholder.length; i++){
      var thisIsTheUrl = data.data.children[i].data.url
      placeholder[i].setAttribute('src',thisIsTheUrl);
      console.log(thisIsTheUrl);
    }
  })
}
