
var writeUs = document.querySelector(".write-us");
var popup = document.querySelector(".modal-write");
var closeModal = document.querySelector(".write-us-button-close");
var userName = popup.querySelector(".write-us-name");
var locattion = document.querySelector(".more-about-company");
var bigMap = document.querySelector(".modal-map");
var closeMap = bigMap.querySelector(".write-us-button-close");
var switchSlideRight = document.querySelector("[for=switch-2]");
var slider = document.querySelector(".main-slider");
var switchSliderLeft = document.querySelector("[for=switch-1]");
var titleLeftSlide = document.querySelector(".left-slide");
var titleRightSlide = document.querySelector(".right-slide");
var sectionService = document.querySelector(".services");


var buttonDelivery = sectionService.querySelector("[for=delivery-item]");
var buttonGuarantee = sectionService.querySelector("[for=guarantee-item]");
var buttonCredit = sectionService.querySelector("[for=credit-item]");


var deliveryDescription = sectionService.querySelector(".services-delivery-description");
var guaranteeDescription = sectionService.querySelector(".services-guarantee-description");
var creditDescription = sectionService.querySelector(".services-credit-description");

buttonDelivery.addEventListener("click", function(){
	if (sectionService.classList.contains("services-guarantee") || sectionService.classList.contains("services-credit") ) {
        sectionService.classList.remove("services-guarantee");
        sectionService.classList.remove("services-credit");
    }
    
    if (deliveryDescription.classList.contains("visually-hidden")){
        deliveryDescription.classList.remove("visually-hidden")
    }
    
	sectionService.classList.add("services-delivery");
    creditDescription.classList.add("visually-hidden");
    guaranteeDescription.classList.add("visually-hidden");
})


buttonGuarantee.addEventListener("click", function(){
    if (sectionService.classList.contains("services-credit") || sectionService.classList.contains("services-delivery") ) {
        sectionService.classList.remove("services-credit");
        sectionService.classList.remove("services-delivery");
    }
    
    if (guaranteeDescription.classList.contains("visually-hidden")){
        guaranteeDescription.classList.remove("visually-hidden")
    }
    
	sectionService.classList.add("services-guarantee");
    deliveryDescription.classList.add("visually-hidden");
    creditDescription.classList.add("visually-hidden");
})

buttonCredit.addEventListener("click", function(){
	if (sectionService.classList.contains("services-guarantee") || sectionService.classList.contains("services-delivery") ) {
        sectionService.classList.remove("services-guarantee");
        sectionService.classList.remove("services-delivery");
    }
    
    if (creditDescription.classList.contains("visually-hidden")){
        creditDescription.classList.remove("visually-hidden")
    }
    
	sectionService.classList.add("services-credit");
    deliveryDescription.classList.add("visually-hidden");
    guaranteeDescription.classList.add("visually-hidden");
})


writeUs.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	userName.focus();	
});

closeModal.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
})

locattion.addEventListener("click", function(evt) {
    evt.preventDefault();
    bigMap.classList.add("modal-map-show");
})

closeMap.addEventListener("click", function(evt) {
	evt.preventDefault();
	bigMap.classList.remove("modal-map-show");
})


switchSlideRight.addEventListener ("click", function(){
    slider.classList.add("main-slider-2");
    titleLeftSlide.classList.add("visually-hidden")
    titleRightSlide.classList.remove("visually-hidden");
})

switchSliderLeft.addEventListener ("click", function() {
    if (slider.classList.contains("main-slider-2"));
    titleRightSlide.classList.add("visually-hidden");
    titleLeftSlide.classList.remove("visually-hidden");
    slider.classList.remove("main-slider-2");
})




























































