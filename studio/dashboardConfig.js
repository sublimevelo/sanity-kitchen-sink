export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '606911385f1aca9cb61b99c9',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-bu81kreh',
                  apiId: 'ffc7c503-a3cb-48e7-89f9-2202c10ffc07'
                },
                {
                  buildHookId: '60691138d0439fe6e59f0c83',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-wgkfiujd',
                  apiId: 'da54063a-b01c-40e0-81da-05e99aba9797'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sublimevelo/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-wgkfiujd.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
