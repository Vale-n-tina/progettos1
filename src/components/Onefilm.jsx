import { Component } from "react"
import{Col,Modal,}from"react-bootstrap"





class OneFilm extends Component{
    state = {
        modal:false
      };
    render(){
        return(
            <>
            <Col key={this.props.film.imdbID} sm={12} md={6} lg={3} xl={2} onClick={()=>{ this.setState({modal:true})}}>
            <img className="img-fluid" src={this.props.film.Poster} alt={this.props.film.Title} />
          </Col>
          

      <Modal show={this.state.modal} onHide={()=>{this.setState({modal:false})}} >
        <Modal.Header closeButton >
          <Modal.Title>{this.props.film.Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body> <img src={this.props.film.Poster} alt={this.props.film.Title} />  </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
          </>

        )
    }
}
export default OneFilm