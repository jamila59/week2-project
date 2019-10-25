$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var gender = $("input:radio[name=president]:checked").val();
    var transport = $("#party").val();

    if (gender === 'female'  && transport === '2') {
      alert("Democrat");
    } else if (gender === 'female'  && transport === '3') {
      alert("Liberal");
    }

    if (gender === 'male'  && transport === '3') {
      alert("Republican")
      } else {
      alert("Undecided");
    }


    event.preventDefault();
  });
  });
