AOS.init();

$(document).ready(function(){
  $("#bar").click(function(){
    $(".navlinks").slideToggle("slow");
  });
});




function women(evt, catname) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(catname).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it


  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("Women").click();
