function getMainKanaList(type) {
  const mainKana =
    type === "hiragana"
      ? [
          "あ・a",
          "か・ka",
          "さ・sa",
          "た・ta",
          "な・na",
          "は・ha",
          "ま・ma",
          "や・ya",
          "ら・ra",
          "わ・wa",
        ]
      : [
          "ア・a",
          "カ・ka",
          "サ・sa",
          "タ・ta",
          "ナ・na",
          "ハ・ha",
          "マ・ma",
          "ヤ・ya",
          "ラ・ra",
          "ワ・wa",
        ];
  return mainKana;
}
function getKanaDakutenList(type) {
  const dakutenKana =
    type === "hiragana"
      ? ["が・ga", "ざ・za", "だ・da", "ば・ba", "ぱ・pa"]
      : ["ガ・ga", "ザ・za", "ダ・da", "バ・ba", "パ・pa"];
  return dakutenKana;
}

function getKanaCombinationList(type) {
  const combinationKana =
    type === "hiragana"
      ? [
          "きゃ・kya",
          "しゃ・sha",
          "ちゃ・cha",
          "にゃ・nya",
          "ひゃ・hya",
          "みゃ・mya",
          "りゃ・rya",
          "ぎゃ・gya",
          "じゃ・ja",
          "ぢゃ・dya",
          "びゃ・bya",
          "ぴゃ・pya",
        ]
      : [
          "キャ・kya",
          "シャ・sya",
          "チャ・cha",
          "ニャ・nya",
          "ヒャ・hya",
          "ミャ・mya",
          "リャ・rya",
          "ギャ・gya",
          "ジャ・ja",
          "ヂャ・dya",
          "ビャ・bya",
          "ピャ・pya",
        ];
  return combinationKana;
}

export { getKanaCombinationList, getKanaDakutenList, getMainKanaList };
