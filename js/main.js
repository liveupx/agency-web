$('.cs-carousel').owlCarousel({
    loop:true,
    margin:0,
    dots: true,
    nav: false,
    autoplay: true,
    smartSpeed: 1500,
    dotsEach: true,
    // navText: ["<img src='img/arrow-left.svg'>","<img src='img/arrow-right.svg'>"],
    responsive:{
        0:{
            items:1,
            slideBy: 1,
        },
        600:{
            items:1,
            slideBy: 1,
        },
        1000:{
            items:1,
            slideBy: 1,
        }
    }
});
function filechange(e){
let fileName=document.getElementById('file').files[0].name;
document.getElementById('filename').innerHTML=fileName;
document.getElementById('closebutton').style.display="block";
console.log("",fileName);

}

function closebtn() {
    console.log("hghghgh");
    // var output = document.getElementById("output");
    // var previousText = output.innerText;
    // output.innerText = previousText + " " + previousText;
    document.getElementById('closebutton').style.display="none";
    document.getElementById('filename').innerHTML="Share Some Files with Us"
  }


