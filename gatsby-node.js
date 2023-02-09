exports.createPages = async ({actions,graphql,reporter}) => {
  const { createPage } = actions;

  //Create pages for each event
  const result = await graphql(`
  {
    allContentfulEvent {
      nodes{
        slug
      }
    }
  }
  `);
  if (result.errors){
    reporter.panic('Error loading events', JSON.stringify(result.errors));
  }
  result.data.allContentfulEvent.nodes.forEach(event => {
    actions.createPage({
      path: `/events/${event.slug}`,
      component: require.resolve('./src/templates/event-template.js'),
      context: {
        slug: event.slug,
      }
    })
  })

  const ProjectLocations = await graphql(`
    query{
      allContentfulProjectLocation {
        nodes{
          slug
          id
          project{
            id
            slug
          }
        }
      }
    }
  `);
  if (result.errors){
    reporter.panic('Error loading events', JSON.stringify(result.errors));
  }

  ProjectLocations.data.allContentfulProjectLocation.nodes.forEach(location => {
    createPage({
      path: `/projects/${location.slug}`,
      component: require.resolve(`./src/templates/project-location-template.js`),
      context: {
        slug: location.slug,
      }
    })

    location.project.forEach(proj => {
      createPage({
        path: `projects/${location.slug}/${proj.slug}`,
        component: require.resolve(`./src/templates/project-template.js`),
        context: {
        slug: proj.slug,
        },
      })
    })
  })
};