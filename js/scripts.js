$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var gender = $("input:radio[name=president]:checked").val();

    if (gender === 'female') {
      alert("female");
    } else if (gender === 'female') {
      alert("");
    }

    if (gender === 'male') {
      alert("male")
      } else {
      alert("");
    }
$("#output").text(result);
 event.preventDefault();
  });
  });
