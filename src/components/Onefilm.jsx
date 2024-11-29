import { Component } from "react"
import{Col}from"react-bootstrap"





class OneFilm extends Component{
    render(){
        return(
            <Col key={this.props.film.imdbID} sm={12} md={6} lg={3} xl={2}>
            <img className="img-fluid" src={this.props.film.Poster} alt={this.props.film.Title} />
          </Col>
        )
    }
}
export default OneFilm