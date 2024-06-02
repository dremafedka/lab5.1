const concerts = {
  Kyiv: new Date("2020-04-01"),
  Uman: new Date("2025-07-02"),
  Vinnitsia: new Date("2020-04-21"),
  Odessa: new Date("2025-03-15"),
  Khmelnytskyi: new Date("2020-04-18"),
  Kharkiv: new Date("2025-07-10"),
};

const currentDate = new Date();

const upcomingConcerts = Object.entries(concerts)
  .filter(([city, date]) => date > currentDate)
  .sort(([, dateA], [, dateB]) => dateA - dateB)
  .map(([city]) => city);

console.log(upcomingConcerts);

const concertList = document.getElementById("concert-list");
concertList.innerHTML = `<p>${upcomingConcerts.join(", ")}</p>`;
