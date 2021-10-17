import * as React from "react";
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Layout from "../../components/layout";


const BlogPost = ({data}) => {
    const image = getImage(data.mdx.frontmatter.hero_image);
    console.log(data);
    return (
        <div>
            <Layout subTitle={data.mdx.frontmatter.title}>
                <p>Date posted: {data.mdx.frontmatter.date}</p>
                <GatsbyImage
                    image = {image}
                    alt={data.mdx.frontmatter.hero_image_alt}
                />
                <p>
                    Photo credit: {" "} {/*to render space between the colon : and the credit_text*/}
                    <a href={data.mdx.frontmatter.hero_image_credit_link}>
                        {data.mdx.frontmatter.hero_image_credit_text}
                    </a>
                </p>
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
                date(formatString: "DD-MM-YYYY")
                title
                hero_image_alt
                hero_image_credit_link
                hero_image_credit_text
                hero_image {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        body
        }
    }
`

export default BlogPost;

