import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const useError = () => {
  const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isError) return;

    toast.error("Houston we have a problem", { autoClose: 3000 });
  }, [isError]);

  return { isLoading, setIsLoading, setIsError };
};
