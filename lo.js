
var logo = document.getElementById("logo");
var animation = bodymovin.loadAnimation({
    container: logo, // Required
    path: 'data.json', // Required
    renderer: 'svg', // Required
    loop: false, // Optional
    autoplay: true, // Optional
    name: "logo", // Name for future reference. Optional.
  })

logo.addEventListener("mouseenter", function () {
animation.play();
});

logo.addEventListener("mouseleave", function () {
animation.stop();
});

// var animation = bodymovin.loadAnimation({
//     container: document.getElementById('bm'),
//     renderer: 'svg',
//     loop: true,
//     autoplay: true,
//     path: 'dataLine.json'
//   })