localStorage.setItem('openedMenu', 'false');

//execute some functions when the page is loaded
window.onload = function(){
    hideLoader();
    footerYear();
    setTimeout(showCookiesMessage, 3000);
}


//menu icon phone
function menuIcon(x) 
{  
    x.classList.toggle("change");
    $("nav ul").toggleClass("show-menu");

    if(localStorage.getItem('openedMenu') == 'false'){
        document.querySelector('html').style.overflowY = 'hidden';
        localStorage.setItem('openedMenu', 'true');
    }else{
        document.querySelector('html').style.overflowY = 'auto';
        localStorage.setItem('openedMenu', 'false');
    }
}

//scroll to top function
$(window).scroll(function(){
    if($(window).scrollTop() > 300){          
        $('.scroll-top').fadeIn();
    }else{
        $('.scroll-top').fadeOut();
    }
});
                
$(document).on('click','.scroll-top',function () {
    $("html, body").animate({scrollTop:0}, 1000);
});

//hide the cookies message when accepted for the current session
function cookiesAccepted(){
    sessionStorage.setItem('accepted', 'true');
    let cookieBox = document.getElementById('cookie-box');
    cookieBox.style.display = 'none';
}

//show cookies message once per session
function showCookiesMessage(){
    let isAccepted = sessionStorage.getItem('accepted');

    if(isAccepted != 'true' || isAccepted == null){          
        let cookieBox = document.getElementById('cookie-box');        
        cookieBox.style.display = 'flex'; 
        cookieBox.animate([{bottom: '-100%'}, {bottom: '0'}], {duration: 2000, iterations: 1, easing: 'ease-in'});         
    }
}

//hide loader function
function hideLoader(){
    let loaderBox = document.getElementById('loading-overlay');
    let body = document.querySelector('body');

    body.style.overflowY = 'auto';
    loaderBox.animate([{opacity: '1'}, {opacity: '0'}], {duration: 1000, iterations: 1});
    loaderBox.style.display = 'none';
}

//image zoom functions
function showModal(src){
    let modalBox = document.querySelector('.modal');
    modalBox.style.display = 'flex'
    modalBox.animate([{transform: 'scale(0.5)'}, {transform: 'scale(1)'}], {duration: 300, easing: 'ease-out'});
    let source = $(src).attr('src');
    $(".full-img").attr('src', source);
}
            
function hideModal(){
    document.querySelector('.modal').style.display = 'none';
}

//footer current year function
function footerYear(){
    let element = document.querySelector("#footer-text");
    let currentYear = new Date();

    element.innerHTML = `© 2009-${currentYear.getFullYear()} LadyRose Ltd. All Rights Reserved.`;
}