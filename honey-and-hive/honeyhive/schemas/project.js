export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Project Title',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'mainImage',
        title: 'Main Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'imagesGallery',
        title: 'Images Gallery',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        },
      },
      {
        name: 'location',
        title: 'Location',
        type: 'string',
      },
      {
        name: 'concept',
        title: 'Concept',
        type: 'text',
      },
      {
        name: 'interiorDesign',
        title: 'Interior Design',
        type: 'string',
      },
      {
        name: 'builder',
        title: 'Builder',
        type: 'string',
      },
      {
        name: 'photography',
        title: 'Photography',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
    ],
  };
  