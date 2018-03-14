import {sharesUrl, shareUrl} from '@/constants/conf';



const shares = {
  namespaced: true,
  state: {
    isRequesting: false,
    isUpdeting: false,
    shareSlug: '',
  },
  mutations: {
    // Abstract function for requesting data.
    fetchData(state, {
        url, 
        success, 
        reject,
        silent
    })  {
      if (!silent) {
        state.isRequesting = true;
      }

      return fetch(url)
        .then(data => data.json())
        .then(response => {
          success(response);
          if (!silent) {
            state.isRequesting = false;
          }
        })
        .catch(error => {
          if (reject)
            reject(error);
          else
            console.log(error);
        });
    }
  },
  actions: {
     fetchShares(context, {
      success, 
      reject=false,
      silent=false
    }) {
      context.commit(
        'fetchData', 
        {
          url: sharesUrl,
          success, 
          reject,
          silent
      });

    },
    fetchShare(context, {
      slug, 
      success, 
      reject=false,
      silent=false
    }) {
        context.commit(
          'fetchData', 
          {
            url: `${shareUrl}/${slug}/`,
            success,
            reject,
            silent
        });
        
    }
  }
};

export default shares;