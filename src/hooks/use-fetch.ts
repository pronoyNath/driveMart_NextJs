import { useState } from "react";
import { toast } from "sonner";

// T - type of response data
// A - tuple of argument types for cb
const useFetch = <T, A extends unknown[] = []>(
  cb: (...args: A) => Promise<T>
) => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [fetching, setIsFetching] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fn = async (...args: A): Promise<void> => {
    setIsFetching(true);
    setLoading(true);
    setError(null);

    try {
      const response = await cb(...args); 
      setData(response);
      setIsFetching(false);
    } catch (err) {
      setIsFetching(false);
      const error = err instanceof Error ? err : new Error("Unknown error");
      setError(error);
      toast.error(error.message);
    } finally {
      setIsFetching(false);
      setLoading(false);
    }
  };

  return { data, loading,fetching, error, fn, setData };
};

export default useFetch;
