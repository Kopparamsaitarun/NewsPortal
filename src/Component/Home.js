import React from "react";
function Home() {
  let coursellist = [
    {
      id: "1",
      image: "https://7knetwork.com/wp-content/uploads/2021/05/p12.jpg",
      dec: "image 1",
    },
    {
      id: "2",
      image: "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg",

      dec: "image 2",
    },
    {
      id: "3",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTagGCuu_6KCSKkn4AoKd9IWPaL3_NC3WHqgw&usqp=CAU",
      dec: "image 3",
    },
    {
        id: "5",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRItkLNhOI5f5KyCF5W3IRdbsVtWEHNeIoSLw&usqp=CAU",
        dec: "image 4",
      },
  ];
  return (
<div id="carouselExample" className="carousel slide" >
<div className="carousel-inner">
    {coursellist.map((slide,id)=>{
        return(
          <div className={"carousel-item " + (id === 0 ? 'active' : '')}>
              <img src={slide.image} className="d-block w-100" />
            </div>                    
         
        );
    })}
     </div>  
 
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
   
  );
}

export default Home;
