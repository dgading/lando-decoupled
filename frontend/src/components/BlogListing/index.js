import React from 'react';
import styled from 'styled-components';

import BlogPost from './BlogPost';

const StyledBlogListing = styled.ul`
  list-style: none;
`;

const BlogListing = ({blogPosts, showPost}) => {
  return (
    <StyledBlogListing>
      { blogPosts.map(post => {
        return(
          <BlogPost 
            key={post.attributes.nid}
            title={post.attributes.title}
            summary={post.attributes.body.summary}
            link={post.attributes.path.alias}
            showPost={() => showPost(post)}
          />
        );
      })}
    </StyledBlogListing>
  );
}

export default BlogListing;
