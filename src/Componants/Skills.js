
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {Container , Row ,Col} from 'react-bootstrap';
function Skills() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
      const percentage1 = 94 ;
      const percentage2 = 91 ;
      const percentage3 = 89 ;
      const percentage4 = 90 ;
      const percentage5 = 87 ;
  return (
    <section className='Skills' id='Skills'>
        <Container>
        <Row>
            <Col xs={12}>
               
                <h2 className="skills-title">Skills</h2>
                <p className="skills-des">This is my skill in web development and I am working on developing it</p>
                <div className="skills-main">
                <Carousel responsive={responsive} infinite={true}>
                    <div className="skills-item">
                      <CircularProgressbar value={percentage1} text={`${percentage1}%`}styles={buildStyles({
                            backgroundColor: "#3e98c7",
                            textColor: "#fff",
                            pathColor: "#e0aaff",
                            trailColor: "transparent"
                            })} />
                      <h2>HTML5</h2>
                    </div>
                    <div className="skills-item">
                      <CircularProgressbar value={percentage2} text={`${percentage2}%`} styles={buildStyles({
                            backgroundColor: "#3e98c7",
                            textColor: "#fff",
                            pathColor: "#e0aaff",
                            trailColor: "transparent"
                            })} />
                      <h2>CSS3</h2>
                    </div>
                    <div className="skills-item">
                      <CircularProgressbar value={percentage3} text={`${percentage3}%`} styles={buildStyles({
                            backgroundColor: "#3e98c7",
                            textColor: "#fff",
                            pathColor: "#e0aaff",
                            trailColor: "transparent"
                            })} />
                      <h2>Java Script</h2>
                    </div>
                    <div className="skills-item">
                      <CircularProgressbar value={percentage4} text={`${percentage4}%`} styles={buildStyles({
                            backgroundColor: "#3e98c7",
                            textColor: "#fff",
                            pathColor: "#e0aaff",
                            trailColor: "transparent"
                            })} />
                      <h2>Bootstrap</h2>
                    </div>
                    <div className="skills-item">
                      <CircularProgressbar value={percentage5} text={`${percentage5}%`} styles={buildStyles({
                            backgroundColor: "#3e98c7",
                            textColor: "#fff",
                            pathColor: "#e0aaff",
                            trailColor: "transparent"
                            })}/>
                      <h2>React JS</h2>
                    </div>
                </Carousel>
               </div>
            </Col>
        </Row>
    </Container>
    </section>
    
  );
}

export default Skills;