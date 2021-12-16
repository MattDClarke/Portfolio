import { GrNotes as icon } from 'react-icons/gr';

export default {
  name: 'project',
  // visible title
  title: 'Projects',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Project Name',
      type: 'string',
      description: 'Name of the project',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'summary',
      title: 'Project Summary',
      type: 'string',
      description: 'Summary of what the project is about',
    },
    {
      name: 'imageHomePageLight',
      title: 'Light mode image for home page',
      type: 'image',
    },
    {
      name: 'imageHomePageDark',
      title: 'Dark mode image for home page',
      type: 'image',
    },
    {
      name: 'tech',
      title: 'Technologies used',
      type: 'array',
      description: 'Technologies used in the project (e.g. React)',
      of: [{ type: 'string' }],
    },
    {
      name: 'gitHubLink',
      title: 'GitHub link',
      type: 'string',
      description: 'GitHub repository URL',
    },
    {
      name: 'websiteLink',
      title: 'Website link',
      type: 'string',
      description: 'Website URL',
    },
  ],
};
