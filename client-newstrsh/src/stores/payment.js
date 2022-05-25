import { defineStore } from 'pinia';
import { mapActions } from 'pinia';
import { useUserStore } from '@/stores/user';
import axios from 'axios';

// http://localhost:3000
const baseurl = 'http://localhost:3000';

export const usePaymentStore = defineStore({
  id: 'payment',
  state: () => ({}),
  getters: {},
  actions: {
    ...mapActions(useUserStore, ['loginCheck']),
    async memberPay() {
      try {
        const response = await axios.post(
          `${baseurl}/payment`,
          {},
          {
            headers: {
              access_token: localStorage.access_token,
            },
          }
        );
        // console.log(response);
        // eslint-disable-next-line no-undef
        snap.pay(response.data.token, {
          onSuccess: async (result) => {
            console.log(result);
            await axios.patch(
              `${baseurl}/users/payment`,
              {},
              {
                headers: {
                  access_token: localStorage.access_token,
                },
              }
            );
            localStorage.setItem('premium', true);
            this.loginCheck;
            this.$router.push('/');
          },
          onError: async (result) => {
            console.log(result);
            this.$router.push('/');
          },
        });
      } catch (error) {
        console.log(error.response.data.message);
        // this.$toast.open({
        //   message: error.response.data.message,
        //   type: 'error',
        //   // all of other options may go here
        // });
      }
    },
  },
});
