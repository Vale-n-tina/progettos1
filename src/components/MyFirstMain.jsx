import { Component } from "react";
import { , Container, Row, Spinner, Alert, } from "react-bootstrap";
import OneFilm from "./Onefilm";

class MyFirstMain extends Component {
  state = {
    films: [],
    loading: true,
    error: false,
    modal:false
  };

  getFilm = () => {
    fetch(this.props.url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("orrore");
        }
      })
      .then((arrayfilm) => {
        if (arrayfilm.Response === "False") {
          throw new Error("orrore");
        } else {
          this.setState({
            films: arrayfilm.Search,
            loading: false,
          });
        }
      })

      .catch((err) => {
        console.log("errore", err);
        this.setState({
          loading: false,
          error: true,
        });
      });
  };
  componentDidMount() {
    this.getFilm();
  }
  render() {
    return (
      <Container fluid className=" mt-5">
        <Row className=" g-3">
          <h4 className=" text-start ">{this.props.title}</h4>

          {this.state.error && (
            <Alert variant="danger">RAZZO!🚀 Qualcosa è andato storto</Alert>
          )}

          {this.state.loading && (
            <Spinner animation="border" role="status" variant="light">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}

          {this.state.films.map((film) => {
            return (
              
              <OneFilm key={film.imdbID} film={film}/>
             
            
            );
          })}
        </Row>
      </Container>
    );
  }
}
export default MyFirstMain;

//76052b01 http://www.omdbapi.com/?apikey=metti-qui-la-api-key&s=Star Wars
