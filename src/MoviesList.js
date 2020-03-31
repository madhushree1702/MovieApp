import React from 'react';
// import { Container, Row, Col } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
        <Container>
          <Row>
            {(moviesList).map(movie =>
              <Col xs={4} key={movie.id}>{movie.title}</Col>
            )}
          </Row>
        </Container>
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