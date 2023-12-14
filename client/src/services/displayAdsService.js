import * as request from "../lib/request";
const baseUrl = "http://localhost:5050/list/ads";

export const getAll = async () => {
  
   const result = await request.get(baseUrl);
   console.log(result);
   return result
}

export const getOne = async (adId) => {
   //console.log(bindId);
  const result = await request.get(`${baseUrl}/${adId}`);
  

  return result;
};





export const edit = async (bindId, bindData) => {
  const result = await request.put(`${baseUrl}/${bindId}`, bindData);

  return result;
};



export const remove = async (bindId) => request.remove(`${baseUrl}/${bindId}`);


// export const removeFromUserOrders = async (bindId, email) =>
//   request.post(`${baseUrl}/${bindId}`, email);

export const addLikeToBind = async(bindId, email) =>request.post(`${baseUrl}/like`, {bindId, email})