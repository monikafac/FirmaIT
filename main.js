//mechanizm do zmiany koloru w menu wraz z pojawianiem się sekcji
function changeMenu(){
const scrollSize = window.scrollY;
const home =  document.querySelector('.menuHome');
const offer =  document.querySelector('.menuOffer');
const contact =  document.querySelector('.menuContact');


//wysokosc sekcji
const BackgroundHeight = document.querySelector('.background').clientHeight;
const OfferHeight = document.querySelector('.offer').clientHeight;
//odległość od początku sekcji
const offerFromBeggining = document.querySelector('.offer').offsetTop;

if (scrollSize < BackgroundHeight) {
   home.style.color="#1DE9B6";
   offer.style.color="white";
   contact.style.color="white";
   } else if (scrollSize < OfferHeight + offerFromBeggining) {
    offer.style.color="#1DE9B6";
    contact.style.color="white";
    home.style.color="white";
   } else{
    contact.style.color="#1DE9B6";
    offer.style.color="white";
    home.style.color="white";
   }
}



//przechodzenie do sekcji strony po kliknięciu

function changeSection(button, section){
    $(button).on('click', function(){
        $("body, html").animate({
            scrollTop: $(section).offset().top
        },500)
    })
}


window.addEventListener('scroll', changeMenu);
changeSection('.menuHome', ".home");
changeSection('.menuOffer', '.offer');
changeSection('.menuContact', '.contact');