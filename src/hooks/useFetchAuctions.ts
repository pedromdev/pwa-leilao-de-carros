import {useReducer, useEffect} from "react";
import {AuctionsContextReducer, Auction, FetchAuctionsData} from "../types";
import {auctions} from "../services/auctions";

export const useFetchAuctions = (): FetchAuctionsData => {
  const [state, dispatch] = useReducer<AuctionsContextReducer>((state, action) => {
    switch (action.type) {
      case 'loading':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'error':
        return {
          loading: false,
          error: action.payload as Error,
          data: null,
        };
      case 'success':
        return {
          loading: false,
          error: null,
          data: action.payload as Array<Auction>,
        };
      default:
        return state;
    }
  }, {loading: false, error: null, data: null});

  useEffect(() => {
    dispatch({type: 'loading'});

    auctions()
      .then(data => dispatch({type: 'success', payload: data}))
      .catch(e => dispatch({type: 'error', payload: e}));
  }, []);

  return state;
}
