fetch("https://api.themoviedb.org/3/movie/popular?api_key=8e5ff12b90af00f4963a430929154b87")
  .then((response) => response.json())
  .then((result) => {
    result.results.map(film => {
      console.log(film.title);
    });
    console.log(result); 
  })
  
