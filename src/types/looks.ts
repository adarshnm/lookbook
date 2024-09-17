export interface Product {
  slug: string;
  name: string;
  description: string;
  images?: string[];
}

export type ImageInfo = {
  productId: string;
  position: string;
};

export type LookMedia = {
  src: string;
  alt: string;
  type: "image" | "video";
} & (
  | {
      type: "image";
      imageInfo: ImageInfo[];
    }
  | {
      type: "video";
    }
);

export interface Look {
  media: LookMedia[];
  products: Product[];
}
