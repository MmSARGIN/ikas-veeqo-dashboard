import axios from "axios";

interface Auth {
  fetchToken: (email: string, password: string) => Promise<string | undefined>;
}

const auth: Auth = {
  fetchToken: async (email: string, password: string) => {
    try {
      const response = await axiosInstance.post("/login", {
        email,
        password,
      });
      const token = response.data.token;
      localStorage.setItem("token", token);
      return token;
    } catch (error) {
      console.error(error);
    }
  },
};

// set up axios instance
const axiosInstance = axios.create({
  baseURL: process.env.API_URL, // replace this with your API base URL
});

// define middleware
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// define a function to fetch token and save it to local storage
async function fetchToken(
  email: string,
  password: string
): Promise<string | undefined> {
  try {
    const response = await axiosInstance.post("/login", {
      email,
      password,
    });
    const token = response.data.token;
    localStorage.setItem("token", token);
    return token;
  } catch (error) {
    console.error(error);
  }
}

export default {
  fetchToken,
};

// usage examples
// fetchToken("admin@admin.com", "123456").then((token) => {
//   // use the token to make requests
//   axiosInstance.get("/data").then((response) => {
//     console.log(response.data);
//   });

//   // manually set the Authorization header for a request
//   axiosInstance
//     .get("/private", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//     .then((response) => {
//       console.log(response.data);
//     });
// });
