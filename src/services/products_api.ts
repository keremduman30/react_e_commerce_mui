import { CardItem } from "./fake_data";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type FilterProduct = {
  catId?: string;
  maxPrice: number | number[];
  sort: number;
  categories: string[];
};

export type RequestPaymentType = {
  products: CardItem[];
  amount: number;
};

type ResponsePayment = {
  id: string;
};

const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}`,
  }),
  // tagTypes: ["Post"],when fetch mutaion func  u should use this for update api like add then refrecth api
  endpoints: (builder) => {
    return {
      fetchFeaturesProducts: builder.query<CardItem[], string>({
        query: () => {
          return { url: "/products", method: "GET" };
        },
        // providesTags: ["Post"],for refresh if u using tagtypes
      }),

      fetchFilterProducts: builder.query<CardItem[], FilterProduct>({
        query: (filterProduct) => {
          const { catId, maxPrice, sort, categories } = filterProduct;
          return {
            url: `/products`,
            method: "GET",
            params: {
              //thats for search params
              gender: catId,
              price: maxPrice,
              sort: sort,
              category: categories,
            },
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
      fetchPayment: builder.mutation<ResponsePayment, RequestPaymentType>({
        query: (payment) => {
          return {
            url: "/orders",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              token: `Bearer ${import.meta.env.VITE_TOKEN}`,
            },
            body: {
              products: payment.products,
              amount: payment.amount,
            },
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
  useFetchPaymentMutation,
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
