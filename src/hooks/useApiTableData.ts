/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useState } from "react";

interface ApiResponse<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}

export const useApiTableData = <T>(url: string): ApiResponse<T> => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(url);
        if (!res) throw new Error("Error fetching data");

        const data = await res.json();
        setData(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
};
