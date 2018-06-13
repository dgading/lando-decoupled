import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledBlogPost = styled.li`
  text-align: left;
`;

const PostTitle = styled.h2`
  color: #999;
`;

const PostLink = styled.a`
  text-decoration: none;
  margin-right: 20px;
  &:hover {
    text-decoration: underline;
  }
`;

const ReadMore = styled.button`
  padding: 5px;
  background: none;
`;

const BlogPost = ({title, summary, link, showPost}) => {
  return(
    <StyledBlogPost>
      <PostTitle>{title}</PostTitle>
      <p>{summary}</p>
      <PostLink href={'http://cms.decoupled.lndo.site/' + link}>Read on CMS</PostLink>
      <ReadMore onClick={() => showPost()}>Read Here</ReadMore>
    </StyledBlogPost>
  );
}

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  link: PropTypes.string.isRequired,
  showPost: PropTypes.func.isRequired,
};

export default BlogPost;
