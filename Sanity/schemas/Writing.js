import { BsVectorPen as icon } from 'react-icons/bs';

export default {
  name: 'writing',
  // visible title
  title: 'Selected technical writing links - on index page',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Article title',
      type: 'string',
      description: 'Title of the article / tutorial',
    },
    {
      name: 'articleLink',
      title: 'article link',
      type: 'url',
      description: 'Article / tutorial URL',
    },
  ],
};
