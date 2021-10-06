import * as React from "react";
import { graphql } from 'gatsby';

import Layout from "../components/layout";

const Blog = ({data}) => {
    return (
        <div>
            <Layout subTitle="Blog page!"> 
                This is where you can see all of my blog posts!
                <br/> <br/>
                {
                    data.allFile.nodes.map(node => (
                        <li key={node.name}>{node.name}</li>
                    ))
                }
            </Layout>
        </div>
        
    );
};

export const query = graphql`
    query {
        allFile {
        nodes {
            name
        }
        }
    }
`

export default Blog;