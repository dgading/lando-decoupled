import React from 'react';

const SingleBlogPost = ({postDetails, returnToList}) => {
  function createMarkup() {
    return {__html: postDetails.attributes.body.processed};
  }
  return(
    <div>
      <button onClick={returnToList}>Return to Blog List</button>
      <h2>{postDetails.attributes.title}</h2>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </div>
  );
}

export default SingleBlogPost;
