import * as React from "react";
import { graphql, Link } from 'gatsby';

import Layout from "../../components/layout";

const Blog = ({data}) => {
    return (
        <div>
            <Layout subTitle="Blog page!"> 
                {
                    data.allMdx.nodes.map(node => (
                        <article key={node.id}>
                            <Link to={node.slug}><h2>{node.frontmatter.title}</h2></Link>
                            <p>Posted: {node.frontmatter.date}</p>
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
            slug
          }
        }
      }
`

export default Blog;