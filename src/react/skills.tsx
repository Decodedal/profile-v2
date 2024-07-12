import { useStore } from '@nanostores/react';
import { skillsStore } from '../atoms/skills';
import { themeAtom } from '../atoms/themeStore';
import "../styles/react/skills.scss";
import { useState, useEffect} from 'react';
import type { SkillName, Skills } from "../types";


interface CustomCSSProperties extends React.CSSProperties {
    '--float-duration'?: string;
    '--float-delay'?: string;
}

function SkillsComponent() {


    const theme = useStore(themeAtom)
    const skills = useStore(skillsStore) as Skills;
    console.log("hello from skills page");

    const needsBackground: SkillName[] = ["astro", "react", "sql", "node", "odoo", "sass", "htmlCss"];

    const [openSkill, setOpenSkill] = useState<SkillName | null>(null);
    const [restoredSkills, setRestoredSkills] = useState<SkillName[]>([]);
    const [darkMode, setDarkmode] = useState(false)

    const handleSkillNameSet = (name: SkillName) => {
        console.log("clicked!", name);
        let currentSkill = openSkill;
        if (name === currentSkill) {
            currentSkill = null;
        } else {
            currentSkill = name;
        }
        setOpenSkill(currentSkill);
    };

    const setInSkyFalse = (name: SkillName) => {
        const updatedSkills = { ...skills, [name]: { ...skills[name], inSky: false } };
        skillsStore.set(updatedSkills);
    };

    const resetSkillsInSky = () => {
        const updatedSkills: Skills = { ...skills };
        const restored = Object.keys(updatedSkills).filter(skill => !updatedSkills[skill as SkillName].inSky) as SkillName[];
        restored.forEach((skill) => {
            updatedSkills[skill].inSky = true;
        });

        skillsStore.set(updatedSkills);
        setRestoredSkills(restored);

        // Remove the restored state after the animation completes
        setTimeout(() => {
            setRestoredSkills([]);
        }, 2000); // Match the duration of the floatUp animation
    };

    useEffect(()=>{
        if (typeof localStorage !== 'undefined') {
            const storedTheme = localStorage.getItem('theme');
            if (storedTheme) {
            setDarkmode(storedTheme === 'dark')
            } 
          }
    },[])

    return (
        <div className="skills-container">
            <p onClick={() => resetSkillsInSky()} className={`restore-button ${theme === 'dark' ? 'dark-descriptions' : ''} ${Object.values(skills).every(skill =>(skill.inSky))? 'hide' :''}`}>Restore Skills</p>
            {Object.entries(skills).map(([key, values], i) => {
                const skillKey = key as SkillName;
                const randomDelay = `${((Math.random() * 10) + 5).toFixed(1)}s`;
                const randomDuration = `${((Math.random() * 20) + 10).toFixed(1)}s`;

                const style: CustomCSSProperties = {
                    '--float-duration': randomDuration,
                    '--float-delay': randomDelay
                };

                return (
                    <div className="skill-total-container">
                        <div onClick={() => setOpenSkill(null)} className={`skill-description ${openSkill === key ? "description-show" : ''}  ${theme === 'dark' ? 'dark-descriptions' : ''}`}>
                            <h6>{key.charAt(0).toUpperCase() + key.slice(1)}</h6>
                            <p>{values.description}</p>
                        </div>
                    <div key={`${values.img}+${i}`} className={`single-skill skill${i} ${restoredSkills.includes(skillKey) ? 'float-up-animation' : ''}`}>
                        
                        <img className={`pop-image ${!values.inSky ? 'pop-animation' : ''}`} src='/pop.png' alt='cartoon pop'/>
                        <div className={`balloon ${!values.inSky ? "pop" : ""}`} onClick={() => { setInSkyFalse(skillKey); }}>
                            <div className="string"></div>
                        </div>

                        <img className={`falling-wind ${!values.inSky ? 'falling-wind-animation' : ''}`} src='/wind.png' alt='wind cartoon'/>
                        <img
                            onClick={() => handleSkillNameSet(skillKey)}
                            className={`skill-img ${needsBackground.includes(skillKey) ? 'skill-background' : ''} ${!values.inSky ? "skill-fall" : ""}`}
                            src={values.img}
                            style={style}
                        />
                        <div className="skill-cloud"></div>
                    </div>
                    </div>
                );
            })}
        </div>
    );
}

export default SkillsComponent;
