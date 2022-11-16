import { createStore } from 'vuex'

import axios from 'axios'

const store = createStore({
  state: {
    headerAPI : {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY4NTA2ODAyLCJleHAiOjE2NzEwOTg4MDJ9.W4Nlz9o5yr7CQGf6rnO8zSeOUE7b9u3YUMQ5xjPRCHk`,
      accept: 'application/json'
    },
  },
  mutations: {

    call_api (state , data) {

    const header = {

        headers: {
            'Authorization': this.state.headerAPI.Authorization,
            'accept': this.state.headerAPI.accept
        }

    }

      axios
      .get('https://buuk-api.herokuapp.com'+data.url, header)
      .then(response => {
          if ( response.status === 200 ) {
              return data.callback(response.data);
          }
      }).catch(error => {
          console.log(error.response.status + " " + error.response.statusText + " " + error.response.config.url + " " + error.response.data.message)
          return data.callback(error.response.status);
      })
  
    },

  }
})

export default store;