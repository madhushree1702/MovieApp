import React from 'react';

class MoviesList extends React.Component{
    constructor(props){
      super(props)
    
    this.state = {
      moviesList: []
    }
  }
    componentDidMount() {
      console.log("Hello")
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=d272326e467344029e68e3c4ff0b4059&language=en-US&sort_by=popularity.desc')
        
        .then((data) => {
          console.log(data)
          this.setState({ moviesList: data })
        })
        .catch(console.log)
      }

    render(){
      return(
        <div>

        </div>
      )
    }
}

export default MoviesList;