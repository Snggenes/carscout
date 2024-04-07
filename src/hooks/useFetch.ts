import { useState } from "react";

type FetchOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  headers?: Record<string, string>;
  credentials?: RequestCredentials;
  body?: BodyInit | null | undefined;
};

type FetchSuccessCallback = (data: any) => void;

export default function useFetch(
  route: string,
  onSuccess: FetchSuccessCallback
) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const performFetch = async (options?: FetchOptions) => {
    setLoading(true);

    const baseOptions: FetchOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      ...(options as FetchOptions),
    };

    const fetchData = async () => {
      const url = `${import.meta.env.VITE_BASE_URL}/${route}`;
      const response = await fetch(url, baseOptions);

      if (!response.ok) {
        setError(
          `Fetch for ${url} returned an invalid status (${
            response.status
          }). Received: ${JSON.stringify(response)}`
        );
      }
      const data = await response.json();
      onSuccess(data);
      setLoading(false);
    };

    try {
      await fetchData();
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred.");
      }
      setLoading(false);
    }
  };

  return { loading, error, performFetch };
}
