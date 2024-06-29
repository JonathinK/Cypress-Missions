
exports.createPages = async({actions, graphql,reporter}) => {
  //Create Pages Function
  const result = await graphql(`
  query {
    allContentfulPage {
      nodes {
        codeId
        slug
      }
    }
    allContentfulPolicyDocuments {
      nodes {
        codeId
        slug
      }
    }
    allContentfulProject {
      nodes {
        codeId
        slug
      }
    }
    allContentfulBlogArticle {
      nodes {
        codeId
        slug
      }
    }
    allContentfulEvent{
      nodes{
        codeId
        slug
      }
    }
  }
  `)  
  //Error Handling
  if(result.errors){
    reporter.panic('Error loading pages', JSON.stringify(result.errors));
  }
  //Pages Build
  result.data.allContentfulPage.nodes.forEach(page => {
    const { codeId, slug } = page;

    //Template Selector
    let templateSelector;

    //Doesn't Build Homepage
    if(codeId === "home"){
      return;
    }
    else if(codeId === "about_cypress"){
      templateSelector = require.resolve("./src/templates/about_template.js");
    }
    else if(codeId === "our_work"){
      templateSelector = require.resolve("./src/templates/our_work_template.js");
    }
    else if (codeId === "events"){
      templateSelector = require.resolve("./src/templates/events_template.js");
    }
    else if (codeId === "volunteer"){
      templateSelector = require.resolve("./src/templates/volunteer_template.js");
    }
    else if (codeId === "contact"){
      templateSelector = require.resolve("./src/templates/contact_template.js");
    }
    else if (codeId === "projects"){
      templateSelector = require.resolve("./src/templates/projects_template.js");
    }
    else if (codeId === "news_and_stories"){
      templateSelector = require.resolve("./src/templates/blog_template.js");
    }
    else{
      return null;
    }
    actions.createPage({
      path: page.slug,
      component: templateSelector,
      context: {
        slug: page.slug,
      }
    })
  })
  //Policy Pages Build
  result.data.allContentfulPolicyDocuments.nodes.forEach(policy => {
    actions.createPage({
      path: policy.slug,
      component: require.resolve("./src/templates/policy_template.js"),
      context: {
        slug: policy.slug
      }
    })
  });
  
  //ProjectPage
  result.data.allContentfulProject.nodes.forEach(project => {
    const { codeId, slug } = project;
    actions.createPage({
      path: `/projects/${project.slug}`,
      component: require.resolve("./src/templates/project_template.js"),
      context: {
        slug: project.slug,
      }
    })
  }); 
  
  //EventPage
  result.data.allContentfulEvent.nodes.forEach(event => {
    const { codeId, slug } = event;
    actions.createPage({
      path: `/events/${event.slug}`,
      component: require.resolve("./src/templates/event_template.js"),
      context: {
        slug: event.slug,
      }
    })
  });
  
  //Blog Article
  result.data.allContentfulBlogArticle.nodes.forEach(article => {
    let templateSelector;
    if(article.codeId === "story_article"){
      templateSelector = require.resolve("./src/templates/story_template.js")
    }else if (article.codeId === "news_article"){
      templateSelector = require.resolve("./src/templates/news_template.js")
    }else{
      return null;
    }
    actions.createPage({
      path: `/news-and-stories/${article.slug}`,
      component: templateSelector,
      context: {
        slug: article.slug,
      }
    })
  })
}