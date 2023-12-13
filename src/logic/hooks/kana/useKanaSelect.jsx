import { React, useState } from "react";

export const useKanaSelect = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedKana, setSelectedKana] = useState([]);

  const selectKana = async (type) => {
    console.log(type);
    setIsLoading(true);
    const res = await fetch(
      `${import.meta.env.VITE_LOCALHOST_API}/api/alphabet/${type}`
    );

    const json = await res.json();

    if (!res.ok) {
      console.log(json.error);
      setIsLoading(false);
    }
    if (res.ok) {
      setSelectedKana(json);
      setIsLoading(false);
    }
  };

  return { selectKana, selectedKana, isLoading };
};
