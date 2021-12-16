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
      name: 'imageHomePageLight',
      title: 'Light mode image for home page',
      type: 'image',
    },
    {
      name: 'imageHomePageDark',
      title: 'Dark mode image for home page',
      type: 'image',
    },
  ],
};
