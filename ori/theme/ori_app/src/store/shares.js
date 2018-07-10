import { sharesUrl, shareUrl } from "@/constants/conf";

const shares = {
  namespaced: true,
  state: {
    isRequesting: false,
    notFound: false
  },
  mutations: {
    raise404(state) {
      state.notFound = false;
    },
    // Abstract function for requesting data.
    fetchData(state, { url, success, reject, silent, raise404 }) {
      if (!silent) {
        state.isRequesting = true;
      }

      return fetch(url)
        .then(response => {
          // console.log(response.ok);
          if (!response.ok) {
            state.notFound = true;
            if (raise404) {
              raise404();
            }
            return false;
          } else {
            return response.json();
          }
        })
        .then(data => {
          if (data) {
            state.notFound = false;
            success(data);

            if (!silent) {
              state.isRequesting = false;
            }
          }
        })
        .catch(error => {
          if (reject) reject(error);
          else console.log(error);
        });
    }
  },
  actions: {
    fetchShares(context, { success, reject = false, silent = false }) {
      context.commit("fetchData", {
        url: sharesUrl,
        success,
        reject,
        silent
      });
    },
    fetchShare(
      context,
      { slug, success, reject = false, silent = false, raise404 = false }
    ) {
      context.commit("fetchData", {
        url: `${shareUrl}/${slug}/`,
        success,
        reject,
        silent,
        raise404
      });
    }
  }
};

export default shares;
