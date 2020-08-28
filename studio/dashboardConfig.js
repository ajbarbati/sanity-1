export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
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
                  buildHookId: '5f49490091ef87cb583f666a',
                  title: 'Sanity Studio',
                  name: 'sanity-1-studio-jjaj6ajq',
                  apiId: '10e69dc6-8375-4b2d-9b8c-51162bc3e5d9'
                },
                {
                  buildHookId: '5f494900384e78f94da46104',
                  title: 'Blog Website',
                  name: 'sanity-1-web',
                  apiId: 'ca78eff3-d476-494a-bcf6-8453bd7a1485'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ajbarbati/sanity-1',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-1-web.netlify.app', category: 'apps'}
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
