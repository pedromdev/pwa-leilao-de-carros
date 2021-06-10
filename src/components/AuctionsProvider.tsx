import {createContext, ComponentProps} from "react";
import {AuctionsContextData} from "../types";
import {useAuctionsState} from "../hooks/useAuctionsState";

export const AuctionsContext = createContext<AuctionsContextData>({
  loading: false,
  addBil: () => {
  },
  auctions: [],
});

export const AuctionsProvider = ({children}: ComponentProps<any>) => {
  const state = useAuctionsState();

  return (
    <AuctionsContext.Provider value={state}>
      {children}
    </AuctionsContext.Provider>
  );
};
