var logo = document.getElementById("logo");
var connect = bodymovin.loadAnimation({
    container: logo, // Required
    path: 'dataAll.json', // Required
    renderer: 'svg', // Required
    loop: false, // Optional
    autoplay: false, // Optional
    name: "logo", // Name for future reference. Optional.
    rendererSettings:{
      hideOnTransparent: true
    }
})

// var connecting = bodymovin.loadAnimation({
//     container: logo, // Required
//     path: 'dataAni.json', // Required
//     renderer: 'svg', // Required
//     loop: false, // Optional
//     autoplay: true, // Optional
//     name: "logoAni", // Name for future reference. Optional.
//     rendererSettings:{
//       hideOnTransparent: true
//     }
// })

logo.addEventListener("mouseenter", function () {
connect.playSegments([0, 31], true);
});

logo.addEventListener("mouseleave", function () {
connect.stop();
});


logo.addEventListener("click", function () {
  connect.playSegments([33, 100], true);
  
});

// var animation = bodymovin.loadAnimation({
//     container: document.getElementById('bm'),
//     renderer: 'svg',
//     loop: true,
//     autoplay: true,
//     path: 'dataLine.json'
//   })connecting.hideOnTransparent();
