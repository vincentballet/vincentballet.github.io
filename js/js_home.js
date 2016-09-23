
// var $button = $("#button");
// var $cooltest = $("#cooltest");
//   window.alert($button);

$("#button").ready(function() {
  $("#textbloc").velocity( { 
    opacity: 1, 
    top: "100%",
    translateY: "-20px"
  },
  { 
    display: "block" 
  });

    $("#logo").velocity( { 
    opacity: 1, 
    top: "100%",
    height: "120",
    width: '120'  },
  { 
    display: "blmeock" 
  });
  // $("#logo").velocity({height: "130", width: '130'});
});