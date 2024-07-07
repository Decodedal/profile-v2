import type { FunctionComponent } from "react"
import { useState } from "react"
import "../styles/react/projects.scss"

type ProjectProps = {
    left: boolean
    images: string[]
}



const SingleProject: FunctionComponent<ProjectProps> = ({ left, images }) => {

    const [selectedImg, setSelectedImg] = useState(images[0])

    return (
        <div className={`single-project ${left ? "left-config" : ""}`}>
            <div className="project-description">
                <h6>Name</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quos, eligendi iusto vel consequatur architecto ipsa minus, id beatae doloribus impedit cupiditate possimus error natus! Recusandae reprehenderit quaerat quisquam tempore?</p>
                <ul>
                    <li>link1</li>
                    <li>link1</li>
                    <li>link1</li>
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