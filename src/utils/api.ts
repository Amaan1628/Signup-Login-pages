import axios from "axios";


export const githubAPI = async (onLoad: any) => {
    // page.get("/", async (req,res) => {
    try{
      const res = await axios.get("/localhost:5000/auth");
      const data = res.data;
      localStorage.setItem("Authorization", `Bearer ${data.token}`);
      onLoad()
    } catch (error){
      console.error(error);
      throw error;
    }
  }