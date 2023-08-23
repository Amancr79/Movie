import { Modal } from 'react-bootstrap';
import React,{useState} from 'react';
const API_IMG="https://image.tmdb.org/t/p/w500/";
const MovieBox=({titel,poster_path,vote_average,release_date,overview})=>{
    const [show,setShow]=useState(false);
    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);
    return(
        <div className="card text-center bg-light mb-3 mx-">
        <div className="card-body rounded">
            <img className="card-img-top" src={API_IMG+poster_path}/>
            <div className="card-body  rounded">
              <button type="button" onClick={handleShow} className="btn btn-dark">View More</button>
              <Modal show={show} onClick={handleClose}>

              <Modal.Header closeButton>
                    <Modal.Title>
                    </Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <img className="card-img-top" style={{width:"100%"}}src={API_IMG+poster_path}/>
              <h3>{titel}</h3>
              <h4>ImDb: {vote_average}</h4>
              <h5>Release Date : {release_date}</h5>
              <br />
              <h6>OverView</h6>
              <p>{overview}</p>
              </Modal.Body>
              <Modal.Footer>
                <button varient="secondary" onClick={handleClose}>close</button>
              </Modal.Footer>
              </Modal>
            </div>
        </div>
        </div>
    )
}

export default MovieBox;