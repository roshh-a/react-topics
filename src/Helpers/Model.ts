export interface HeaderProps {
  onCartClick: () => void;
}

export interface AuthUserType {
  userName: string;
}

export interface ContextProviderProps {
  children: React.ReactNode;
}
export interface Product {
  id: number;
  title: string;
  price: number;
  tag: string;
  tagColorClasses: string;
  imageSrc: string;
  imageAlt: string;
}

export interface CartContextType {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  totalPrice: number;
}

export interface WeatherResponse {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level?: number;
    grnd_level?: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust?: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type?: number;
    id?: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
export interface Location {
    lat: number ;
    lon: number;
}