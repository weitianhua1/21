// var img4=document.querySelector('#images>a:nth-child(4)');
// var img4=document.getElementById('images').children[4];
// var img4=document.getElementsByClassName('hiddenImg')[3];
// var img4=document.getElementsByTagName('a')[4];

// console.log(img4);

// img4.style.dispaly="block";
// img0.style.dispaly="none";

var imagesA=document.getElementById("images").children;
var txtList=document.querySelectorAll(".txtItem");
console.log(txtList);

// console.log(imagesA);

// var img4=document.getElementById('images').children[4];
// img4.style.display="block";

// var img0=document.getElementsByClassName('displayImg')[0];
// img0.style.display="none";

var currentNo=0;
var nodeLength=8;

function changeImg(){
  
    for(var i=0;i<nodeLength;i++){

        imagesA [i].className="hiddenImg";
        console.log(imagesA[i]);
        txtList[i].className="txtItem normalColor"
        
    }

    imagesA[currentNo].className="displayImg";
txtList[currentNo].className="txtItem heighlightColor";

    if(currentNo<7) currentNo++;
    else{
        currentNo=0;
    }
// console.log(currentNo);


}
var timer=window.setInterval(changeImg,1000)
function stopChange (){
    window.clearInterval(timer);
}
function startChange(){
    timer=window.setInterval(changeImg,1000);
}

var sliderDiv=document.querySelector(".slider");
// console.log(imagesDiv);
sliderDiv.addEventListener('mouseover',stopChange);
sliderDiv.addEventListener('mouseout',startChange);

for(var i=0;i<txtList.length;i++){
    txtList[i].addEventListener('mouseover',gotoImg);
    txtList[i].no=i;
;    console.log(txtList[i].no);
}
function gotoImg(){
//    console.log(this.no);
   currentNo=this.no;
   changeImg();
    
}
var leftButton=document.querySelector('.leftButton');
var rightButton=document.querySelector('.rightButton');

leftButton.addEventListener('click',leftImg);
rightButton.addEventListener('click',rightImg)

function leftImg(){
    for(var i=0;i<nodeLength;i++){

        imagesA [i].className="hiddenImg";
        // console.log(imagesA[i]);
        txtList[i].className="txtItem normalColor"
        
    }

    if(currentNo>0) {currentNo--;}
    else{
        currentNo=7;
    }

    imagesA [i].className="hiddenImg";
    // console.log(imagesA[i]);
    txtList[i].className="txtItem normalColor"

}
function rightImg(){
    if(currentNo<7) {currentNo++;}
    else{
        currentNo=0;
    }
    console.log(currentNo);
    changeImg();
}