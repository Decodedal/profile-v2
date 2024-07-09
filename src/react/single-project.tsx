import type { FunctionComponent } from "react"
import { useState } from "react"
import "../styles/react/projects.scss"

type ProjectProps = {
    left: boolean;
    name:string;
    images: string[];
    description:string,
    links: {
        name:string,
        url:string
    }[]
}



const SingleProject: FunctionComponent<ProjectProps> = ({ left, images, description, links, name }) => {

    const [selectedImg, setSelectedImg] = useState(images[0])

    return (
        <div className={`single-project ${left ? "left-config" : ""}`}>
            <div className="project-description">
                <h6>{name}</h6>
                <p>{description}</p>
                <ul>
                   {
                    links.map(link =>{
                        return <a href={link.url} target="_blank"><li>{link.name}</li></a>
                    })
                   }
                </ul>
            </div>
            <div className="anchor-container">
                <div className="project-img-container">
                    <img className="selected-img" src={selectedImg} alt="project img" />
                    <h6 className="project-imgs">
                        {
                            images.map(img => {
                                return (
                                    <img className={`img-option ${img === selectedImg ? 'active' : ''}`} src={img} alt="img of project" onClick={() => setSelectedImg(img)}></img>
                                )
                            })
                        }
                    </h6>
                </div>
                <img className="anchor" src="/anchor.png" alt="anchor weighting project container down" />
            </div>
        </div>
    )

}

export default SingleProject