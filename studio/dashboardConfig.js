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
                  buildHookId: '5cfd055ad615fb574766f72e',
                  title: 'Sanity Studio',
                  name: 'ip-us-tv-studio',
                  apiId: 'f4880a57-28fc-4220-8816-e862e9f8f68a'
                },
                {
                  buildHookId: '5cfd055afe264c37ab4f6451',
                  title: 'Landing pages Website',
                  name: 'ip-us-tv',
                  apiId: 'ec4a920d-50d9-4ae0-a297-fcf7730bcadc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/engrrajib/ip-us-tv',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://ip-us-tv.netlify.com', category: 'apps'}
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
