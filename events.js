let photos = [
    "Images/000422600002.jpg",
    "Images/000422610002.jpg",
    "Images/000422610005.jpg",
    "Images/chubbers.jpg",
    "Images/chubbers2.jpg",
    "Images/IMG_4044.JPG"
]
let index = 0;
let firstImage = document.getElementById("img1");
firstImage.src = photos[0];
photos.src = photos[index];

console.log(photos);

function scrollImage(direction){
    if(direction == "left"){
        index--;
    }else{
        index++;
        index %= photos.length;
    }

    if(index<0){
        index = photos.length -1;
    }
    
}