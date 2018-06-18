import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Image = styled.img`
  max-width: 300px;
`;

const SingleBlogPost = ({postDetails, returnToList}) => {
  function createMarkup() {
    return {__html: postDetails.postData.attributes.body.processed};
  }
  return(
    <div>
      <button onClick={returnToList}>Return to Blog List</button>
      {postDetails.postImages !== null &&
        postDetails.postImages.map((image) => {
          return(
            <Image
              key={image.id}
              src={"http://cms.decoupled.lndo.site" + image.attributes.url}
              alt="teaser image"
            />
          );
        })
      }
      <h2>{postDetails.postData.attributes.title}</h2>
      <div dangerouslySetInnerHTML={createMarkup()} />
      {postDetails.postTags.length > 0 &&
        <Fragment>
          <h3>Tags</h3>
          <ul>
            {postDetails.postTags.map((tag) => {
              return(
                <li key={tag.id}>{tag.attributes.name}</li>
              );
            })}
          </ul>
        </Fragment>
      }
    </div>
  );
}

SingleBlogPost.propTypes = {
  postDetails: PropTypes.object.isRequired,
  returnToList: PropTypes.func.isRequired,
};

export default SingleBlogPost;
