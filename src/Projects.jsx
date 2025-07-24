import React from "react";
import { Col, Divider, Row, Card } from "antd";
const { Meta } = Card;

const ProjectCard = ({ image, imageDesc, title, description }) => {
  return (
    <Card
      className="expandOnHover"
      hoverable
      style={{
        backgroundColor: "#EBEAEB",
        minHeight: "60vh",
        overflow: "hidden",
      }}
      cover={
        <img
          style={{
            height: "30vh",
          }}
          alt={imageDesc}
          src={image}
        />
      }
    >
      <Meta title={title} description={description} />
    </Card>
  );
};

const Projects = () => {
  return (
    <div>
      <Row
        className="projectCardRow"
        style={{
          color: "#3E3B3F",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Col span={6}>
          <ProjectCard
            image="/inventoryManager.png"
            imageDesc="The detail page for whole milk showing edit history."
            title={
              <h1
                style={{
                  color: "#3E3B3F",
                }}
              >
                Cafe Inventory Manager
              </h1>
            }
            description={
              <p>
                An online application for tracking inventory counts with edit
                history and account verification. Uses Firebase for user
                authentification and storage. Records a history of changes as
                well as who changes were made by, allowing users to input the
                price they bought ingredients at. Try it out yourself at{" "}
                <a
                  target="_blank"
                  href="https://cafe-inventory-manager.web.app/"
                >
                  https://cafe-inventory-manager.web.app/
                </a>
              </p>
            }
          />
        </Col>

        <Col span={6}>
          <ProjectCard
            image="/sunsetDetector.png"
            imageDesc="The front page of my Sunset Detector IEEE paper."
            title={
              <h1
                style={{
                  color: "#3E3B3F",
                }}
              >
                Sunset Detector
              </h1>
            }
            description={
              <p>
                A machine learning project where I trained three models to classify sunsets. The first used a more
                traditional image recognition style of extracting features and
                optimizing hyperparameters for a support vector machine (SVM). Features were extracted
                through LST conversion & standardization. The second utilized
                AlexNet, experimenting with both feature extraction from one of
                the final layers of AlexNet and transfer learning of its final
                layers.{" "}
                <a
                  target="_blank"
                  href="https://docs.google.com/document/d/1NHrTAmSWwWwIIfITVJ68XA2OJMFqOv9NImNsgdZmSFg/edit?usp=sharing"
                >
                  Read the paper here!
                </a>
              </p>
            }
          />
        </Col>

        <Col span={6}>
          <ProjectCard
            image="/inventoryManager.png"
            imageDesc="The cat search page for CatFinder, a website that allows users to see nearby shelters and cats."
            title={
              <h1
                style={{
                  color: "#3E3B3F",
                }}
              >
                title
              </h1>
            }
            description={
              <p>
                to be added{" "}
                <a
                  target="_blank"
                  href="https://cahttps://docs.google.com/document/d/1_SSlWuaqTrZvJRTHeFDanx7JXKpK23D_p7NHPuvS_f4/edit?usp=sharingfe-inventory-manager.web.app/"
                >
                  some link
                </a>
              </p>
            }
          />
        </Col>
      </Row>

      <Row
        className="projectCardRow"
        style={{
          color: "#3E3B3F",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Col span={6}>
          <ProjectCard
            image="/inventoryManager.png"
            imageDesc="The homepage for the cafe inventory manager that lists ingredient cards."
            title={
              <h1
                style={{
                  color: "#3E3B3F",
                }}
              >
                Cafe Inventory Manager
              </h1>
            }
            description={
              <p>
                An online application for tracking ingredient counts with edit
                history and account verification. Uses Firebase for user
                authentification and storage. Records a history of changes as
                well as who changes were made by, allowing users to input the
                price they bought ingredients at. View the website at{" "}
                <a
                  target="_blank"
                  href="https://cafe-inventory-manager.web.app/"
                >
                  https://cafe-inventory-manager.web.app/
                </a>
              </p>
            }
          />
        </Col>

        <Col span={6}>
          <ProjectCard
            image="/sunsetDetector.png"
            imageDesc="The homepage for the cafe inventory manager that lists ingredient cards."
            title={
              <h1
                style={{
                  color: "#3E3B3F",
                }}
              >
                Sunset Detector
              </h1>
            }
            description={
              <p>
                rained three models to classify sunsets. First using a more
                traditional image recognition style of extracting features and
                optimizing hyperparameters for an SVM. Features were extracted
                through LST conversion & standardization. Secondly, we utilize
                AlexNet, experimenting with both feature extraction from one of
                the final layers of AlexNet and transfer learning of its final
                layers.{" "}
                <a
                  target="_blank"
                  href="https://cahttps://docs.google.com/document/d/1_SSlWuaqTrZvJRTHeFDanx7JXKpK23D_p7NHPuvS_f4/edit?usp=sharingfe-inventory-manager.web.app/"
                >
                  Read the paper here!
                </a>
              </p>
            }
          />
        </Col>

        <Col span={6}>
          <ProjectCard
            image="/inventoryManager.png"
            imageDesc="The homepage for the cafe inventory manager that lists ingredient cards."
            title={
              <h1
                style={{
                  color: "#3E3B3F",
                }}
              >
                title
              </h1>
            }
            description={
              <p>
                to be added{" "}
                <a
                  target="_blank"
                  href="https://cahttps://docs.google.com/document/d/1_SSlWuaqTrZvJRTHeFDanx7JXKpK23D_p7NHPuvS_f4/edit?usp=sharingfe-inventory-manager.web.app/"
                >
                  some link
                </a>
              </p>
            }
          />
        </Col>
      </Row>
    </div>
  );
};

export default Projects;
