import React from 'react';

class Loader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <div class="loader">
          <div class="spinner"></div>
        </div>
      )
    }
  }

export default Loader;