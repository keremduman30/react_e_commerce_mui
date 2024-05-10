import { useEffect, useState } from "react";
import { baseApi } from "../services/base_api";

const useFetch = <T>(url: string) => {
  const [data, setdata] = useState<T | null>(null);
  const [loading, setloading] = useState<boolean>(false);
  const [eror, setError] = useState<boolean>(false);
  useEffect(() => {
    const fethcData = async () => {
      try {
        setloading(true);
        const res = await baseApi.get(url);
        if (res.data) {
          setdata(res.data);
        }
      } catch (error) {
        setError(true);
      } finally {
        setloading(false);
      }
    };
    fethcData();
  }, [url]);

  return { data, loading, eror };
};

export default useFetch;
