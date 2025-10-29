import { Product } from "./Helpers/Model";

export const productData: Product[] = [
  {
    id: 1,
    title: "Casual Wear",
    price: 99.99,
    tag: "New",
    tagColorClasses: "bg-primary-100 text-primary-800", // Used for the first card
    imageSrc:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722165/AbhirajK/Abhirajk.webp",
    imageAlt: "Casual Wear",
  },
  {
    id: 2,
    title: "Summer Collection",
    price: 79.99,
    tag: "Sale",
    tagColorClasses: "bg-green-100 text-green-800",
    imageSrc:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722163/AbhirajK/Abhirajk%20mykare.webp",
    imageAlt: "Summer Collection",
  },
  {
    id: 3,
    title: "Winter Special",
    price: 129.99,
    tag: "Limited",
    tagColorClasses: "bg-blue-100 text-blue-800",
    imageSrc:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722161/AbhirajK/Abhirajk2.webp",
    imageAlt: "Winter Special",
  },
  {
    id: 4,
    title: "Premium Collection",
    price: 199.99,
    tag: "Premium",
    tagColorClasses: "bg-purple-100 text-purple-800",
    imageSrc:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722160/AbhirajK/Abhirajk4.webp",
    imageAlt: "Premium Collection",
  },
];
