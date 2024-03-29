import * as React from 'react';
import { graphql, GatsbyGraphQLObjectType } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from 'src/components/layout/layout';

const BlogPost: React.FC<{
    data: {
        mdx: {
            frontmatter: {
                title: string;
                date: string;
            };
            body: string;
        };
    };
}> = ({ data }) => {
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>{data.mdx.frontmatter.date}</p>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </Layout>
    );
};

export const query = graphql`
    query ($id: String) {
        mdx(id: { eq: $id }) {
            frontmatter {
                title
                date(formatString: "MMMM D, YYYY")
            }
            body
        }
    }
`;

export default BlogPost;
