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

var text = document.getElementById("texts");

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
text.innerHTML = "and Click :)";
});

logo.addEventListener("mouseleave", function () {
connect.stop();
text.innerHTML = "↑ Connect the dots.";
});


logo.addEventListener("click", function () {
  connect.playSegments([33, 100], true);
  setTimeout(function(){
    location.href="page/about.html"}, 2500); 
});




// location.href="page/about.html"
// setTimeout(function(){
//   location.href="page/about.html"}, 70);
// var animation = bodymovin.loadAnimation({
//     container: document.getElementById('bm'),
//     renderer: 'svg',
//     loop: true,
//     autoplay: true, go('about.html');
//     path: 'dataLine.json'
//   })connecting.hideOnTransparent();


// function.go(link){
//   location.replace(link);
// }
