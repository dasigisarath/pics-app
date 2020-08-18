import axios from "axios";

export default axios.create({
  baseURL:'https://api.unsplash.com',
  headers: {
    Authorization: "Client-ID RPXKp_-uxGADdNLDMIzbrPqSALSjkV9UpHzXY49UQDA",
  },
});
