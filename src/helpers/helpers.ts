export const truncateTextWithHTML = (html: string, maxWords: number) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const textContent = doc.body.textContent || "";

  const words = textContent.split(" ");
  const truncatedWords = words.slice(0, maxWords);
  const truncatedText = truncatedWords.join(" ");

  return truncatedText + (words.length > maxWords ? "..." : "");
};

export const formatIdCodeToDate = (idCode: string): string | null => {
  const centuryMapping: Record<string, number> = {
    "1": 1800,
    "2": 1800,
    "3": 1900,
    "4": 1900,
    "5": 2000,
    "6": 2000,
    "7": 2100,
    "8": 2100,
  };

  // if num is lower than 10 id adds a zero so the formatting looks nicer
  const padZero = (num: number): string => (num < 10 ? `0${num}` : num.toString());

  const century = parseInt(idCode.charAt(0));
  const year = parseInt(idCode.substring(1, 3));
  const month = parseInt(idCode.substring(3, 5));
  const day = parseInt(idCode.substring(5, 7));

  const fullYear = centuryMapping[century.toString()];

  if (fullYear) {
    const formattedDate = `${padZero(day)}.${padZero(month)}.${fullYear + year}`;
    return formattedDate;
  } else {
    return "Invalid id code";
  }
};
