import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

export interface ContactItem {
  link: string;
  label: string;
  icon: IconDefinition;
}

const data: ContactItem[] = [
  {
    link: 'https://github.com/yang79726',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'mailto:liuxf2023@lzu.edu.cn',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
