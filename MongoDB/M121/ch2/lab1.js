var pipeline = [
  {
    $addFields: {
      commonToBoth: {
        $setIntersection: [
          "$cast",
          [
            "Sandra Bullock",
            "Tom Hanks",
            "Julia Roberts",
            "Kevin Spacey",
            "George Clooney"
          ]
        ]
      }
    }
  },
  {
    $match: {
      countries: {
        $in: ["USA"]
      },
      "tomatoes.viewer.rating": {
        $gte: 3
      }
    }
  },
  {
    $project: {
      "tomatoes.viewer.rating": 1,
      title: 1,
      num_favs: {
        $size: {
          $ifNull: ["$commonToBoth", []]
        }
      },
      _id: 0
    }
  },
  {
    $sort: {
      num_favs: -1,
      "tomatoes.viewer.rating": -1,
      title: -1
    }
  },
  {
    $skip: 24
  },
  {
    $limit: 1
  }
];

// $skip - 	Skips the first n documents where n is the specified skip number and passes the remaining documents unmodified to the pipeline. For each input document, outputs either zero documents (for the first n documents) or one document (if after the first n documents).

// $limit - Passes the first n documents unmodified to the pipeline where n is the specified limit. For each input document, outputs either one document (for the first n documents) or zero documents (after the first n documents).

// $setIntersection -Returns a set with elements that appear in all of the input sets. Accepts any number of argument expressions.
