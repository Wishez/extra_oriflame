// import page from 'page';
console.log(Vue);
console.log(page);
// import { TweenMax, Linear } from 'gsap';
// import './intlTelInput.js';
// import lozad from 'lozad';

// $(document).on('click', '.not-follow', function(e) {
//   const url = $(this).attr('href');
  
//   window.open(url);
  
//   e.preventDefault();
// }); // end click

// // Тесты
// // if (!Modernizr.placeholder) {
// //    $.html5support();
// //    $.placeholder(); 
// // }





// $(document).on('click', '.slideTo', function() {
//   $('html, body').animate({
//     scrollTop: $($(this).attr('href')).offset().top
//   }, 600, Linear.ease);
// });

// $(document).on('click', '.not-follow', function(e) {
	 //  const url = $(this).attr('href');
	  
	 //  window.open(url);
	  
	 //  e.preventDefault();

// }); // end click



// const PHONES = (function() {
//   $(function() {
    
//     $('#id_callback_phone, #id_phone_number').intlTelInput({
//       initialCountry: 'ru'
//     });
  
//     $(document).on('input changepropery', '#id_phone_number, #id_callback_phone', function() {
//       const $this = $(this);
//       let currentValue = $this.val();
//       currentValue = currentValue.slice(currentValue.indexOf(' ') + 1);

//       if (currentValue.indexOf('+') !== -1)
//         return false;
      
//       const title = $this.parent().find('.selected-flag').attr('title');
//       const code = title.slice(title.lastIndexOf(' ') + 1) + ' ';
//       const newValue = code + currentValue;

//       $this.val(newValue);
//     });
//   }); 
// }());




// const CALLBACK = (function() {
//   $(function() {
//     $(document).on('submit', '#callbackForm', function(event) {
//       event.preventDefault();
//       registerCallback($(this));
//     });
//   });// end load

//   function registerCallback($form) {  
      

//     let requestData = {
//         'callback_name': $form.find('#id_callback_name').val(),
//         'callback_phone': $form.find('#id_callback_phone').val()
//       },
//       csrftoken = $form.find('input[name="csrfmiddlewaretoken"]').attr('value');

  
//     $.ajaxSetup({
//       url: '/api/register_callback/',
//       type: 'POST',
//       data: requestData,
//       beforeSend: function(xhr, settings) {
//         if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
//           xhr.setRequestHeader('X-CSRFToken', csrftoken);
//         }
//       }
//     });
        
//     $.ajax({
//       success: function(respond) {
//         $form.html(respond);
//       },
//       error : function(xhr,errmsg,err) {
//         console.log('failure');
//       }
//     });
//   } // end registerCallback
//   function csrfSafeMethod(method) {
//     return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
//   }
// }());
