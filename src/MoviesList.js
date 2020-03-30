import React from 'react';

class MoviesList extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
        moviesList: []
      }
    }

    componentDidMount() {

        fetch('https://api.themoviedb.org/3/discover/movie?api_key=d272326e467344029e68e3c4ff0b4059&language=en-US&sort_by=popularity.desc')

        .then((data) => {
          data.json().then((res) => {
            console.log("Res:", res)
            this.setState({ moviesList: res.results })
          })
        })

        .catch(console.log)
      }

    renderMoviesList() {
      var moviesList = this.state.moviesList;

      return (
        moviesList.map((movie) => {
          return (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{movie.id}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{movie.title}</h6>
                {/* <p>{movie.title}</p> */}
              </div>
            </div>
            //  <p>{movie.title}</p>
           )
         })
      )
    }

    render() {
      return (
        <div>
          <center><h1>Movie List</h1></center>
          {this.renderMoviesList()}
         </div>
      )    
    }
}

export default MoviesList;