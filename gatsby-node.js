const path = require(`path`);
const slugify = require("slugify");

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query {
      allContentfulOfertyNieruchmosci {
        nodes {
          id
          adres
        }
      }
    }
  `);
  data.allContentfulOfertyNieruchmosci.nodes.forEach((node) => {
    const slug = `Realizacje/${slugify(node.adres.toLowerCase())}`;

    actions.createPage({
      path: slug,
      component: path.resolve("./src/components/OfertaTemplate.jsx"),
      context: {
        id: node.id,
      },
    });
  });
};
