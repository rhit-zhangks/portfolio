import React from "react";
import { Col, Divider, Row, Card } from "antd";
const { Meta } = Card;

const ProjectCard = ({ image, imageDesc, title, description }) => {
  return (
    <Card
      className="expandOnHover"
      hoverable
      style={{
        backgroundColor: "var(--light-gray)"
      }}
      cover={
        <img
          className="object-cover"
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
      <div class="flex flex-row justify-center">
        <div>
          <ProjectCard
            image="/inventoryManager.png"
            imageDesc="The detail page for whole milk showing edit history."
            title={
              <h1
                style={{
                  color: "var(--dark-gray)",
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
        </div>

        <div>
          <ProjectCard
            image="/sunsetDetector.png"
            imageDesc="The front page of my Sunset Detector IEEE paper."
            title={
              <h1
                style={{
                  color: "var(--dark-gray)",
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
        </div>

        <div>
          <ProjectCard
            image="/inventoryManager.png"
            imageDesc="The cat search page for CatFinder, a website that allows users to see nearby shelters and cats."
            title={
              <h1
                style={{
                  color: "var(--dark-gray)",
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
        </div>
      </div>
    </div>
  );
};

export default Projects;
