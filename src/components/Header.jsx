import Carousel from '/node_modules/react-bootstrap/Carousel'
import {FcNext} from 'react-icons/fc/'
import {FcPrevious} from 'react-icons/fc'
const Header = () => {
    return (
        <>
           
                <Carousel height="200px"
                variant="dark" fade
                nextIcon={<FcNext size={50}/>}
                prevIcon={<FcPrevious size={50}/>}
                prevLabel=""
                nextLabel="">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="men-women-fashion.jpg"
                            alt="First slide"
                        />

                    </Carousel.Item>
                    
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="26042023-UHP-D-Main-P3-IVocMissChase-Flat50extra30.jpg"
                            alt="Third slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="26042023-UHP-D-Main-P4-MuftiUSPA-Min40.jpg"
                            alt="Third slide"
                        />

                    </Carousel.Item>
                </Carousel>
            
        </>
    )
}
export default Header