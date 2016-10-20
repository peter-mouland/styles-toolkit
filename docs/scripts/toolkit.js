[].forEach.call(document.querySelectorAll("a[href]"), function(anchor) {
  if (anchor.href == window.location.href) {
    anchor.classList.add("active");
  }
});