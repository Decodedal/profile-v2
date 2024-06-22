import { useStore } from '@nanostores/react';
import { skillsStore } from '../atoms/skills';
import "../styles/react/skills.css"
import { useState } from 'react';
import type {SkillName} from "../types"




function SkillsComponent() {

    const skills = useStore(skillsStore) 
    console.log(skills)

    let needsBackground :string[] = ["astro", "react", "sql"]



    return<>
        <div className="skills-container">
           {
            Object.entries(skills).map(([key, values], i) =>{

               let randomDelay = `${((Math.random() * 10) + 5).toFixed(1)}s`
               let randomDuration = `${((Math.random() * 20) + 10).toFixed(1)}s`

                return(
                    <div key={`${values.img}+${i}`} className={`single-skill skill${i}`} >
                        <div className="balloon"><div className="string"></div></div>
                        
                        <img className={`skill-img ${needsBackground.includes(key) ? 'skill-background' : ''}`} src={values.img} style={{animation:`float ${randomDuration} infinite`, animationDelay:`${randomDelay}`}}/>
                        <div className="skill-cloud"></div>
                    </div>
                )
            })
           }
        </div>
    </>;
  }
  
export default SkillsComponent;