import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaMobileAlt } from "react-icons/fa";

function MobileProjectCard(props) {
    return (
        <Card className="mobile-project-card-view">
            {/* Mobile Project Image */}
            <div className="mobile-project-img-wrapper">
                <Card.Img
                    variant="top"
                    src={props.imgPath}
                    alt="card-img"
                    className="mobile-project-card-img"
                />
            </div>
            {/* Card Body */}
            <Card.Body className="mobile-project-card-body">
                <Card.Title className="mobile-project-card-title">{props.title}</Card.Title>
                <Card.Text className="mobile-project-card-text">{props.description}</Card.Text>
                {!props.isBlog && props.demoLink && (
                    <Button
                        variant="primary"
                        href={props.demoLink}
                        target="_blank"
                        className="mobile-project-card-btn"
                    >
                        <FaMobileAlt className="btn-icon" /> &nbsp; View Demo
                    </Button>
                )}
            </Card.Body>
        </Card>
    );
}

export default MobileProjectCard;
