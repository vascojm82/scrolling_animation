$(window).scroll(function(){
    var wintop = $(window).scrollTop();
    var currentScrollPositionPercent= Math.floor((wintop / window.innerHeight) * 100);
    var pic1 = $('#apple1');
    var pic2 = $('#apple2');
    var pic3 = $('#apple3');
    var pic4 = $('#apple4');
    var pic5 = $('#apple5');
    var pic6 = $('#apple6');
    var pic7 = $('#apple7');
    var pic8 = $('#apple8');
    var pic_block = $('#blockID');
    var pic_logo = $('#logo-image');
    var pic_logo2 = $('#logo-image2');
    
    console.log(currentScrollPositionPercent);
	
	if(currentScrollPositionPercent >= 0 && currentScrollPositionPercent <=10){ 
        console.log('Within Range: ');
        console.log(currentScrollPositionPercent + "%");
        pic_logo.removeClass("logo-image");
        pic1.removeClass("apple1");
        pic2.removeClass("apple2");
        pic3.removeClass("apple3");
        pic4.removeClass("apple4");
    }
	
    
    if(currentScrollPositionPercent >= 10 && currentScrollPositionPercent <=15){ 
        console.log('Within Range: ');
        console.log(currentScrollPositionPercent + "%");
        pic_logo.addClass("logo-image");
		pic_logo2.removeClass("logo-image2");
        pic1.removeClass("apple1");
        pic2.removeClass("apple2");
        pic3.removeClass("apple3");
        pic4.removeClass("apple4");
    }
	
	
	else if(currentScrollPositionPercent >= 15 && currentScrollPositionPercent <=60){ 
        console.log('Within Range: ');
        console.log(currentScrollPositionPercent + "%");
        pic_logo2.removeClass("logo-image2");
        pic_block.removeClass("blockID2");
		pic_block.removeClass("blockID");
        pic_logo.addClass("logo-image");
        pic1.addClass("apple1");
        pic2.addClass("apple2");
        pic3.addClass("apple3");
        pic4.addClass("apple4");
    }
    
    else if(currentScrollPositionPercent >= 61 && currentScrollPositionPercent <=90){ 
        console.log('Within Range: ');
        console.log(currentScrollPositionPercent + "%");
		pic_logo2.removeClass("logo-image2");
        pic_block.removeClass("blockID2");
		pic_block.removeClass("blockID");
        pic_logo.addClass("logo-image");
        pic1.addClass("apple1");
        pic2.addClass("apple2");
        pic3.addClass("apple3");
        pic4.addClass("apple4");
		pic_block.addClass("blockID");
    }
    
    else if(currentScrollPositionPercent >= 91 && currentScrollPositionPercent <=130){
		
        pic_block.addClass("blockID2");
        pic_logo.removeClass("logo-image");
		pic_logo2.removeClass("logo-image2");
        pic1.removeClass("apple1");
        pic2.removeClass("apple2");
        pic3.removeClass("apple3");
        pic4.removeClass("apple4");
    }
    
  else if(currentScrollPositionPercent >= 131 && currentScrollPositionPercent <=170){
	  	pic_block.addClass("blockID2");
	  	pic_logo2.addClass("logo-image2");
	  	pic_logo.removeClass("logo-image");
	  	pic1.removeClass("apple1");
        pic2.removeClass("apple2");
        pic3.removeClass("apple3");
        pic4.removeClass("apple4");
        
        pic5.removeClass('apple5');
        pic6.removeClass('apple6');
        pic7.removeClass('apple7');
        pic8.removeClass('apple8');
    }
    
     else if(currentScrollPositionPercent >= 171 && currentScrollPositionPercent <=220){
		pic_block.addClass("blockID2");
		pic_logo2.addClass("logo-image2");
		pic_logo.removeClass("logo-image");
	  	pic1.removeClass("apple1");
        pic2.removeClass("apple2");
        pic3.removeClass("apple3");
        pic4.removeClass("apple4");
        pic5.addClass('apple5');
        pic6.addClass('apple6');
        pic7.addClass('apple7');
        pic8.addClass('apple8');
    }
    
    else if(currentScrollPositionPercent >= 221){ 
        console.log('Out of Bounds: ');
        console.log(currentScrollPositionPercent + "%");
		pic_logo.removeClass("logo-image");
        pic1.removeClass("apple1");
        pic2.removeClass("apple2");
        pic3.removeClass("apple3");
        pic4.removeClass("apple4");
		pic_block.removeClass("blockID");
        pic5.removeClass('apple5');
        pic6.removeClass('apple6');
        pic7.removeClass('apple7');
        pic8.removeClass('apple8');
        pic_logo2.removeClass("logo-image2");
        pic_block.removeClass("blockID2");
       
        }
})