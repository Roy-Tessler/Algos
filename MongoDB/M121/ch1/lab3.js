var pipeline = [
  {
    $project: {
      movieTitle: {
        $split: ["$title", " "]
      },
      _id: 0
    }
  },
  {
    $project: {
      movieTitles: {
        $size: "$movieTitle"
      }
    }
  },
  {
    $match: {
      movieTitles: {
        $eq: 1
      }
    }
  }
];

// $split - Splits a string into substrings based on a delimiter. Returns an array of substrings. If the delimiter is not found within the string, returns an array containing the original string.

// $size - Returns the number of elements in the array. Accepts a single expression as argument.
