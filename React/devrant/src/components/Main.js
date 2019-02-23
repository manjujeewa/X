import React from 'react';
import Loader from "./Loader"
class Main extends React.Component {
    constructor(props) {
        super(props);
        //this.state = {isLoading: false};
        //this.state.isLoading
    }

    render() {

      return (
        <section class="main layout--center">
            <div class="main__content layout--wrapped">
                <Loader isLoading={false}/>
                {this.props.children}
            </div>
        </section>
      )
    }
  }

export default Main;