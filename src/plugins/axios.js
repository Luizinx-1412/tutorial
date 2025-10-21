import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMmI0YmUzNDA5NTdkY2MzYzYzNTYxOWM3ODdmZGU5ZSIsIm5iZiI6MTc1OTI1MjA5NS4wMzEwMDAxLCJzdWIiOiI2OGRjMGU3ZmJkNmYyYWM2ODliNDIxMDYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.w1hmWNOfrTbxHUVjIMzZ_Cr-cjfOhh7kqbsjV_rS5t8`,
  },
});

export default api;