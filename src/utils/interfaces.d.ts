interface Project {
  id: number;
  title: string;
  role: string;
  supervisors: string[];
  publications: Publication[];
  achievements: Achievement[];
  tools: Technology[];
  thumbnail: string;
  cssStyles: CSSStyles;
  category: 'research' | 'development' | 'design';
}

interface Publication {
  title: string;
  publisher: string;
  link: string;
  year: number;
}

interface Achievement {
  title: string;
  description: string;
  grantor?: string;
}

interface Technology {
  name: string;
  link: string;
  icon: string;
}

interface CSSStyles {
  wrapper: string;
  title: string;
  content: string;
  links: string;
}
interface ProjectTileProps {
  project: Project;
  flipped: boolean;
}