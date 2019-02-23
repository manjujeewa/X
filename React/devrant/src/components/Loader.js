import React from 'react';

function Loader (props) {

      if(!props.isLoading){
        return null;
      }

      return (
        <div class="loader" >
          <div class="spinner"></div>
        </div>
      )
    
  }

export default Loader;