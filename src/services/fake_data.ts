export type CardItem = {
  id?: number;
  _id?: string;
  img1?: string;
  desc?: string;
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

const productsBgCategoryImg: string[] = [
  "https://images.unsplash.com/photo-1489370603040-dc6c28a1d37a?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1658506871173-7498f5371ed1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1555529771-122e5d9f2341?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
const imgList: string[] = [
  "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
];

export { featuresdata, productData, categoriesList, productsBgCategoryImg ,imgList};
