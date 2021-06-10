import {useFetchAuctions} from "./useFetchAuctions";
import {useState, useEffect, useRef, useCallback} from "react";
import {Auction, AuctionsContextData} from "../types";

export const useAuctionsState = (): AuctionsContextData => {
  const intervalRef = useRef<any>(null);
  const [auctions, setAuctions] = useState<Array<Auction>>([]);
  const state = useFetchAuctions();
  const addBil = useCallback<(id: string) => void>((id: string) => {
    setAuctions(auctions => auctions.map(auction => {
      if (auction.id !== id) {
        return auction;
      }

      const lastAmount = auction.bids.length === 0 ? 0 : auction.bids[auction.bids.length - 1].amount;

      return {
        ...auction,
        bids: [
          ...auction.bids,
          {
            amount: lastAmount + 250,
            dealership: "Instacarro",
            createdAt: new Date().toISOString(),
            channel: "Web"
          }
        ]
      }
    }))
  }, []);

  useEffect(() => {
    if (state.loading) return;

    setAuctions(state.data || []);

    intervalRef.current = setInterval(() => {
      setAuctions(auctions => {
        return auctions.map(auction => (auction.remainingTime === 0 ? auction : {
          ...auction,
          remainingTime: auction.remainingTime - 1000 > 0 ? auction.remainingTime - 1000 : 0
        }))
      })
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    }
  }, [state]);

  return {
    auctions,
    addBil,
    loading: state.loading,
  }
}
