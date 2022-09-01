// @remind

import { defineStore } from 'pinia';
// import { login } from '@/composables';

export const test = defineStore({
  id: 'test',
  state: () => ({
    token: localStorage.getItem('token') || '',
    user: JSON.parse(localStorage.getItem('user')) || {},
    isloading: false,
  }),
  actions: {
    async login(email, password) {
      this.isloading = true;
      const credentials = { email: email, password: password };
      try {
        // const user = await login(credentials);
        const user = false;
        console.log('await login(credentials)', user);
        // update pinia state
        this.user = user;
        // store user details to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
        // this.$router.push({ path: '/' });
        return { success: true };
      } catch (error) {
        console.log('login failed:', error);
        return { success: false };
      }

      // try {
      //   const loginResult = await login(credentials);
      //   console.log('login credentials:', loginResult);
      //   if (loginResult.success) {
      //     localStorage.setItem('token', loginResult.token);
      //     this.token = loginResult.token;
      //   } else {
      //     throw loginResult.error;
      //   }
      // } catch (error) {
      //   console.log('login failed:', error);
      // }

              // const res = await fetch('http://localhost:8000/api/login', {
              //     method: 'POST',
              //     body: JSON.stringify(data),
              //     headers: {
              //         'Content-Type': 'application/json'
              //     }
              // });
              // const output = await res.json();
              // if (output.success) {
                  // localStorage.setItem('token', output.token);
                  // this.token = output.token;

              //   console.log('login success', output);
              // } else {
              //   console.log('login failed', output);
              // }

              // this.$auth.loginWith('laravelSanctum', {
                  // data: {
                  //   email: 'ramirezjason392@gmail.com',
                  //   password: 'password'
                  // }
              //   }).then(login => {
              //     this.$auth.setUser(login.data.user)
    
              //     fetch('http://localhost:8000/api/test', {
              //       method: "GET",
              //       credentials: "same-origin",
              //       headers: {
              //         // 'Accept': 'application/json',
              //         // 'Content-Type': 'application/json',
              //         // 'X-Requested-With': 'XMLHttpRequest',
              //         'Authorization' : 'Bearer ' + login.data['token'], 
              //         // 'X-CSRF-Token': csrf.config.headers['X-XSRF-TOKEN']
              //       },
              //     }).then(response => {
              //       if (response.ok) {
              //         response.json().then(data => {
              //           console.log('test success', data);
              //         })
              //       } 
              //       else {
              //         throw response.statusText + ' ' + response.status;
              //       }
              //     }).catch(err => {
              //       console.log('Something went wrong,', err);
              //     });
    
              //     console.log('login', login)
              //     this.$router.push({ path: '/' });
              //   });
      },
    logout() {
      this.user = null;
      localStorage.removeItem('user');
    }
  }
});