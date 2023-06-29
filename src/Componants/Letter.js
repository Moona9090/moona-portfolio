import React from "react";
import { Row ,Col} from 'react-bootstrap';
function Letter (){
    return(
        <Col lg={12}>
            <div className="letter-box ">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>See my projects at once & leave your email adrees</h3>
                    </Col>
                    <Col lg={12} md={6} xl={7}>
                        <form>
                            <div className="letter-sub">
                                <input type="email" placeholder="E-mail adress"/>
                                <button>Submit</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}

export default Letter ;