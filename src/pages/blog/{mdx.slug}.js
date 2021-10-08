import * as React from "react";
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from "../../components/layout";


const BlogPost = ({data}) => {
    return (
        <div>
            <Layout subTitle="Blog Posts Here!">
                <MDXRenderer>
                    {data.mdx.body}
                </MDXRenderer>
            </Layout>
        </div>
    )
};

export const query = graphql`
    query ($id: String) {
        mdx(id: {eq: $id}) {
        frontmatter {
            date
            title
        }
        body
        }
    }
`



export default BlogPost;

