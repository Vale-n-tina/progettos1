import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

class MyMain extends Component {
  state = {
    films: [],
  };

  getFilm = () => {
    fetch("http://www.omdbapi.com/?apikey=76052b01&s=spider man")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("orrore");
        }
      })
      .then((arrayfilm) => {
        this.setState({
          films: arrayfilm.Search,
        });
        console.log(arrayfilm);
      })

      .catch((err) => {
        console.log("errore", err);
      });
  };
  componentDidMount() {
    this.getFilm();
  }
  render() {
    return (
      <Container fluid>
        <Row className=" g-3">
          <h4 className=" text-start ">Trending Now</h4>

          {this.state.films.map((film) => {
            return (
                
              <Col key={film.imdbID} sm={12} md={6} lg={3} xl={2}>
                <img className="img-fluid"  src={film.Poster} alt={film.Title} />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}
export default MyMain;

//76052b01 http://www.omdbapi.com/?apikey=metti-qui-la-api-key&s=Star Wars
