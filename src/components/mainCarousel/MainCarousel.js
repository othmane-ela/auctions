import { Carousel } from '3d-react-carousal';
import AnimatedBox from '../offerBoxes/AnimatedBox';


export default function MainCarousel() {
            let slides = [
               <AnimatedBox productImage="https://picsum.photos/800/300/?random" owner="Marcos" title="Offer 1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</AnimatedBox>,
               <AnimatedBox productImage="https://picsum.photos/800/300/?random" owner="Marcos" title="Offer 1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</AnimatedBox>,
               <AnimatedBox productImage="https://picsum.photos/800/300/?random" owner="Marcos" title="Offer 1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</AnimatedBox>,
               <AnimatedBox productImage="https://picsum.photos/800/300/?random" owner="Marcos" title="Offer 1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</AnimatedBox>
               ,<AnimatedBox productImage="https://picsum.photos/800/300/?random" owner="Marcos" title="Offer 1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</AnimatedBox>
 ];
    return <div>
         <Carousel slides={slides} autoplay={false} interval={1000} />
    </div>
               
}