window.addEventListener('message', (event) => {
    let item = event.data;
	let radio_activated = false;
	var color = document.getElementById('hud-color').style.color = "var(--main--color)";
	if (event.data.type == 'UPDATE_ID') {
		$(".id-id").html(event.data.id);
	}
	if (event.data.type == "UPDATE_VOICE") {
		if (event.data.isTalking) {
			var gadanie = document.getElementById("voice-glow");
            if (event.data.mode == 'Whisper') {
                gadanie.style.filter = "drop-shadow(0px 0px 5px "+ color +")";
            } 
            if (event.data.mode == 'Normal') {
                gadanie.style.filter = "drop-shadow(0px 0px 5px "+ color +")";
            }
            if (event.data.mode == 'Shouting') {
                gadanie.style.filter = "drop-shadow(0px 0px 5px "+ color +")";
            }
		} else {
			var gadanie = document.getElementById("voice-glow");
            gadanie.style.filter = "drop-shadow(0px 0px 0px #ffffff7a)";
			if (event.data.mode == 'Whisper') {
				$('#grad7').html('<stop offset="25%" style="stop-color:'+ color +';stop-opacity:1" /><stop offset="25%" style="stop-color:rgb(255, 255, 255);stop-opacity:1"/>')
			} else if (event.data.mode == 'Normal') {
				$('#grad7').html('<stop offset="60%" style="stop-color:'+ color +';stop-opacity:1" /><stop offset="60%" style="stop-color:rgb(255, 255, 255);stop-opacity:1"/>')
			} else if (event.data.mode == 'Shouting') {
				$('#grad7').html('<stop offset="100%" style="stop-color:'+ color +';stop-opacity:1" /><stop offset="100%" style="stop-color:rgb(255, 255, 255);stop-opacity:1"/>')
			}
		}
		return
	}
	
	if (event.data.type == 'UPDATE_HUD') {
			var hungerlevel = Math.floor(event.data.hunger)
			$('#grad3').html('<stop offset="' + hungerlevel + '%" style="stop-color:'+ color +';stop-opacity:1" /><stop offset="' + hungerlevel + '%" style="stop-color:rgb(255, 255, 255);stop-opacity:1"/>')

			var thirstlevel = Math.floor(event.data.thirst)
			$('#grad4').html('<stop offset="' + thirstlevel + '%" style="stop-color:'+ color +';stop-opacity:1" /><stop offset="' + thirstlevel + '%" style="stop-color:rgb(255, 255, 255);stop-opacity:1"/>')
		
			var armorlevel = Math.floor(event.data.armor)
			$('#grad2').html('<stop offset="' + armorlevel + '%" style="stop-color:'+ color +';stop-opacity:1" /><stop offset="' + armorlevel + '%" style="stop-color:rgb(255, 255, 255);stop-opacity:1"/>')
		
			var oxygenlevel = Math.floor(event.data.nurkowanie)
			$('#grad5').html('<stop offset="' + oxygenlevel + '%" style="stop-color:'+ color +';stop-opacity:1" /><stop offset="' + oxygenlevel + '%" style="stop-color:rgb(255, 255, 255);stop-opacity:1"/>')

			var hplevel = (Math.floor(event.data.zycie))
			$('#grad1').html('<stop offset="' + hplevel + '%" style="stop-color:'+ color +';stop-opacity:1" /><stop offset="' + hplevel + '%" style="stop-color:rgb(255, 255, 255);stop-opacity:1"/>')
		
		if (event.data.isdead) {
			$('#grad1').html('<stop offset="0%" style="stop-color:'+ color +';stop-opacity:1" /><stop offset="0%" style="stop-color:rgb(255, 255, 255);stop-opacity:1"/>')
		}
		//if ((event.data.armor) <= 0) {
		//	$('#armor').fadeOut(100);
		//}
		//if ((event.data.armor) > 0) {
		//	$('#armor').fadeIn(100);
		//}
		
		//if (event.data.inwater) {
		//	$('#oxygen').fadeIn(1000);
		//}
		//if (!event.data.inwater) {
		//	$('#oxygen').fadeOut(1000);
		//}
		return
	}
	if (event.data.showradio == true) {
		radio_activated = true;
		$(".radio").css("opacity","1")
	}
	if (event.data.hideradio == true) {
		radio_activated = false;
		$(".radio").css("opacity","0")
	}
	if (event.data.radionumber) {
		$(".radionumber").text(event.data.radionumber);
	}
	if (event.data.radiocount) {
		$(".radiopeople").text(event.data.radiocount);
	}
});

function checkURL(url) {
	return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}

window.addEventListener("message", function (event) {
    switch (event.data.action) {
    case "show_hud":
        $(".hudedit").css("display","block")
    break;
    }
})
  
document.onkeyup = function (data) {
    if (data.which == 27 ) {
      $.post('http://sv_hud/stopedit', JSON.stringify({}));
      $(".hudedit").css("display","none")
    
    }
};
  
function str1() {
    input = document.getElementById("hud-color").value
    $(".option-1 svg g").css("fill",input)
    $(".option-2 svg g").css("fill","#fff")
    $(".option-3 svg g").css("fill","#fff")
	$(".option-4 svg g").css("fill","#fff")
    $("#ch1").css("display","block")
    $("#ch2").css("display","none")
    $("#ch3").css("display","none")
	$("#ch4").css("display","none")
    
}
function str2() {
    input = document.getElementById("hud-color").value
    $(".option-1 svg g").css("fill","#fff")
    $(".option-2 svg g").css("fill",input)
    $(".option-3 svg g").css("fill","#fff")
	$(".option-4 svg g").css("fill","#fff")
    $("#ch1").css("display","none")
    $("#ch2").css("display","block")
    $("#ch3").css("display","none")
	$("#ch4").css("display","none")
}

function str3() {
    input = document.getElementById("hud-color").value
    $(".option-1 svg g").css("fill","#fff")
    $(".option-2 svg g").css("fill","#fff")
    $(".option-3 svg g").css("fill",input)
	$(".option-4 svg g").css("fill","#fff")
    $("#ch1").css("display","none")
    $("#ch2").css("display","none")
    $("#ch3").css("display","block")
	$("#ch4").css("display","none")
}

function str4() {
    input = document.getElementById("hud-color").value
    $(".option-1 svg g").css("fill","#fff")
    $(".option-2 svg g").css("fill","#fff")
	$(".option-3 svg g").css("fill","#fff")
    $(".option-4 svg g").css("fill",input)
    $("#ch1").css("display","none")
    $("#ch2").css("display","none")
    $("#ch3").css("display","none")
	$("#ch4").css("display","block")
}

function end() {
	$.post('http://sv_hud/stopedit', JSON.stringify({}));
	$(".hudedit").css("display","none")
}

$("#checkbox-hud").click(()=> { 
    if( $('#checkbox-hud')[0].checked == true){
        $("#hud").css("opacity","0")
    }else{
        $("#hud").css("opacity","1")
    }
});
$("#checkbox-watermark").click(()=> { 
    if( $('#checkbox-watermark')[0].checked == true){
        $(".id-main").css("opacity","0")
    }else{
        $(".id-main").css("opacity","1")
    }
});

$("#checkbox-cinema").click(()=> { 
    if( $('#checkbox-cinema')[0].checked == true){
        $(".contin").css("opacity","0")
        $(".cinema").css("opacity","1")
        $("#ui").css("opacity","0")
        $(".luzzxd").css("opacity","0")
		$(".id-main").css("opacity","0")
        //$.post('http://hud/MapHide', JSON.stringify({}));
    }else{
        $(".contin").css("opacity","1")
        $(".cinema").css("opacity","0")
        $("#ui").css("opacity","1")
        $(".luzzxd").css("opacity","1")
		$(".id-main").css("opacity","1")
        //$.post('http://hud/UnMapHide', JSON.stringify({}));
    }
});

$("#checkbox-hp").click(()=> { 
    if( $('#checkbox-hp')[0].checked == true){
        $("#hp").css("display","none")
    }else{
        $("#hp").css("display","block")
    }
});
$("#checkbox-armor").click(()=> { 
    if( $('#checkbox-armor')[0].checked == true){
        $("#armor").css("display","none")
    }else{
        $("#armor").css("display","block")
    }
});
$("#checkbox-food").click(()=> { 
    if( $('#checkbox-food')[0].checked == true){
        $("#hunger").css("display","none")
    }else{
        $("#hunger").css("display","block")
    }
});
$("#checkbox-water").click(()=> { 
    if( $('#checkbox-water')[0].checked == true){
        $("#thirst").css("display","none")
    }else{
        $("#thirst").css("display","block")
    }
});
$("#checkbox-stamina").click(()=> { 
    if( $('#checkbox-stamina')[0].checked == true){
        $("#oxygen").css("display","none")
    }else{
        $("#oxygen").css("display","block")
    }
});
$("#checkbox-voice").click(()=> { 
    if( $('#checkbox-voice')[0].checked == true){
        $("#sound").css("display","none")
    }else{
        $("#sound").css("display","block")
    }
});
$("#checkbox-position").click(()=> { 
    if( $('#checkbox-position')[0].checked == true){
        $("#hud").css("opacity","0")
		$(".id-main").css("opacity","0")
     
        setTimeout(() => {
            $("li").css("float","left")
            $("#hud").css({"top":"95%","border-radius":"15px 15px 0 0","right":"40%","transform-origin":"center bottom"})
			$(".id-main").css({"top":"98%","right":"64%"})
            setTimeout(() => {
                $("#hud").css("opacity","1")
				$(".id-main").css("opacity","1")
            }, 350);
        }, 150);    
    }else{
        $("#hud").css("opacity","0")
		$(".id-main").css("opacity","0")
      
        setTimeout(() => {
            $("li").css("float","none")
            $("#hud").css({"top":"32%","border-radius":"15px 0 0 15px","right":"0%","transform-origin":"center right"})
			$(".id-main").css({"top":"29.9%","right":"0%"})
            setTimeout(() => {
                $("#hud").css("opacity","1")
				$(".id-main").css("opacity","1")
            }, 350);
        }, 150);
    }
});

$("#checkbox-wariant").click(()=> { 
    if( $('#checkbox-wariant')[0].checked == true){
		wariant = wariant == 1 ? 2 : 1 
    }else{
		wariant = wariant == 2 ? 1 : 2 
    }
});

let wariant = 1
let block = false
var speedText = '';

$(document).ready(function(){
	window.addEventListener("message", function(event){

		if (event.data.type == 'UPDATE_SEATBELT') {
			if (event.data.belt) {
				$(".pas").removeClass("pulsik")
				$('#xegrad1 stop').attr('offset', 100 + '%')
			} else {
				$(".pas").addClass("pulsik")
				$('#xegrad1 stop').attr('offset', 0 + '%')
			}
		}
		
		if(event.data.paliwo){
			var color = document.getElementById('hud-color').style.color = "var(--main--color)";
			$('#fuelBG').html('<stop offset="' + event.data.paliwo + '%" style="stop-color:'+ color +';stop-opacity:1" /><stop offset="' + event.data.paliwo + '%" style="stop-color:rgb(255, 255, 255);stop-opacity:1"/>')
		}
		
		if(event.data.lights) {
		  let lightlevel = Number(event.data.lights)

		  if(lightlevel == 2){
			$('.lights').attr('fill', '#FFFF00')
		  }
		  else if(lightlevel == 3){
			$('.lights').attr('fill', '#0000FF')
		  }
		  else{
			$('.lights').attr('fill', '#FFFFFF')
		  }
		}
	})
});

function kolorek() {
    //kolor
    input = document.getElementById("hud-color").value
    localStorage.setItem("kolor", input)
    //kolor
    $("#grad1 stop ").css("stop-color",input)
    $("#grad2 stop ").css("stop-color",input)
    $("#grad3 stop ").css("stop-color",input)
    $("#grad4 stop ").css("stop-color",input)
    $("#grad5 stop ").css("stop-color",input)
    $("#grad7 stop ").css("stop-color",input)
	$("#xegrad1 stop ").css("stop-color",input)
    $(".option-1 svg g").css("fill",input)
    $(".gear").css("border-color",input)
    $(".cont-hud h2 ").css("color",input)
    $("#ch3 h2").css("color",input)
    $("#myGradient stop ").css("stop-color",input)
    $(".id-id ").css("color",input)
    $(":root").css("--main--color",input)
	color = input
}


window.onload = function () {
        var load =  localStorage.getItem("kolor")
        //kolor
        $("#grad1 stop ").css("stop-color",load)
        $("#grad2 stop ").css("stop-color",load)
        $("#grad3 stop ").css("stop-color",load)
        $("#grad4 stop ").css("stop-color",load)
        $("#grad5 stop ").css("stop-color",load)
        $("#grad7 stop ").css("stop-color",load)
        $(".gear").css("border-color",load)
        $(".option-1 svg g").css("fill",load)
        $(".cont-hud h2 ").css("color",load)
        $("#myGradient stop").css("stop-color",load)
        $(".id-id").css("color",load)
		$("#xegrad1 stop ").css("stop-color",load)
		$(":root").css("--main--color",load)
        document.querySelector("#hud-color ").value =load
        color = load
};