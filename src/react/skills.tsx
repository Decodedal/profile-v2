import { useStore } from '@nanostores/react';
import { skillsStore } from '../atoms/skills';
import "../styles/react/skills.css";
import { useState } from 'react';
import type { SkillName, Skills } from "../types";

function SkillsComponent() {
    const skills = useStore(skillsStore) as Skills; // Type assertion here
    console.log(skills);

    const needsBackground: SkillName[] = ["astro", "react", "sql", "node", "odoo", "sass", "htmlCss"];

    const [openSkill, setOpenSkill] = useState<SkillName | null>(null);

    const handleSkillNameSet = (name: SkillName) => {
        let currentSkill = openSkill;
        if (name === currentSkill) {
            currentSkill = null;
        } else {
            currentSkill = name;
        }
        setOpenSkill(currentSkill);
    };

    return (
        <div className="skills-container">
            {Object.entries(skills).map(([key, values], i) => {
                const skillKey = key as SkillName; // Type assertion here
                const randomDelay = `${((Math.random() * 10) + 5).toFixed(1)}s`;
                const randomDuration = `${((Math.random() * 20) + 10).toFixed(1)}s`;

                return (
                    <div key={`${values.img}+${i}`} className={`single-skill skill${i}`}>
                        <div className="balloon"><div className="string"></div></div>

                        <img
                            onClick={() => handleSkillNameSet(skillKey)}
                            className={`skill-img ${needsBackground.includes(skillKey) ? 'skill-background' : ''}`}
                            src={values.img}
                            style={{ animation: `float ${randomDuration} infinite`, animationDelay: `${randomDelay}` }}
                        />
                        <div className="skill-cloud"></div>
                    </div>
                );
            })}
        </div>
    );
}

export default SkillsComponent;
