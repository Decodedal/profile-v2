type SkillName = 'astro' | 'htmlCss' | 'javaScript' | 'node' | 'odoo' | 'python' | 'react' | 'sass' | 'sql';


interface Skill {
    img: string;
    inSky: boolean;
  }

export type Skills = Record<SkillName, Skill>;