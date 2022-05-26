import { defineStore } from "pinia";
import axios from "axios"

export const useDestinationStore = defineStore({
    id: "destination",
    state: () => ({
        baseUrl: "http://localhost:3000",
        destinationData: [],
        detailFood: [],
    }),
    getters: {

    },
    actions: {
        async fetchDestination() {
            try {
                const response = await axios.get(`${this.baseUrl}/destination`,)

                this.$state.destinationData = response.data.data
            } catch (err) {
                console.log(err)
            }
        },

        async fetchDetail(id) {
            try {
                const response = await axios.get(`${this.baseUrl}/food/${id}`)

                this.$state.detailFood = response.data.data
            } catch (err) {
                console.log(err)
            }
        },

        // async getQR(foodId) {
        //     try {
        //         const response = await axios({
        //             method: "get",
        //             url: `https://api.happi.dev/v1/qrcode?data=http://localhost:8080/food/${foodId}&width=300&dots=000000&bg=FFFFFF&apikey=a4d131IYL1nb6sS2wyNkAPUkrKyvqs52X9kwWTPitu8wXyZucMKpMbs9`
        //         })

        //         this.qrCode = response.data.qrcode
        //     } catch (err) {
        //         console.log(err)
        //     }
        // }
    },
});
