import axios from 'axios';

const KEY = process.env.REACT_APP_API_KEY;
//export a base url 
export default axios.create({
    baseURL: "https://data.fixer.io/api/",
    params: {
      access_key: KEY
    },
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
})