$(document).ready(function () {

  $('#search').on('submit', function() {
    var stars = $('#search-name').val();

    $.ajax({
      url:'http://www.strudel.org.uk/lookUP/json/?name='+stars,
      dataType: "jsonp",
      jsonpCallback: "logResults"
    })

    .fail(function() {
      alert('error')
    })
    return false;

  });
});

function logResults(json) {
  $('#preview').html('<img src="' + json.image.src + '">');
  console.log(json);

}
