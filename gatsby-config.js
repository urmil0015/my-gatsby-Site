module.exports = {
  siteMetadata: {
      title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "blog",
      "path": "./blog/"
    },  
  },
  "gatsby-plugin-mdx",
  "gatsby-transformer-sharp",
]
};