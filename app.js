$(document).ready(function(){
  $('.butt').click(function(){
    grabAww()
  })
  $('.earth').click(function(){
    grabEarth()
  })
  $('.beauty').click(function(){
    grabTilt()
  })
})
function grabAww(){
  $.get('https://galvanize-cors.herokuapp.com/http://www.reddit.com/r/aww/.json', function (data) {
    var placeholder = document.querySelectorAll('.placeholders')
    console.log(placeholder.length)
    for(var i = 0; i < placeholder.length; i++){
      var thisIsTheUrl = data.data.children[i].data.url
      placeholder[i].setAttribute('src',thisIsTheUrl);
      console.log(thisIsTheUrl);
    }
  })
}
function grabEarth(){
  $.get('https://galvanize-cors.herokuapp.com/http://www.reddit.com/r/space/.json', function (data) {
    var placeholder = document.querySelectorAll('.placeholders')
    console.log(placeholder.length)
    for(var i = 0; i < placeholder.length; i++){
      var thisIsTheUrl = data.data.children[i].data.url
      placeholder[i].setAttribute('src',thisIsTheUrl);
      console.log(thisIsTheUrl);
    }
  })
}
function grabTilt(){
  $.get('https://galvanize-cors.herokuapp.com/http://www.reddit.com/r/mapporn/.json', function (data) {
    var placeholder = document.querySelectorAll('.placeholders')
    console.log(placeholder.length)
    for(var i = 0; i < placeholder.length; i++){
      var thisIsTheUrl = data.data.children[i].data.url
      placeholder[i].setAttribute('src',thisIsTheUrl);
      console.log(thisIsTheUrl);
    }
  })
}
