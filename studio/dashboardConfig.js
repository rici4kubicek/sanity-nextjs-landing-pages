export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5d1fab776084340187de7126',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-sncnejyd',
                  apiId: '654cbe58-ba99-403a-bb0c-3abf307e3718'
                },
                {
                  buildHookId: '5d1fab782269166c9dccd686',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-uvha7id6',
                  apiId: 'deb48cf3-6d4a-4e61-8906-5db7b438f59c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rici4kubicek/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-uvha7id6.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
