$(document).ready(function(){
  $.get('https://galvanize-cors.herokuapp.com/http://www.reddit.com/r/aww/new/.json', function (data) {
    console.log(data)
  }
})
