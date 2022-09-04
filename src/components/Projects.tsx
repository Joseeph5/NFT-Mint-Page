import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import headerImg from '../assets/img/header-img.svg';
import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg1,
    },
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg2,
    },
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg3,
    },
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg1,
    },
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg2,
    },
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg3,
    },
  ];

  const textStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    textAlign: 'left',
  };

  return (
    <section className='project' id='project'>
      <Container>
        <Row className='aligh-items-center'>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__zoomIn' : ''}>
                  <img src={headerImg} alt='Header Img' />
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <h2>WHAT IS A POTATO?</h2>
            <p>
              The potato is a starchy tuber of the plant Solanum tuberosum and is a root
              vegetable native to the Americas. The plant is a perennial in the nightshade
              family Solanaceae.
            </p>
            <br />
            <p>
              Wild potato species can be found from the southern United States to southern
              Chile. The potato was originally believed to have been domesticated by
              Native Americans independently in multiple locations, but later genetic
              studies traced a single origin, in the area of present-day southern Peru and
              extreme northwestern Bolivia. Potatoes were domesticated there approximately
              7,000–10,000 years ago, from a species in the Solanum brevicaule complex.
            </p>
          </Col>
        </Row>
      </Container>
      <img className='background-image-right' src={colorSharp2}></img>
    </section>
  );
};
