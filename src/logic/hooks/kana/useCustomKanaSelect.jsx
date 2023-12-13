import { React, useState } from "react";

export const useCustomKanaSelect = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [customKana, setCustomKana] = useState([]);

  const selectCustomKana = async (mode, type, group) => {
    setIsLoading(true);
    const response = await fetch(
      `${import.meta.env.VITE_LOCALHOST_API}/api/alphabet/kana-custom`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode,
          group,
          type,
        }),
      }
    );
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      return json.error;
    }

    if (response.ok) {
      setCustomKana(json);
      setIsLoading(false);
    }
  };

  return { selectCustomKana, customKana, isLoading };
};
