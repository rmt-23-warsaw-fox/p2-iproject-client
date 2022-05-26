import { defineStore } from 'pinia';
import axios from 'axios';

const baseurl = 'http://localhost:3000';

export const useOrderStore = defineStore({
    id: 'order',
    state: () => ({
    }),
    getters: {},
    actions: {

        async finishOrder(objOrder, id) {
            try {
                const response = await axios.post(`${baseurl}/destination/${id}/snap`, {
                    fullName: objOrder.fullName,
                    email: objOrder.email,
                    phone: objOrder.phone,
                    date: objOrder.date,
                    amountOfPeople: objOrder.amount,
                    DestinationId: id,
                })
                
                let orderId = +response.data.orderIDBE
                snap.pay(response.data.token, {
                    onSuccess: async (result) => {
                        console.log(result, "RESULT");
                        await axios.patch(
                            `${baseurl}/destination/${orderId}/order`,
                            {},
                        );
                        this.$router.push("/")
                    },
                    onError: async (result) => {
                        console.log(result, "ERROR BRO");
                        this.$router.push("/")
                    },
                });
            } catch (err) {
                console.log(err)
            }
        },
    },
});