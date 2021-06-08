export interface Response {
  payload: Delivery[];
}

export interface Delivery {
  address: string;
  name: string;
  id: number;
}
