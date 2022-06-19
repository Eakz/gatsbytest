import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from 'src/components/layout/layout';

const BlogPage: React.FC<{
    data: {
        allFile: {
            nodes: any[];
        };
    };
}> = ({ data }) => {
    return (
        <Layout pageTitle='My Blog Posts'>
            <ul>
                {data.allFile.nodes.map(node => (
                    <li key={node.name}>{node.name}</li>
                ))}
            </ul>
        </Layout>
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
`;
export default BlogPage;