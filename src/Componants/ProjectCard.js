import React from "react";
import { Col } from "react-bootstrap";


function ProjectCard ({imgUrl,title,description}){
    return(
        <Col sm={12} md={6} xl={4}>
        <div className="pro-item">
            <img src={imgUrl} className="w-100"/>
            <div className="pro-content">
                <h3>{title}</h3>
                <span>{description}</span>
            </div>
        </div>
    </Col>
    )
}

export default ProjectCard;