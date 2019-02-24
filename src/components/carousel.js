import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import picture_1 from '../Assets/images/homePagePic.png';
import picture_2 from '../Assets/images/homePagePic2.png';
import picture_3 from '../Assets/images/homePagePic3.png';

const items = [
    {
        src: picture_1,
        // altText: 'Slide 1',
        // caption: 'Slide 1',
        // header: 'Slide 1 Header'
    },
    {
        src: picture_2, 
        // altText: 'Slide 2',
        // caption: 'Slide 2',
        // header: 'Slide 2 Header'
    },
    {
        src: picture_3,
        // altText: 'Slide 3',
        // caption: 'Slide 3',
        // header: 'Slide 3 Header'
    }
];

const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;