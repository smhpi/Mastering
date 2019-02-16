function MenuToggle(nodeName) {
  var myNode = document.querySelector(nodeName + " .nav");

  return {
    activate: function() {
      myNode.addEventListener(
        "click",
        function(e) {
          myNode.parentNode.querySelector(".navbar").classList.toggle("hidden");
        },
        false
      );
    },
    hide: function() {}
  };
}

var topMenu = new MenuToggle("#topMenu");
topMenu.activate();
