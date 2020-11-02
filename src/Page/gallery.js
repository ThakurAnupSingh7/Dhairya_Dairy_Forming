import React from 'react';
import "./gallery.css"

const Gallery = () => {
    return(
        <div>
     <img
          src={process.env.PUBLIC_URL + "/img/gallery1.jpg"}
          className="img-gallery-top img-fluid"
          alt="image1" width="100%"
         ></img> 

   <br/><br/>
   <div className="card gallery-heading">
       <h2>Some Picture Of Our Dairy Form</h2>
       </div> 
       <br/>            

<div className="row">
    <div className="col-md-4">
    <div className="container">
  <div className="card" data-toggle="modal" data-target="#myModal-1">
  <img
          src={process.env.PUBLIC_URL + "/img/gallery0.jpg"}
          className="img-gallery"
          alt="image1"
          width="100%"
          height="177px"
         ></img>   
  </div>

  
  <div className="modal fade" id="myModal-1">
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
      
       
        <div className="modal-header">
          <h4 className="modal-title">Dhairya Dairy Forms</h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        
        
        <div className="modal-body">
        <img
          src={process.env.PUBLIC_URL + "/img/gallery0.jpg"}
          className="gallery-body"
          alt="image1"
          width="100%"
          height="auto"
         ></img>  
        </div>
      
        
      </div>
    </div>
  </div>
  
</div>

    
    </div>
    <div className="col-md-4">
    <div className="container">
  <div className="card" data-toggle="modal" data-target="#myModal-2">
  <img
          src={process.env.PUBLIC_URL + "/img/gallery2.jpg"}
          className="img-gallery"
          alt="image1"
          width="100%"
          height="auto"
         ></img>   
  </div>

  
  <div className="modal fade" id="myModal-2">
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
      
       
        <div className="modal-header">
          <h4 className="modal-title">Dhairya Dairy Forms</h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        
        
        <div className="modal-body">
        <img
          src={process.env.PUBLIC_URL + "/img/gallery2.jpg"}
          className="gallery-body"
          alt="image1"
          width="100%"
          height="auto"
         ></img>  
        </div>
    
        
      </div>
    </div>
  </div>
  
</div>

    
    </div>
    <div className="col-md-4">
    <div className="container">
  <div className="card" data-toggle="modal" data-target="#myModal-3">
  <img
          src={process.env.PUBLIC_URL + "/img/gallery3.jpg"}
          className="img-gallery"
          alt="image1"
          width="100%"
          height="auto"
         ></img>   
  </div>

  
  <div className="modal fade" id="myModal-3">
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
       <div className="modal-header">
          <h4 className="modal-title">Dhairya Dairy Forms</h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        
        
        <div className="modal-body">
        <img
          src={process.env.PUBLIC_URL + "/img/gallery3.jpg"}
          className="gallery-body"
          alt="image1"
          width="100%"
          height="auto"
         ></img>
        </div>
        
        
      </div>
    </div>
  </div>
  
</div>

    
    </div>

   </div>

<br/>
   <div className="row">
    <div className="col-md-4">
    <div className="container">
  <div className="card" data-toggle="modal" data-target="#myModal-4">
  <img
          src={process.env.PUBLIC_URL + "/img/gallery4.jpg"}
          className="img-gallery"
          alt="image1"
          width="100%"
          height="auto"
         ></img>   
  </div>

  
  <div className="modal fade" id="myModal-4">
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
      
       
        <div className="modal-header">
          <h4 className="modal-title">Dhairya Dairy Forms</h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        
        
        <div className="modal-body">
        <img
          src={process.env.PUBLIC_URL + "/img/gallery4.jpg"}
          className="gallery-body"
          alt="image1"
          width="100%"
          height="auto"
         ></img>  
        </div>
      
        
      </div>
    </div>
  </div>
  
</div>

    
    </div>
    <div className="col-md-4">
    <div className="container">
  <div className="card" data-toggle="modal" data-target="#myModal-5">
  <img
          src={process.env.PUBLIC_URL + "/img/gallery5.jpg"}
          className="img-gallery"
          alt="image1"
          width="100%"
          height="auto"
         ></img>   
  </div>

  
  <div className="modal fade" id="myModal-5">
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
      
       
        <div className="modal-header">
          <h4 className="modal-title">Dhairya Dairy Forms</h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        
        
        <div className="modal-body">
        <img
          src={process.env.PUBLIC_URL + "/img/gallery5.jpg"}
          className="gallery-body"
          alt="image1"
          width="100%"
          height="auto"
         ></img>  
        </div>
    
        
      </div>
    </div>
  </div>
  
</div>

    
    </div>
    <div className="col-md-4">
    <div className="container">
  <div className="card" data-toggle="modal" data-target="#myModal-6">
  <img
          src={process.env.PUBLIC_URL + "/img/gallery6.jpg"}
          className="img-gallery"
          alt="image1"
          width="100%"
          height="177px"
         ></img>   
  </div>

  
  <div className="modal fade" id="myModal-6">
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
       <div className="modal-header">
          <h4 className="modal-title">Dhairya Dairy Forms</h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        
        
        <div className="modal-body">
        <img
          src={process.env.PUBLIC_URL + "/img/gallery6.jpg"}
          className="gallery-body"
          alt="image1"
          width="100%"
          height="auto"
         ></img>
        </div>
        
        
      </div>
    </div>
  </div>
  
</div>

    
    </div>

   </div>


</div>
    )
  
}
 



export default Gallery;



