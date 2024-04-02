import { Container, Row, Col } from "react-bootstrap";
import flavor from "../assets/img/flavor.png";
import game from "../assets/img/game.jpeg"
import Homelyhub from "../assets/img/HomelyHub.jpeg"

import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"


function Project(){

    const projects = [
        {
          title: "flavor-fusion   Technology: React.js",
          description: "DELICIOUS, AUTHENTIC NASHVILLE HOT BURGER",
          imgUrl: flavor,
          webUrl: "https://flavor-fusion-18.netlify.app/"
          
        },

        {
          title: "Golf Web-Clone Technology :HTML ,CSS ,Javascript",
          description: "SidCup Golf Family",
          imgUrl: game,
          webUrl: "https://sidcupclonebyshiva.netlify.app/"
          
        },

        {
          title: "HomelyHub",
          description: " Technology : MERN stack development HomelyHub is a platform that lets people find and book unique  stay while traveling.",
          imgUrl: Homelyhub,
          webUrl: "https://github.com/ShivnarayanTelangre/HomelyHub"
          
        },
       
         
      ];

    return(
        <div>
            <section className="project" id="projects">
                <Container>
                    <Row>
                        <Col>
                            <h2>Projects</h2>
                            <p>Discover my portfolio of projects, each a testament to simplicity, functionality, and creative design. Let's build something amazing together.</p>  
                        </Col>
                    </Row>
                    <Row>
                      {
                        projects.map((project, index) => {
                          return(
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          )
                        })
                      }
                    </Row>
                </Container>
                <img className="background-image-right" src={colorSharp2}/>
            </section>
        </div>
    )
}

export default Project;