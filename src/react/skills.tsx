import { useStore } from '@nanostores/react';
import { skillsStore } from '../atoms/skills';
import "../styles/react/skills.css"
import { useState } from 'react';
import type { Skills } from '../types';



function SkillsComponent() {

    const skills = useStore(skillsStore) as Skills;

    console.log(skills)

    return<>
        <div className="skills-container">
           {
            Object.values(skills).map((values, i) =>{
                return(
                    <div key={`${values.img}+${i}`} className={`single-skill skill${i}`}>
                        <div className="balloon"></div>
                        <img className='skill-img' src={values.img}/>
                    </div>
                )
            })
           }
        </div>
    </>;
  }
  
export default SkillsComponent;