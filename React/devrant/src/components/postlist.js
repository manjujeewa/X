import React from 'react';

class PostList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <div class="post-list">
          {this.props.children}
          <div class="rant__add" title="Add Rant">+</div>
        </div>
      )
    }
  }

export default PostList;