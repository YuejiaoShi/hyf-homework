const positive = [
  "joyful",
  "excited",
  "serene",
  "grateful",
  "vibrant",
  "optimistic",
  "radiant",
  "enthusiastic",
  "blissful",
  "peaceful",
  "super",
  "awesome",
  "happy",
];
const negative = [
  "gloomy",
  "anxious",
  "melancholic",
  "frustrated",
  "dreary",
  "miserable",
  "disheartened",
  "despondent",
  "agitated",
  "pessimistic",
];

function getSentimentScore(string) {
  const strArr = string.split(" ");
  let obj = { score: 0, positiveWords: [], negativeWords: [] };
  for (let str of strArr) {
    if (positive.includes(str)) {
      obj.positiveWords.push(str);
      obj.score++;
    } else if (negative.includes(str)) {
      obj.negativeWords.push(str);
      obj.score--;
    }
  }
  return obj;
}

// Or score = obj.positiveWords.length - obj.negativeWords.length

const sentimentScoreObject = getSentimentScore("I am mega super awesome happy");
console.log(sentimentScoreObject);
