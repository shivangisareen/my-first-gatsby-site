import * as React from "react";
import { graphql } from 'gatsby';
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../components/layout";

const Blog = ({data}) => {
    return (
        <div>
            <Layout subTitle="Blog page!"> 
                {
                    data.allMdx.nodes.map(node => (
                        <article key={node.id}>
                            <h2>{node.frontmatter.title}</h2>
                            <p>Posted: {node.frontmatter.date}</p>
                            <MDXRenderer>{node.body}</MDXRenderer>
                            <br/>
                        </article>
                    ))
                }
            </Layout>
        </div>
        
    );
};

export const query = graphql`
    query {
        allMdx(sort: {order: DESC, fields: frontmatter___date}) {
          nodes {
            frontmatter {
              title
              date(formatString: "DD-MM-YYYY")
            }
            id
            body
          }
        }
      }
`

export default Blog;