var pipeline = [
  {
    $match: {
      "imdb.rating": {
        $gte: 7
      },
      genres: {
        $not: {
          $in: ["Crime", "Horror"]
        }
      },
      rated: {
        $in: ["PG", "G"]
      },
      languages: {
        $all: ["English", "Japanese"]
      }
    }
  },
  {
    $project: {
      _id: 0,
      title: 1,
      rated: 1
    }
  }
];

// $project - Reshapes each document in the stream, such as by adding new fields or removing existing fields. For each input document, outputs one document.
