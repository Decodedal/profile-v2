export type SkillName = 'astro' | 'htmlCss' | 'typeScript' | 'node' | 'odoo' | 'python' | 'react' | 'sass' | 'sql';


interface Skill {
    img: string;
    inSky: boolean;
  }

export type Skills = Record<SkillName, Skill>;