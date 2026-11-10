export interface ProductMedia {
  type: 'image' | 'video';
  src: string;
}

export interface TextPart {
  isBold: boolean;
  newLine: boolean;
  text: string;
}

export interface Product {
  title: string;
  shortDesc: string;
  price: string;
  onDiscount: boolean;
  discountPrice: string;
  discountPercentage: string;
  imgUrl: string;
  isDescArray: boolean;
  longDescArray: TextPart[];
  longDesc: string;
  gallery: ProductMedia[];
  stripeLink: string;
  homeQuiz?: boolean;
  quizId?: string;
}
