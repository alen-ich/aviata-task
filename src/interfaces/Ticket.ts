export interface TicketInterface {
  itineraries: Array<Array<Itineraries>>;
  price_details: PriceDetails;
  price: string;
  currency: string;
  bonus_usage: false;
  services: any;
  price_raw: number;
  validating_carrier: string;
  id: string;
  has_meta: boolean;
  has_offers: boolean;
  best_time: number;
  bonus_accrual: boolean;
  bonus_accrual_details: any;
  bonus_usage_details: any;
  provider: string;
  refundable: boolean;
  provider_class: string;
}

interface Itineraries {
  dep_date: string;
  hash: string;
  dir_index: number;
  price: Price;
  layovers: Array<number>;
  arr_date: string;
  allowed_offers: Array<any>;
  carrier_name: string;
  is_meta: boolean;
  segments: Array<Segment>;
  stops: number;
  carrier: string;
  refundable: boolean;
  traveltime: number;
}

interface Segment {
  origin: string;
  airport_dest: string;
  arr_time_iso: string;
  dep_terminal: string;
  dep_time_iso: string;
  carrier_name: string;
  stop_locations: Array<any>;
  dest_code: string;
  airport_dest_terminal: string;
  equipment: string;
  flight_num: string;
  stops: number;
  airport_origin: string;
  cabin: string;
  dep_time: string;
  dest: string;
  origin_code: string;
  baggage_options: Array<BaggageOptions>;
  arr_time: string;
  plane: string;
  services: Service;
  fare_basis_code: string;
  airport_origin_terminal: string;
  arr_terminal: string;
  carrier: string;
  fare_seats: number;
}

interface PriceDetails {
  base_raw: number;
  modifiers: string;
  modifiers_raw: number;
  taxes: string;
  base: string;
  taxes_raw: number;
}

interface BaggageOptions {
  unit: string;
  value: number;
}

interface Service {
  full_description: string;
  alt_text: string;
  code: string;
  description: string;
  title: string;
  default: string;
  solution: string;
  value: string;
  icon: string;
}

interface Price {
  currency: string;
  amount: string;
  price_raw: number;
}
