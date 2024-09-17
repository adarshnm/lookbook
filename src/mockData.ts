import { Look, Product } from "./types/looks";

export const mockData: Look[] = [
  {
    media: [
      {
        src: "/looks/pexels-jansel-ferma-306295-2085118.jpg",
        alt: "Image2",
        type: "image",
        imageInfo: [
          {
            productId: "jacket-1",
            position: "top-[50%] right-[20%]",
          },
        ],
      },
      {
        src: "/looks/9710763-uhd_2160_3840_25fps.mp4",
        alt: "Video1",
        type: "video",
      },
      {
        src: "/looks/3206486-hd_1080_1920_25fps.mp4",
        alt: "Video2",
        type: "video",
      },
    ],
    products: [
      {
        slug: "jacket-1",
        name: "Beige Jacket",
        description: "Men Double-Breasted Long Sleeve Overcoat",
      },
      {
        slug: "jacket-2",
        name: "Beige Jacket",
        description: "Men Double-Breasted Long Sleeve Overcoat",
      },
    ],
  },
  {
    media: [
      {
        src: "/looks/7717001-uhd_2160_4096_25fps.mp4",
        alt: "Video2",
        type: "video",
      },
    ],
    products: [
      {
        slug: "jacket-1",
        name: "Beige Jacket",
        description: "Men Double-Breasted Long Sleeve Overcoat",
      },
    ],
  },
  {
    media: [
      {
        src: "/looks/pexels-chloekalaartist-1043474.jpg",
        alt: "Image1",
        type: "image",
        imageInfo: [
          {
            productId: "jacket-1",
            position: "top-[60%] right-[40%]",
          },
        ],
      },
    ],
    products: [
      {
        slug: "jacket-1",
        name: "Beige Jacket",
        description: "Men Double-Breasted Long Sleeve Overcoat",
      },
    ],
  },
];

export const products: Product[] = [
  {
    slug: "jacket-1",
    name: "Beige Jacket",
    description: "Men Double-Breasted Long Sleeve Overcoat",
    images: ["/products/product-jacket.jpg", "/products/product-jacket.jpg"],
  },
  {
    slug: "jacket-2",
    name: "Beige Jacket",
    description: "Men Double-Breasted Long Sleeve Overcoat",
    images: ["/products/product-jacket.jpg", "/products/product-jacket.jpg"],
  },
];
