import { defineStore } from "pinia";
import axios from "axios"

export const useDestinationStore = defineStore({
    id: "destination",
    state: () => ({
        baseUrl: "https://dream-escape.herokuapp.com",
        destinationData: [],
        detailDestination: [],
        qrCode: "",
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
                const response = await axios.get(`${this.baseUrl}/destination/${id}`)
                this.$state.detailDestination = response.data.data
            } catch (err) {
                console.log(err)
            }
        },

        async getQR(id) {
            try {
                const response = await axios({
                    method: "get",
                    url: `https://api.happi.dev/v1/qrcode?data=https://dream-escape-a27e9.web.app/destination/${id}&width=400&dots=000000&bg=FFFFFF&apikey=a4d131IYL1nb6sS2wyNkAPUkrKyvqs52X9kwWTPitu8wXyZucMKpMbs9`
                })

                this.qrCode = response.data.qrcode
            } catch (err) {
                console.log(err)
            }
        }
    },
});
