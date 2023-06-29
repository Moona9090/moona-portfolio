import {Container , Row ,Col} from 'react-bootstrap';
import { FaArrowCircleRight } from "react-icons/fa";
import HomeLogo from "../Imges/half-moon.png";
import { useTypewriter , Cursor} from 'react-simple-typewriter';
import { HashLink } from 'react-router-hash-link';

function Home (){
    const [text] = useTypewriter({
        words: ['front-end','back-end','full-stack',],
        loop: {},
        typeSpeed: 120,
        deleteSpeed:80,
    });

    return(
        <section className='home ' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                     <h2 className='home-title'>Welcome eveyone to my portfolio</h2>
                     <h1 className='home-des'>Hi everyone i'm Amany Gamil Saber .<span>{text}</span><Cursor/></h1>
                     <p className='home-con'>Hi everyone this is my portfolio i'm front-end and looking to join a team .</p>
                     <HashLink to="#contact"><button className='home-but'>let's contect <FaArrowCircleRight/></button></HashLink>
                    </Col>
                    <Col xs={12} md={6} xl={5} >
                        <img src={HomeLogo} alt='logo' />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}


export default Home ;