import { defineStore } from 'pinia';
import axios from 'axios';

export const useNewsStore = defineStore({
  id: 'news',
  state: () => ({
    newsList: [],
    totalPages: 0,
  }),
  getters: {
    // getPagination: (page, size) => {
    //   const limit = size ? +size : 3;
    //   const offset = page ? page * limit : 0;
    //   return { limit, offset };
    // },
    // getPagingData: (data, page, limit) => {
    //   const { count: totalItems, rows: tutorials } = data;
    //   const currentPage = page ? +page : 0;
    //   const totalPages = Math.ceil(totalItems / limit);
    //   return { totalItems, tutorials, totalPages, currentPage };
    // },
  },
  actions: {
    async fetchApiData(page, lang, cat, keywords) {
      try {
        // console.log(this.totalPages);
        const limit = 4;
        const offset = page ? page * limit : 0;
        const languages = lang ? lang : 'en';
        const category = cat ? cat : '';
        const keyword = keywords ? keywords : '';
        const response = await axios.get(
          `http://api.mediastack.com/v1/news?access_key=94d0cacc2d00f77ba4de773416d0063a&languages=${languages}&categories=${category}&sort=popularity&offset=${offset}&limit=${limit}&keywords=${keyword}`
        );
        // console.log(response.data.pagination);
        this.totalPages = Math.ceil(response.data.pagination.total / limit);
        this.newsList = response.data.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
