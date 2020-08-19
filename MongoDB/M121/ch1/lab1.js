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
  }
];

// $match -  Filters the document stream to allow only matching documents to pass unmodified into the next pipeline stage. $match uses standard MongoDB queries. For each input document, outputs either one document (a match) or zero documents (no match).

//$gte - Returns true if the first value is greater than or equal to the second.

// $not - Evaluates a boolean and returns the opposite boolean value; i.e. when passed an expression that evaluates to true, $not returns false; when passed an expression that evaluates to false, $not returns true.

// $in - Returns a boolean indicating whether a specified value is in an array.

// $all - retrieves all the documents which contains the subset of the values we pass. The subset might be in any order.
