import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    baseUrl: "http://localhost:3000",
    //user
    name: "",
    email: "",
    password: "",
    address: "",
    //product
    product: "",
    imageUrl: "",
    price: "",
    description: "",
    stock: "",
    CategoryId: "",
    //order
    ProductId: "",
    UserId: "",
    bank: "",
    amount: "",
    order_id: "",
    va: {},
    //login
    isLoggedIn: false,
    //query
    products: [],
    product: {},
    order: {},
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    async register() {
      try {
        const response = await axios.post(`${this.baseUrl}/users/register`, {
          name: this.name,
          email: this.email,
          password: this.password,
          address: this.address,
        });
        console.log(response);
        this.router.push("/users/login");
        this.email = "";
        this.password = "";
      } catch (err) {
        // console.log(err.response.data.message);
        Swal.fire(err.response.data.message);
      }
    },
    async login() {
      try {
        const response = await axios.post(`${this.baseUrl}/users/login`, {
          email: this.email,
          password: this.password,
        });
        console.log(response);
        localStorage.setItem("access_token", response.data.access_token);
        this.router.push("/");
        this.isLoggedIn = true;
      } catch (err) {
        // console.log(err.response.data.message);
        Swal.fire(err.response.data.message);
      }
    },
    logout() {
      localStorage.clear();
      this.router.push("/users/login");
      this.isLoggedIn = true;
    },
    async getProducts() {
      try {
        const response = await axios.get(`${this.baseUrl}/products`);
        console.log(response.data);
        this.products = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    async buy(ProductId) {
      try {
        const response = await axios.post(
          `${this.baseUrl}/orders/add/${ProductId}`,
          {},
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    },
    async getOrder() {
      try {
        const response = await axios.get(`${this.baseUrl}/orders/myorder`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        console.log(response);
        this.order = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    async charge(orderCode, amount) {
      try {
        // console.log(this.bank, this.payment_type);
        const response = await axios.post(
          `${this.baseUrl}/orders/charge/${orderCode}`,
          {
            bank: this.bank,
            amount,
            payment_type: this.payment_type,
          },
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );

        console.log(response);

        this.router.push(`/payment/${orderCode}`);
      } catch (err) {
        console.log(err);
      }
    },
    async getVa(orderCode) {
      try {
        // console.log(orderCode.orderCode, "!!!!");
        // console.log(`${this.baseUrl}/orders/va/` + orderCode);
        const va = await axios.get(`${this.baseUrl}/orders/va/${orderCode}`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        console.log(va, "<<<<<<<<<<");
        this.va = JSON.parse(va.data.midtransResponse);
      } catch (err) {
        console.log(err);
      }
    },
  },
});
