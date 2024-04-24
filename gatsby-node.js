
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
  
  //Blog Article
  result.data.allContentfulBlogArticle.nodes.forEach(article => {
    actions.createPage({
      path: `/cypress-blog/${article.slug}`,
      component: require.resolve("./src/templates/news_template.js"),
      context: {
        slug: article.slug,
      }
    })
  })
}