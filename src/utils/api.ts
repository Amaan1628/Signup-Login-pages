import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:5000',
});

export const githubAPI = async (onLoad: any) => {
  console.log("click is working")
  try {
    console.log("inside try")
    const res = await api.get("/auth/callback");
    const data = res.data;
    console.log("this is data",data);
    localStorage.setItem("Authorization", `Bearer ${data.token}`);
    onLoad();
  }

  //  catch (error) {
  //   console.log("error is this",error)
  //   console.error(error);
  //   throw error;
  // }
  
  catch (error) {
    console.log("error is this",error)
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Error response:', error.response.data);
        console.error('Error status:', error.response.status);
        console.error('Error headers:', error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Error request:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error message:', error.message);
      }
      console.error('Error config:', error.config);
    } else {
      // Handle non-Axios errors
      console.error('Error:');
    }
  }
};
