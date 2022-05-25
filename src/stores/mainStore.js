import { defineStore } from "pinia";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import mainAxios from "../api/mainApi.js";
import { app } from "../base";

export const mainStore = defineStore("mainStore", {
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
            profilePic,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("Register Successful");
        localStorage.setItem("access_token", response.data.access_token);
      } catch (err) {
        console.log(err);
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
        console.log("Welcome!");
      } catch (err) {
        console.log(err);
      }
    },
    async logOut() {
      localStorage.clear();
    },
    async submitToFirebase(image, music, title) {
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
                },
                async () => {
                  try {
                    const url = await getDownloadURL(uploadTask2.snapshot.ref);
                    musicUrl = url;
                    console.log(localStorage.getItem('access_token'));
                    const response = await mainAxios.post("/music", {
                      imageUrl,
                      musicUrl,
                      title,
                      genreId: "1",
                    },{
                        // headers: {
                        //     access_token : localStorage.getItem("access_token")
                        // }
                        headers: {
                          access_token : localStorage.getItem("access_token")
                        }
                    });
                    console.log(response);
                    //   console.log(url);
                  } catch (err) {
                    console.log(err);
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
  },
});
