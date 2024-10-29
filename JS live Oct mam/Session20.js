// document.write(window.innerHeight+"<br");
// document.write(window.innerWidth+"<br");
// document.write(window.screen.availHeight+"<br");
// document.write(window.screen.availWidth+"<br");

// document.write(location.href+"<br");
// document.write(location.host+"<br");
// document.write(location.hostname+"<br");
// document.write(location.protocol+"<br");
// document.write(location.port+"<br");

// // try it in the websites console to move forward and backward
// console.log("history.forward()");   
// console.log("history.back()");

function count_function(){
    if(typeof(Storage)!=="undefined"){
        if (localStorage.clickcount) {
            localStorage.clickcount=Number(localStorage.clickcount)+1;
        }
        else{
            localStorage.clickcount=1;
        }
        document.getElementById("buttonid").innerHTML="count is :--"+localStorage.clickcount;
    }
    else {
        document.getElementById("buttonid").innerHTML+="click on the button to check the count";
    }
}

function clear_count_function(){
    window.localStorage.clear();
}

// // set data
// localStorage.setItem("name", "dilli");

// //get data
// document.getElementById("getitemid").innerHTML = localStorage.getItem("name");
// // alert(localStorage.getItem("name"));


// jQuery or $
jQuery(document).ready(function(){
    // alert("Hi Dilli, this is jQuery");
//     // console.log($("#heading1"))............
});

    $('#heading1').css("color", "blue");
    $('.heading1').css('border',"2px solid black")
    $('h3').css("color", 'red')
    $('heading4').css({'color':'orange', 'border':'3px solid gray'})


$('#btn1').click(function(){
    $("#popup_div").css("border-color","green");
    $("#popup_div").hide();
    // $("#popup_div").hide(2000);
    // $("#popup_div").hide("slow");
    // $("#popup_div").hide("fast");
    })
$('#btn2').click(function(){
    // $("#popup_div").show();
    $("#popup_div").show(3000);
    // $("#popup_div").show("slow");
    // $("#popup_div").show("fast");
})
$('#btn3').click(function(){
    // $("#popup_div").toggle();
    // $("#popup_div").toggle(3000);
    // $("#popup_div").toggle("slow");
    $("#popup_div").toggle("fast");
})
$('#btn4').click(function(){
    // $("#popup_div").fadeIn();
    // $("#popup_div").fadeIn(3000);
    // $("#popup_div").fadeIn("slow");
    $("#popup_div").fadeIn("fast");
})
$('#btn5').click(function(){
    // $("#popup_div").fadeOut();
    // $("#popup_div").fadeOut(3000);
    $("#popup_div").fadeOut("slow");
    // $("#popup_div").fadeOut("fast");
})
$('#btn6').click(function(){
    $("#popup_div").fadeToggle();
    // $("#popup_div").fadeToggle(3000);
    // $("#popup_div").fadeToggle("slow");
    // $("#popup_div").fadeToggle("fast");
})
$('#btn7').click(function(){
    // $("#popup_div").slideUP();
    $("#popup_div").slideUp(3000);
    // $("#popup_div").slideUP("slow");
    // $("#popup_div").slideUP("fast");
})
$('#btn8').click(function(){
    // $("#popup_div").slideDown();
    // $("#popup_div").slideDown(3000);
    $("#popup_div").slideDown("slow");
    // $("#popup_div").slideDown("fast");
})
$('#btn9').click(function(){
    // $("#popup_div").slideToggle();
    // $("#popup_div").slideToggle(3000);
    // $("#popup_div").slideToggle("slow");
    $("#popup_div").slideToggle("fast");
})


