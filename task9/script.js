const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const countTags = tweets => {
  return tweets.reduce((acc, tweet) => {
    tweet.tags.forEach(tag => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {});
};

const tagsCount = countTags(tweets);

console.log(tagsCount);

const tagsCountOutput = document.getElementById("tags-count");
tagsCountOutput.innerHTML = `
    <pre>${JSON.stringify(tagsCount, null, 2)}</pre>
`;
