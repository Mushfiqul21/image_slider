const backImg = document.getElementById('backward');
const forwardImg = document.getElementById('forward');
const images = ["1.jpg", "2.jpg", "3.jpg"];
var imgTag = document.querySelector('img');
var count = 0;

backImg.addEventListener('click', function(){
    count--;
    if(count < 0)
    {
        count = images.length - 1;
        imgTag.src = images[count];
    }
    else
    {
        imgTag.src = images[count];

    }

})

forwardImg.addEventListener('click', function(){
    count++;
    if(count>=images.length)
    {
        count = 0;
        imgTag.src = images[count];
    }
    else
    {
        imgTag.src = images[count];

    }

})