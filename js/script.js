$(document).ready(function() {
    $('.accordion-item__trigger').click(function() {
        $(this).next('.accordion-item__content').toggle(); /* Отталкиваемся от элемента на который нажали , можно использовать slideToggle */
    }); 
});