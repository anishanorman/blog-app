const { Post } = require("../models/index");
const db = require("./db");

async function seed() {
  await db.sync({
    force: true,
  });

  await Post.bulkCreate(
    [
      {
        author: "David",
        blogTitle: "Title of daves blog",
        blogContent:
          "Dave grew up in a place called dover, he is very hungover.",
      },

      {
        author: "Neesh",
        blogTitle: "Neesh's Narwals ",
        blogContent: "Hi, I'm neesh and i own some narwhals",
      },

      {
        author: "Samuel",
        blogTitle: "Slippery Samuels Sea Adventures",
        blogContent: "Arrrrrrrrrr matey! For i am slippery samuel",
      },
    ],
    { validate: true }
  );
}

seed();
