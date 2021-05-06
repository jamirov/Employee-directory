import axios from "axios";

const BASEURL = "https://randomuser.me/api/";

const Api = {
  search: function() {
    return axios.get(BASEURL);
  }
};

export default Api;
