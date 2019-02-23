import React from 'react';

function Loader (props) {

      return (
        <div class={"loader " + (props.isLoading? '' : 'hide')}>
          <div class="spinner"></div>
        </div>
      )
    
  }

export default Loader;