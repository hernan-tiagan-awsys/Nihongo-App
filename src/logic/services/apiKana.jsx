export async function fetchAllKana(kanaType) {
  const res = await fetch(
    `${import.meta.env.VITE_LOCALHOST_API}/api/alphabet/${kanaType}`
  );
  return res;
}

export async function fetchSpecificMode(kanaMode, kanaType) {
  const res = await fetch(
    `${import.meta.env.VITE_LOCALHOST_API}/api/alphabet/${kanaType}-${kanaMode}`
  );
  return res;
}

export async function fetchSpecificKana(kanaMode, kanaGroup, kanaType) {
  const res = await fetch(
    `${import.meta.env.VITE_LOCALHOST_API}/api/alphabet/kana-custom`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        mode: kanaMode,
        group: kanaGroup,
        type: kanaType,
      }),
    }
  );
  return res;
}
