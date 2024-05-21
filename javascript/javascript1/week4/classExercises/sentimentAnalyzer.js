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
  const strToLower = string.toLowerCase();
  let obj = { score: 0, positiveWords: [], negativeWords: [] };
  for (let i = 0; i < positive.length; i++) {
    if (strToLower.match(positive[i])) {
      obj.positiveWords.push(positive[i]);
      obj.score++;
    }
  }

  for (let j = 0; j < negative.length; j++) {
    if (strToLower.match(negative[j])) {
      obj.negativeWords.push(negative[j]);
      obj.score--;
    }
  }
  return obj;
}

// Or score = obj.positiveWords.length - obj.negativeWords.length

const sentimentScoreObject = getSentimentScore(
  "I am mega super awesome happy, are you dreary?"
);
console.log(sentimentScoreObject);
