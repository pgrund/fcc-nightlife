export interface Site {
  id: string;
  name: string;
  snippet_text?: string;
  image_url?: string;
  //display_address: any[];
  display_phone: string;
  phone: number;
  rating?: number;
}
