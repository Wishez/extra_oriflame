import {personalRoomUrl} from '@/constants/conf';



const personalRoom = {
  namespaced: true,
  state: {
    isRequesting: false,
    notFound: false
  },
  mutations: {
    // Abstract function for requesting data.
    fetchData(state, {
        url, 
        success, 
        reject,
        silent,
        raise404
    })  {
      if (!silent) {
        state.isRequesting = true;
      }

      return fetch(url)
        .then(response => {
          
          if (!response.ok) {
            state.notFound = true;

            if (raise404)  {
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
            
            success(data.consultant);

            if (!silent) {
              state.isRequesting = false;
            }
          }
        })
        .catch(error => {
          if (reject)
            reject(error);
          else
            console.log('error', error);
        });
    }
  },
  actions: {
     fetchConsultantData(context, {
      success, 
      reject=false,
      silent=false,
      consultant_number,
      raise404=false
    }) {

      context.commit(
        'fetchData', 
        {
          url: `${personalRoomUrl}/room_${consultant_number}/`,
          success, 
          reject,
          silent,
          raise404
      });
    }
  }
};

export default personalRoom;