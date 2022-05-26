import { defineStore } from 'pinia';
import { mapActions, mapWritableState } from 'pinia';
import axios from 'axios';

const baseurl = 'http://localhost:3000';

export const useOrderStore = defineStore({
    id: 'order',
    state: () => ({
        destinationId: ""
    }),
    getters: {},
    actions: {

        async addOrder(objOrder, id) {
            try {
                console.log(id)
                const response = await axios.post(`${baseurl}/destination/${id}/order`, {
                    fullName: objOrder.fullName,
                    email: objOrder.email,
                    phone: objOrder.phone,
                    date: objOrder.date,
                    amountOfPeople: objOrder.amount,
                    DestinationId: id,
                })

                this.finishOrder()
            } catch (err) {
                console.log(err)
            }
        },

        async finishOrder() {
            try {

                snap.pay(response.data.token, {
                    onSuccess: async (result) => {
                        console.log(result);
                        await axios.patch(
                            `${baseurl}/users/payment`,
                            {},
                        );
                        localStorage.setItem('premium', true);
                        this.run = true;

                        // this.$router.push({
                        //   name: '',
                        // });

                        this.$router.push({
                            name: 'home',
                        });

                        // this.$router.push('/');
                    },
                    onError: async (result) => {
                        console.log(result);
                        this.$router.push('/');
                    },
                });
            } catch (err) {
                console.log(err)
            }
        },
    },
});