const baseUrl = "http://localhost:5050/ads/ad";

import * as request from "../lib/request";

export const create = async (adData) => {
  const result = await request.post(baseUrl, adData);

  return result;
};



