import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import BlogPost from './BlogPost/BlogPost';

const StyledBlogListing = styled.ul`
  list-style: none;
`;


class BlogListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
    this.constructPosts = this.constructPosts.bind(this);
    this.getIncludes = this.getIncludes.bind(this);
  }

  constructPosts(posts, includes) {

    let constructedPosts = [];
    posts.map((post, index) => {
      const postData = post;
      const postImages = this.getIncludes(post.relationships.field_image);
      const postTags = this.getIncludes(post.relationships.field_tags);
      const currentPost = {
        data: postData,
        images: postImages,
        tags: postTags
      }
      constructedPosts.push(currentPost)
      return constructedPosts;
    });
    this.setState({
      posts: constructedPosts
    })
  }

  getIncludes(field) {
    if(field.data === null) {
      return null;
    }
    const allIncludes = this.props.includes;
    const filteredResults = allIncludes.filter((include) => {
      let _include;
      if(Array.isArray(field.data)) {
        for(let i = 0; i < field.data.length; i++) {
          if(include.id === field.data[i].id) {
            _include = include;
          }
        }
      }
      if(include.id === field.data.id) {
        _include = include;
      }
      return _include;
    }
    );
    return filteredResults;
  }

  componentDidMount() {
    this.constructPosts(this.props.blogPosts, this.props.includes);
  }

  render() {
    let blogList;
    if(this.state.posts.length > 0) {
      blogList = this.state.posts.map(post => {
        return(
          <BlogPost 
            key={post.data.attributes.nid}
            title={post.data.attributes.title}
            summary={post.data.attributes.body.summary}
            link={post.data.attributes.path.alias}
            showPost={() => this.props.showPost({
              postData: post.data,
              postImages: post.images,
              postTags: post.tags
            })}
            images={post.images}
            tags={post.tags}
          />
        );
      })
    }
    return (
      <StyledBlogListing>
        {blogList}
      </StyledBlogListing>
    );
  }
  
}

BlogListing.propTypes = {
  blogPosts: PropTypes.array.isRequired,
  includes: PropTypes.array,
  showPost: PropTypes.func.isRequired,
};

export default BlogListing;
