import axios from "axios";
import {Auction} from "../types";

export const auctions = (): Promise<Array<Auction>> =>
  axios.get(process.env.REACT_APP_RESOURCE_URL as string)
    .then(response => response.data);
