export interface Site {
  id: string;
  name: string;
  description?: string;
  image_url?: string;
  //display_address: any[];
  display_phone: string;
  phone: number;
  rating?: number;
  reviews: number;
  yelp?: any;
}
