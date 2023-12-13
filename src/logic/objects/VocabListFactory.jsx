import dataN1 from "../../assets/vocabListN1.json";
import dataN2 from "../../assets/vocabListN2.json";
import dataN3 from "../../assets/vocabListN3.json";
import dataN4 from "../../assets/vocabListN4.json";
import dataN5 from "../../assets/vocabListN5.json";

export default class VocabListFactory {
  constructor(level) {
    switch (level) {
      case "All":
        return [...dataN1, ...dataN2, ...dataN3, ...dataN4, ...dataN5];
      case "N1":
        return dataN1;
      case "N2":
        return dataN2;
      case "N3":
        return dataN3;
      case "N4":
        return dataN4;
      case "N5":
        return dataN5;
      default:
        return [];
    }
  }
}
