import * as React from "react";
import {StaticImage} from "gatsby-plugin-image";

import Layout from "../components/layout";

const IndexPage = () => {
    return (
      <div>
          <Layout subTitle="Home" subText="Welcome to the home page of my website!"/>
          <StaticImage 
          src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
          alt="Cute dog"
          />
      </div>
    );
};

export default IndexPage;