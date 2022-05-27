import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5M2E4ODJkMjQyN2U0MDdlOTEzZGFlZDlkOTdmYzY4MyIsInN1YiI6IjYxNTdkNDcwNDFhNTYxMDA2MzJjZTNkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qWGwD-TPHNYDeGR7oqOHa_1U05VTy0iPoQIn1HHUusQ"

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
