import { defineStore } from "pinia";
import Swal from "sweetalert2";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import mainAxios from "../api/mainApi.js";
import { app } from "../base";

export const mainStore = defineStore("mainStore", {
  state: () => ({
    isLoggedIn: false,
    genres: [],
    music: [],
    UserSongs: [],
    currentSong: {}
  }),
  actions: {
    async register(formObject) {
      try {
        const { email, displayName, password, profilePic } = formObject;
        const response = await mainAxios.post(
          "/users/register",
          {
            displayName,
            email,
            password,
            Profile_Picture: profilePic,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("Register Successful");
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem(
          "User_Profile",
          JSON.stringify(response.data.User_Profile)
        );
        this.isLoggedIn = true;
        this.router.push({
          path: "/",
        });
      } catch (err) {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid Inputs",
        });
      }
    },

    async login(formObject) {
      try {
        const { email, password } = formObject;
        const response = await mainAxios.post("/users/login", {
          email,
          password,
        });
        // console.log(response);
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem(
          "User_Profile",
          JSON.stringify(response.data.User_Profile)
        );
        console.log("Welcome!");
        this.isLoggedIn = true;
        this.router.push({
          path: "/",
        });
      } catch (err) {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid Username/Password",
        });
      }
    },
    async logOut() {
      localStorage.clear();
      this.router.push({
        path: "/login",
      });
    },
    async submitToFirebase(image, music, title, genreId) {
      try {
        var imageUrl;
        var musicUrl;
        const storage = getStorage(app);
        const storageRefImage = ref(storage, `/songCover/${image[0].name}`);
        const storageRefMusic = ref(storage, `/song/${music[0].name}`);
        const uploadTask1 = uploadBytesResumable(storageRefImage, image[0]);
        const uploadTask2 = uploadBytesResumable(storageRefMusic, music[0]);
        uploadTask1.on(
          "state_changed",
          (snapshot) => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            console.log(progress);
          },
          (err) => {
            console.log(err);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Upload Failed",
            });
          },
          async () => {
            try {
              const url = await getDownloadURL(uploadTask1.snapshot.ref);
              imageUrl = url;
              uploadTask2.on(
                "state_changed",
                (snapshot) => {
                  const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                  );
                  console.log(progress);
                },
                (err) => {
                  console.log(err);
                  Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Upload Failed",
                  });
                },
                async () => {
                  try {
                    const url = await getDownloadURL(uploadTask2.snapshot.ref);
                    musicUrl = url;
                    const response = await mainAxios.post(
                      "/music",
                      {
                        imageUrl,
                        musicUrl,
                        title,
                        genreId,
                      },
                      {
                        headers: {
                          access_token: localStorage.getItem("access_token"),
                        },
                      }
                    );
                    console.log("success");
                    Swal.fire({
                      icon: "success",
                      title: "Upload Success",
                    });
                  } catch (err) {
                    console.log(err);
                    Swal.fire({
                      icon: "error",
                      title: "Oops...",
                      text: "Upload Failed",
                    });
                  }
                }
              );
            } catch (err) {
              console.log(err);
            }
          }
        );
      } catch (err) {
        console.log(err);
      }
    },
    async getGenre() {
      try {
        const response = await mainAxios.get("/genres");
        this.genres = response.data.data;
      } catch (err) {
        console.log(err);
      }
    },
    async getMusic(search){
      try {
        const response = await mainAxios.get("/music", {
          params: {
            search : search
          }
        });
        this.music = response.data.data;
      } catch (err) {
        console.log(err);
      }
    },
    async getUserSongs(){
      try {
        const response = await mainAxios.get("/music/personal", {
          headers: {
            access_token: localStorage.getItem("access_token"),
          }
        });
        this.UserSongs = response.data.data;
      } catch (err) {
        console.log(err);
      }
    },
    async getSongDetails(id) {
      try {
        const response = await mainAxios.get(`music/${id}`);
        this.currentSong = response.data.data;
        
      } catch (err) {
        console.log(err);
      }
    }
  },
});
