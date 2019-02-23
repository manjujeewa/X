import React from 'react';

class Post extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <article class="post">
          <div class="post__inner">
              <div class="score">
                  <div class="score__up layout--center">++</div>
                  <div class="score__board layout--center">100</div>
                  <div class="score__down layout--center">--</div>
              </div>
              <div class="post__body">
                  Hello World... </div>
          </div>
          <div class="post__footer">
              <div class="post__time">2m ago</div>
              <div class="post__comments">
                  <svg class="icon" viewBox="0 0 31 32">
                      <path d="M24.732 24.371v7.629l-7.267-7.267h-8.808c-4.781 
                      0-8.657-3.875-8.657-8.657v-7.42c0-4.781 3.876-8.657 
                      8.657-8.657h13.604c4.781 0 8.657 3.875 8.657 8.657v7.42c0 
                      3.922-2.61 7.23-6.186 8.294z"></path>
                  </svg>
                  23
              </div>
          </div>
          </article>
      )
    }
  }

export default Post;