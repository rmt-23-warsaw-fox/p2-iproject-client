import { defineStore } from "pinia";
import baseUrl from "../api/axios";
import cityOfJava from "../api/cityOfJava";

export const useAccomodationStore = defineStore("accomodation", {
  state() {
    return {
      isLoading: false,
      accomodations: [],
      accomodation: {},
      isLogin: false,
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
    cekLogin() {
      if (localStorage.getItem("access_token")) {
        this.isLogin = true;
        return true
      } else {
        this.isLogin = false;
        return false;
      }
    },
    async fetchAllAccomodation() {
      this.isLoading = true;
      try {
        const { data } = await baseUrl.get("/public/accomodation");
        this.accomodations = data;
        this.isLoading = false;
      } catch (err) {
        console.log(err);
      }
    },
    async fetchAccomodationById(id) {
      this.isLoading = true;
      try {
        const { data } = await baseUrl.get(
          `/public/accomodation/detail/${+id}`
        );
        this.accomodation = data;
        this.isLoading = false;
      } catch (err) {
        this.isLoading = false
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
        this.isLoading = true;
        try {
          const { data } = await baseUrl.get(
            `/public/accomodation/search?location=${this.location}&TypeId=${this.roomType}`
          );
          this.accomodations = data;
          this.isLoading = false;
          this.router.push({ name: "search" });
          this.clearInputSearch();
        } catch (err) {
          this.isLoading = false;
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
      this.isLoading = true;
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
        this.isLoading = false;
        Swal.fire({
          icon: "success",
          title: "Success",
          text: data.message,
          timer: 2000,
        }).then((result) => {
          this.router.push({ name: "wishlist" });
        });
      } catch ({ response }) {
        this.isLoading = false
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
      this.isLoading = true;
      try {
        const { data } = await baseUrl.get("/public/wishlist", {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.wishlists = data;
        this.isLoading = false;
      } catch (err) {
        this.isLoading = false;
        console.log(err);
      }
    },
    async deleteWishlist(id) {
      this.isLoading = true;
      try {
        const { data } = await baseUrl.delete(`/public/wishlist/${id}`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.isLoading = false;
        Swal.fire({
          icon: "success",
          text: data.message,
          timer: 2000,
        });
        this.fetchAllWishlist();
      } catch ({ response }) {
        this.isLoading = false;
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
      this.isLoading = true;
      try {
        const { data } = await baseUrl.post("/public/user/login", {
          email: this.dataLogin.email,
          password: this.dataLogin.password,
        });
        localStorage.setItem("access_token", data.access_token);
        this.isLoading = false;
        this.router.push({ name: "home" });
      } catch ({ response }) {
        this.isLoading = false;
        Swal.fire({
          icon: "error",
          title: "Login Failed !",
          text: response.data.message,
        });
      }
    },
    async loginWithGoogle(token) {
      this.isLoading = true;
      try {
        const { data } = await baseUrl.post("/public/user/signin-with-google", {
          token,
        });
        localStorage.setItem("access_token", data.access_token);
        this.isLoading = false;
        this.router.push({ path: "/" });
      } catch ({ response }) {
        this.isLoading = false;
        Swal.fire({
          icon: "error",
          title: "Login Failed!",
          text: response.data.message,
        });
      }
    },
    async register() {
      this.isLoading = true;
      try {
        const { data } = await baseUrl.post("/public/user/register", {
          firstName: this.dataRegister.firstName,
          lastName: this.dataRegister.lastName,
          email: this.dataRegister.email,
          password: this.dataRegister.password,
          phoneNumber: this.dataRegister.phoneNumber,
          address: this.dataRegister.address,
        });
        this.isLoading = false;
        Swal.fire({
          icon: "success",
          text: data.message,
          timer: 2000,
        }).then((result) => {
          this.router.push({ name: "login" });
        });
      } catch ({ response }) {
        this.isLoading = false;
        Swal.fire({
          icon: "error",
          title: "Register Failed !",
          html: response.data.message
        });
      }
    },
    async createSnap(accomodation) {
      this.isLoading = true;
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
        this.isLoading = false;
        snap.pay(data.token);
      } catch (response) {
        console.log(response);
      }
    },
    async fetchTransactions() {
      this.isLoading = true;
      try {
        const { data } = await baseUrl.get("/public/wishlist/transactions", {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        });
        this.transactions = data;
        this.isLoading = false;
      } catch ({ response }) {
        this.isLoading = false;
        console.log(response);
      }
    },
    async updateStatusTransaction(orderId, id) {
      this.isLoading = true;
      try {
        const { data } = await baseUrl.post('/public/wishlist/payment-status',{
          orderId, id
        }, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.isLoading = false;
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
        this.isLoading = false;
        console.log(err);
      }
    }
  },
});
