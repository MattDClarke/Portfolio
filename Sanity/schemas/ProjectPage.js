import { RiSlideshowLine as icon } from 'react-icons/ri';

export default {
  name: 'projectPage',
  // visible title
  title: 'Project Page - images',
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
      name: 'lightModeImages',
      title: 'Light Mode Images',
      type: 'array',
      of: [{ type: 'image' }],
    },
    {
      name: 'darkModeImages',
      title: 'Dark Mode Images',
      type: 'array',
      of: [{ type: 'image' }],
    },
    {
      name: 'projectPageInfo',
      title: 'Project Page Info - need for website and GitHub links',
      type: 'reference',
      to: [{ type: 'project' }],
    },
  ],
};
