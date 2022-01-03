import axios from 'axios';

const KEY = process.env.REACT_APP_API_KEY;
console.log(KEY)
export default axios.create({
    baseURL: "http://data.fixer.io/api/",
    params: {
      access_key: KEY
    },
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
})