import { CardItem } from "./fake_data";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type FilterProduct = {
  catId?: string;
  maxPrice: number | number[];
  sort: number;
  categories: string[];
};

const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}`,
  }),
  endpoints: (builder) => {
    return {
      fetchFeaturesProducts: builder.query<CardItem[], string>({
        query: () => {
          return { url: "/products", method: "GET" };
        },
      }),
      fetchFilterProducts: builder.query<CardItem[], FilterProduct>({
        query: (filterProduct) => {
          const { catId, maxPrice, sort, categories } = filterProduct;
          return {
            url: `/products?gender=${catId}&price=${maxPrice}&sort=${sort}&category=${categories}`,
            method: "GET",
          };
        },
      }),
      fethcFindProduct: builder.query<CardItem, string>({
        query: (id) => {
          return {
            url: `products/find/${id}`,
            method: "GET",
          };
        },
      }),
    };
  },
});

export const {
  useFetchFeaturesProductsQuery,
  useFetchFilterProductsQuery,
  useFethcFindProductQuery,
} = productsApi;
export { productsApi };

//if u want only get method u can use builder.query but other way example put delete etc u should use builder.mmutation
/* example
 addUser: builder.mutation({
        query: () => {
          return {
            url: "/users",
            method: "POST",
            body: {
              name: "example",
            },
          };
        },
      }),

*/
