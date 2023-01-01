import {Carousel} from "antd";

function Slider() {
  return (
  <div className="App" style={{paddingTop:"10px"}}>
    <div
    style={{width:"100%",height:"400px",backgroundColor:"purple"}}
    >
        <Carousel 
        autoplay
        pauseOnHover
        dots={false}
        draggable>
            
            <div>
            
           <img src="images/slider1.jpg" height="400px" width="100%"/>
           
            </div>
            <div>
            <img src="images/slider2.jpg" height="400px" width="100%"/>
            </div>
            <div>
            <img src="images/slider3.jpg" height="400px" width="100%"/>
            </div>
        </Carousel>
        <div>
          
        </div>
    </div>
  
  </div>
  );
}

export default Slider;
