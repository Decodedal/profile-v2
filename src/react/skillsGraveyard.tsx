import { useStore } from '@nanostores/react';
import { skillsStore } from '../atoms/skills';
import { themeAtom } from '../atoms/themeStore';
import "../styles/react/skills.scss";
import { useState, useEffect} from 'react';
import type { SkillName, Skills } from "../types";
import "../styles/react/skills-graveyard.scss"


function SkillsGraveyard() {


    const theme = useStore(themeAtom)
    const skills = useStore(skillsStore) as Skills;
    const needsBackground: SkillName[] = ["astro", "react", "sql", "node", "odoo", "sass", "htmlCss"];

    const [leftPositions, setLeftPositions] = useState<number[]>([]);

  useEffect(() => {
    const calculateRandomPositions = () => {
      const screenWidth = window.innerWidth;
      const elementWidth = 100; // Assuming each element is 100px wide
      const availableWidth = screenWidth - elementWidth;
      const sectionWidth = availableWidth / 9;
      
      const newPositions = Array(9).fill(0).map((_, index) => {
        const minPosition = index * sectionWidth;
        const maxPosition = (index + 1) * sectionWidth - elementWidth;
        return Math.floor(Math.random() * (maxPosition - minPosition + 1)) + minPosition;
      });

      setLeftPositions(newPositions);
    };

    calculateRandomPositions();
    window.addEventListener('resize', calculateRandomPositions);

    return () => {
      window.removeEventListener('resize', calculateRandomPositions);
    };
  }, []);

  console.log("Hello",leftPositions)

    return(
        <div className='grave-component'>
            {
                Object.entries(skills).map(([key, values], i) =>{
                    const skillKey = key as SkillName;
                    return(
                        <img
                            // onClick={() => handleSkillNameSet(skillKey)}
                            className={`${values.inSky ? "skill-hide" : ''} skill-img-bottom img-bottom-${i + 1} ${needsBackground.includes(skillKey) ? 'skill-background' : ''}`}
                            src={values.img}
                            style={{left:leftPositions[i]}}
                        />
                    )
                })
            }
        </div>
    )

}

export default SkillsGraveyard