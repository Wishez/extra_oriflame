const siteApi = "http://localhost:8000";
// const siteApi = '';
export const registrationUrl = `${siteApi}/api/registration/`;
export const callbackUrl = `${siteApi}/api/callback/`;
export const sharesUrl = `${siteApi}/shares/api/current/shares/`;
export const shareUrl = `${siteApi}/shares/api/current/share`;
export const personalRoomUrl = `${siteApi}/personal_room/api`;
export const businessUrl = "http://biznesvinet.online/";

export const siteThemes = {
  white: {
    id: "white",
    topBottomBackgroundColor: "#fff",
    contactIconStyle: "green",
    bannerType: "decorative",
    logoColor: "#333"
  },
  black: {
    id: "black",
    topBottomBackgroundColor: "#333333",
    contactIconStyle: "pink",
    bannerType: "catalog",
    logoColor: "#ffffff"
  },
  green: {
    id: "green",
    topBottomBackgroundColor: "#CFDD93",
    contactIconStyle: "green",
    bannerType: "catalog",
    logoColor: "#333"
  },
  pink: {
    id: "pink",
    topBottomBackgroundColor: "#fff",
    contactIconStyle: "#FA8BC4",
    bannerType: "decorative",
    logoColor: "#333"
  }
};

export const siteThemesKeys = Object.keys(siteThemes);

export default siteApi;
