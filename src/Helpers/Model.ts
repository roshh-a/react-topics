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
