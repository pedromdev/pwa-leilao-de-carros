import {useContext} from "react";
import {AuctionsContext} from "../components/AuctionsProvider";
import {AuctionsContextData} from "../types";

export const useAuctions = (): AuctionsContextData => useContext(AuctionsContext);
