import { defineStore } from "pinia";
import baseUrl from "../api/axios";
import cityOfJava from "../api/cityOfJava";

export const useAccomodationStore = defineStore("accomodation", {
  state() {
    return {
      accomodations: [],
      accomodation: {},
      dataLogin: {
        email: "",
        password: "",
      },
      dataRegister: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: "",
      },
      wishlists: [],
      location: "",
      fromDate: new Date().toISOString().split("T")[0],
      toDate: new Date(Date.now() + 3600 * 1000 * 24)
        .toISOString()
        .split("T")[0],
      roomType: "",
      types: [],
      cities: [],
      province: "",
      city: "",
      transactions: [],
    };
  },
  getters: {
    isLogin() {
      if (localStorage.getItem("access_token")) {
        return true;
      } else {
        return false;
      }
    },
    getTotalNight() {
      if (this.toDate === "" || this.fromDate === "") {
        return 1;
      } else {
        return (
          (new Date(this.toDate).getTime() -
            new Date(this.fromDate).getTime()) /
          (1000 * 3600 * 24)
        );
      }
    },
    getTotalPrice() {
      return +this.getTotalNight * +this.accomodation.price;
    },
  },
  actions: {
    clearInputSearch() {
      this.location = "";
      this.fromDate = "";
      this.toDate = "";
      this.roomType = "";
    },
    async fetchAllAccomodation() {
      try {
        const { data } = await baseUrl.get("/public/accomodation");
        this.accomodations = data;
      } catch (err) {
        console.log(err);
      }
    },
    async fetchAccomodationById(id) {
      try {
        const { data } = await baseUrl.get(
          `/public/accomodation/detail/${+id}`
        );
        this.accomodation = data;
      } catch (err) {
        console.log(err);
      }
    },
    async fetchAccomodationByLocationQuery() {
      if (this.location === "" && this.roomType === "") {
        Swal.fire({
          icon: "warning",
          text: "Please select location or room type",
        });
      } else {
        try {
          const { data } = await baseUrl.get(
            `/public/accomodation/search?location=${this.location}&TypeId=${this.roomType}`
          );
          this.accomodations = data;
          this.router.push({ name: "search" });
          this.clearInputSearch();
        } catch (err) {
          console.log(err);
        }
      }
    },
    async fetchAccomodationByCity() {
      try {
        const { data } = await baseUrl.get(
          `/public/accomodation/filter?province=${this.province}&city=${this.city}`
        );
        this.accomodations = data;
      } catch (err) {
        console.log(err);
      }
    },
    async addAccomodationToWishlist(AccomodationId, TypeId) {
      try {
        const { data } = await baseUrl.post(
          "/public/wishlist/add",
          {
            AccomodationId,
            TypeId,
          },
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
        Swal.fire({
          icon: "success",
          title: "Success",
          text: data.message,
          timer: 2000,
        }).then((result) => {
          this.router.push({ name: "wishlist" });
        });
      } catch ({ response }) {
        Swal.fire({
          icon: "error",
          text: response.data.message,
        });
      }
    },
    async fetchType() {
      try {
        const { data } = await baseUrl.get(`/type`);
        this.types = data;
      } catch (err) {
        console.log(err);
      }
    },
    async fetchAllWishlist() {
      try {
        const { data } = await baseUrl.get("/public/wishlist", {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.wishlists = data;
      } catch (err) {
        console.log(err);
      }
    },
    async deleteWishlist(id) {
      try {
        const { data } = await baseUrl.delete(`/public/wishlist/${id}`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        Swal.fire({
          icon: "success",
          text: data.message,
          timer: 2000,
        });
        this.fetchAllWishlist();
      } catch ({ response }) {
        Swal.fire({
          icon: "error",
          text: response.data.message,
        });
      }
    },
    async fetchPublicApiCityOfJava(idProv) {
      try {
        const { data } = await cityOfJava.get(`/kota?id_provinsi=${idProv}`);
        this.cities = data.kota_kabupaten;
      } catch (err) {
        console.log(err);
      }
    },
    async fetchPublicApiProvinceOfJava(idProv) {
      try {
        const { data } = await cityOfJava.get(`/provinsi/${idProv}`);
        this.province = data.nama;
        this.city = "";
      } catch (err) {
        console.log(err);
      }
    },
    async login() {
      try {
        const { data } = await baseUrl.post("/public/user/login", {
          email: this.dataLogin.email,
          password: this.dataLogin.password,
        });
        localStorage.setItem("access_token", data.access_token);
        this.router.push({ name: "home" });
      } catch ({ response }) {
        Swal.fire({
          icon: "error",
          title: "Login Failed !",
          text: response.data.message,
        });
      }
    },
    async register() {
      try {
        const { data } = await baseUrl.post("/public/user/register", {
          firstName: this.dataRegister.firstName,
          lastName: this.dataRegister.lastName,
          email: this.dataRegister.email,
          password: this.dataRegister.password,
          phoneNumber: this.dataRegister.phoneNumber,
          address: this.dataRegister.address,
        });
        Swal.fire({
          icon: "success",
          text: data.message,
          timer: 2000,
        }).then((result) => {
          this.router.push({ name: "login" });
        });
      } catch ({ response }) {
        // const m = response.data.message
        //   .map((e) => {
        //     return e + "<br>";
        //   })
        //   .join("");

        Swal.fire({
          icon: "error",
          title: "Register Failed !",
          html: response.data.message
        });
      }
    },
    async createSnap(accomodation) {
      try {
        const { id, name, Type, price } = accomodation;

        const { data } = await baseUrl.post(
          "/public/wishlist/payment",
          {
            accomodationId: id,
            accomodationName: name,
            roomType: Type.name,
            typeId: accomodation.TypeId,
            price: price,
            totalNight: this.getTotalNight,
            totalPrice: this.getTotalPrice,
          },
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
        snap.pay(data.token);
      } catch (response) {
        console.log(response);
      }
    },
    async fetchTransactions() {
      try {
        const { data } = await baseUrl.get("/public/wishlist/transactions", {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        });
        this.transactions = data;
      } catch ({ response }) {
        console.log(response);
      }
    },
    async updateStatusTransaction(orderId, id) {
      try {
        const { data } = await baseUrl.post('/public/wishlist/payment-status',{
          orderId, id
        }, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        if (data.status === 'success') {
          Swal.fire({
            icon: "success",
            text: data.message,
            timer: 2000,
          });
          this.fetchTransactions()
        } else {
          Swal.fire({
            icon: "error",
            text: data.message,
            timer: 2000,
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
  },
});
