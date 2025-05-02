import commonAPI from "./commonApi";
import SERVER_URL from "./serverUrl";



// registerAPI called by Register
export const registerAPI = async(reqBody) => {
    return await commonAPI("POST",`${SERVER_URL}/register`, reqBody);
  };

// login api called by Login
export const loginAPI = async (reqBody)=>{
    return await commonAPI ("POST", `${SERVER_URL}/login`, reqBody)
}

// create API called by TaskForm
export const createAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVER_URL}/create`, reqBody);
};

