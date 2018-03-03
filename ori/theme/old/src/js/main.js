import notFollow from '../constants/pureFunctions';
import Vue from 'vue';
import routes from '../constants/routes';
import page from 'page';


const app = new Vue({
  el: '#main',
  data: {
    currentRoute: window.location.pathname,
    // ViewComponent: { render: h => h('div', 'loading...') }
  },
  computed: {
    ViewComponent() {
      const matchingView = routes[this.currentRoute];
      const Component = matchingView
        ? require('../pages/' + matchingView + '.vue')
        : require('../pages/404.vue');
      console.log(matchingView);
      console.log(Component);
      return Component;
    }
  },
  render(h) {
    return h(this.ViewComponent);
  }
});

// page('/share/:slug', () => app.ViewComponent = new Vue(...require('../pages/Share.js')));
// page('/personal_room/:consultant_num', () => app.ViewComponent = require('../pages/PersonalRoom.js'));

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname;
});

// Object.keys(routes).forEach(route => {
//   console.log('bind', route);
//   page(route, () => {
//     console.log(route, 'current');
//     return app.ViewComponent = require(`../pages/${routes[route]}.vue`);
//   });
// });
// page('/', () => {
//   const Component = require('../pages/Main.vue');

//   return app.ViewComponent = Component;
    
// });
// page('/registration', () => {

// });
// page('/registration/:consultant_num', () => {});
// page('/videos', () => {});
// page('/business', () => {});
// page('/shares', () => {});



Vue.component('external-link', {
  props: ['href'],
  template: `<a 
    class="externalLink" 
    v-bind:href="href"
    v-on:click="notFollow"
    >
      <slot></slot>
      <i class="externalLink__icon fas fa-external-link-alt"></i>
    </a>`,
  methods: {
    notFollow
  }
});

Vue.component('nav-link', {
  props: ['href'],
  template: `<li>
    <a v-bind:class="{ navLink: true, navLink_active: isActive }"
      v-bind:aria-describedby="isActive ? 'active_page' : null"
      role="presentation"
      v-bind:href="href"
      @click="go"
    >
      <slot></slot>
    </a>
  </li>`,
  computed: {
    isActive() {
      return this.href === window.location.pathname;
    }
  },
  methods: {
    go(event) {
      event.preventDefault();
      this.$root.currentRoute = this.href;
      window.history.pushState(
        null,
        routes[this.href],
        this.href
      );
    }
  }
});

const header = new Vue({
  el: '#header'
});


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
