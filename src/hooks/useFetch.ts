import { useState, useEffect } from "react";

// For this custom hook, use a generic so the hook can fetch any response shape
type UseFetchResult<T> = {
  data: T | null;
  isPending: boolean;
  error: Error | null;
};

const useFetch = <T>(url: string): UseFetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const abortController = new AbortController();

    fetch(url, { signal: abortController.signal })
      .then((res) => {
        if (!res.ok) {
          // error coming back from server
          throw Error("could not fetch the data for that resource");
        }
        return res.json() as Promise<T>;
      })
      .then((data) => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch((err: unknown) => {
        if (err instanceof DOMException && err.name === "AbortError") {
          return;
        } else {
          setIsPending(false);
          setError(
            err instanceof Error ? err : new Error("An unknown error occurred"),
          );
        }
      });

    return () => abortController.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
