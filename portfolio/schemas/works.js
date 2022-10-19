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