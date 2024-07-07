export type SkillName = 'astro' | 'htmlCss' | 'typeScript' | 'node' | 'odoo' | 'python' | 'react' | 'sass' | 'sql';


interface Skill {
    img: string;
    inSky: boolean;
    description:string;
  }

export type Skills = Record<SkillName, Skill>;