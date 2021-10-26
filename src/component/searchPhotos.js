import React, { useEffect, useState } from "react";
import {Modal, Button} from 'react-bootstrap';
import { createApi } from 'unsplash-js';
import Moment from 'moment';
const axios = require('axios');
const accessKey = 'TEHlqNSL3DROGbC2RMzRmBqlRC0Wp23MECs5DIiu42A';

export default function SearchPhotos() {
  
    const [query, setQuery] = useState("iPhone");
    const [pics, setPics] = useState([]);
    const [show, setShow] = useState(false);
    const [imageDetails, setImageDetails] = useState(null);
    //console.log(query);

    useEffect(() =>{
        performSearch(query)
    }, [query]);

    const performSearch = (query) => {
        axios.get( `https://api.unsplash.com/search/photos/?page=1&per_page=28&query=${query}&client_id=${accessKey}`)
          .then(result => {
            //this.setState({ imgs: data.data.results });
            //console.log(result);
            setPics(result.data.results);
          })
          .catch(err => {
            console.log('Error happened during fetching!', err);
          });
    };



    const showModalBox = (details) =>{
        if(details != null){
            setImageDetails(details)
            console.log(imageDetails)
            setShow(true)
        }
    }
    const handleClose = () => setShow(false);


    
  return (
      <div className="container-fluid">
            <div className="row m-0">
                <div className="col-12 p-3">
                    <div className="search-box">
                        <input className="form-control search-image" type="text" name="query" placeholder="Search Images" value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-12">
                    <div className="row">
                        {pics.length > 0 && pics.map((pic) =>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3" key={pic.id} onClick={e => showModalBox(pic)}>
                                <div className="images-box">
                                    <img alt={pic.alt_description} src={pic.urls.small} />
                                    <div className="title-box">{pic.alt_description}</div>
                                </div>
                            </div>
                        )} 
                    </div>  
                </div>
                {/* <div className="col-12">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col"></div>
                    </div>
                </div> */}
            </div>
            {/* <div className="card-list">
                {pics.map((pic) =>
                <div className="card" key={pic.id}>
                    <img
                    className="card--image"
                    alt={pic.alt_description}
                    src={pic.urls.full}
                    width="50%"
                    height="50%"
                    ></img>
                </div>)}
            </div> */}

                    <Modal dialogClassName="modal-xl" show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            {imageDetails && <Modal.Title className="text-uppercase">{imageDetails.alt_description}</Modal.Title>}
                        </Modal.Header>
                        <Modal.Body>
                            {imageDetails &&
                                <div className="row m-0">
                                    <div className="col p-0">
                                        <img className="img-fluid" alt={imageDetails.alt_description} src={imageDetails.urls.full} />
                                    </div>
                                    <div className="col">
                                        <h6>Image Name</h6>
                                        <p className="text-uppercase">{imageDetails.alt_description}</p>
                                        <h6>Image Size</h6>
                                        <p>Width: {imageDetails.width}, Height: {imageDetails.height}</p>
                                        <h6>Image Color</h6>
                                        <div style={{background:imageDetails.color, width:'100px', height:'100px'}}></div>
                                        <p>Created At: {Moment(imageDetails.created_at).format('DD/MM/yyyy')}, Updated At: {Moment(imageDetails.updated_at).format('DD/MM/yyyy')}</p>
                                        {imageDetails.blur_hash != null && <p>Blur Hash: {imageDetails.blur_hash}</p>}
                                        {imageDetails.description != null && <p>Description: {imageDetails.description}</p> }
                                        {imageDetails.tags.length > 0 &&
                                            <div className="d-block">
                                                <h6>Tags</h6>
                                                {imageDetails.tags.length > 0 && imageDetails.tags.map((item, index) => {
                                                    return(<span class="badge badge-info text-uppercase mr-2" key={index}>{item.title}</span>);
                                                })}
                                            </div>
                                        }
                                        <h6 className="mt-3">Link</h6>
                                        <div className="d-block">
                                            <a href={imageDetails.links.self}>Download</a>
                                        </div>
                                    </div>
                                </div>
                            }
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                    </Modal>

      </div>
  );
}