export type Auction = {
  id: string;
  make: string;
  model: string;
  year: number;
  version: string;
  km: number;
  remainingTime: number;
  imageUrl: string;
  bids: Array<{
    amount: number;
    dealership: string;
    createdAt: string;
    channel: string;
  }>;
};

export type AuctionsContextData = {
  loading: boolean;
  auctions: Array<Auction>;
  addBil: (id: string) => void;
}

export type FetchAuctionsData = {
  loading: boolean;
  data: Array<Auction> | null;
  error: Error | null;
}

export type AuctionsContextAction = {
  type: 'success' | 'loading' | 'error';
  payload?: Array<Auction> | Error;
};

export type AuctionsContextReducer = (prevState: FetchAuctionsData, action: AuctionsContextAction) => FetchAuctionsData;
