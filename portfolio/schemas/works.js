export default{
    name: 'works',
    title: 'Works',
    type: 'document',
    fields:[
        {
            name: 'title',
            title: 'Title',
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
          }
        ,
        {
            name: 'type',
            title: 'Type',
            type: 'string',
        },

        {
            name: 'client',
            title: 'Client',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'blockContent',
        },
        {
            name: 'date',
            title: 'Date',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
        {
            name: 'video',
            title: 'Video URL',
            type: 'string',
        },



    ]

}