export type CardItem = {
  id: number;
  img1?: string;
  img: string;
  title: string;
  isNew?: boolean;
  oldPrice: number;
  price: number;
};
export type CategoryItem = {
  img: string;
  btnText: string;
};

const featuresdata: CardItem[] = [
  {
    id: 1,
    img1: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto-compress&cs=tinysrgb&w=1600",
    img: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Long Sleeve Graphic T-shirt",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto-compress&cs=tinys rgb&w=1600",
    title: "Coat",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto-compress&cs=tinys rgb&w=1600",
    title: "Skirt",
    oldPrice: 19,
    price: 12,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto-compress&cs=tinys rgb&w=1600",
    title: "Hat",
    oldPrice: 19,
    price: 12,
  },
];

const productData: CardItem[] = [
  {
    id: 1,
    img1: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto-compress&cs=tinysrgb&w=1600",
    img: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Coat",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto-compress&cs=tinys rgb&w=1600",
    title: "Hat",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto-compress&cs=tinys rgb&w=1600",
    title: "Skirt",
    oldPrice: 19,
    price: 12,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto-compress&cs=tinys rgb&w=1600",
    title: "Hat",
    oldPrice: 19,
    price: 12,
  },
];

const categoriesList: CategoryItem[] = [
  {
    img: "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600",
    btnText: "Sale",
  },
  {
    img: "https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600",
    btnText: "women",
  },
  {
    img: "https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600",
    btnText: "New Season",
  },
  {
    img: "https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600",
    btnText: "men",
  },
  {
    img: "https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600",
    btnText: "Accessories",
  },
  {
    img: "https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    btnText: "shoes",
  },
];

export { featuresdata, productData, categoriesList };
