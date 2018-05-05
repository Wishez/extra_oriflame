import Vue from "vue";
import VueRouter from "vue-router";

import MainPage from "@/templates/MainPage";
import RegistrationPage from "@/templates/RegistrationPage";
import BusinessPage from "@/templates/BusinessPage";
import MediaPage from "@/templates/MediaPage";
import PersonalRoomPage from "@/templates/PersonalRoomPage";
import NotFound from "@/templates/404Page";
import SharesPage from "@/templates/SharesPage";
import SharePage from "@/templates/SharePage";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/share/:slug",
      component: SharePage,
      name: "SharePage",
      beforeEnter: (to, from, next) => {
        localStorage.single_share_slug = to.params.slug;

        next();
      }
    },
    {
      path: "/media",
      component: MediaPage,
      name: "MediaPage"
    },
    {
      path: "/shares",
      component: SharesPage,
      name: "SharesPage"
    },
    {
      path: "/business",
      component: BusinessPage,
      name: "BusinessPage"
    },
    {
      path: "/registration",
      component: RegistrationPage,
      name: "RegistrationPage"
    },
    {
      path: "/",
      component: MainPage,
      name: "MainPage"
    },
    {
      path: "/registration/:user_led_number",
      name: "ReferalRegistrationPage",
      redirect: to => {
        localStorage.user_led_number = to.params.user_led_number;

        return "/registration";
      }
    },
    {
      path: "/personal_room/:consultant_number",
      name: "PersonalRoomPage",
      component: PersonalRoomPage,
      beforeEnter: (to, from, next) => {
        localStorage.consultant_room_number = to.params.consultant_number;

        next();
      }
    },
    {
      path: "*",
      component: NotFound,
      name: "404"
    }
  ]
});

export default router;
