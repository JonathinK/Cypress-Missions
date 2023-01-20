exports.createPages = async ({actions,graphql,reporter}) => {
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
}
