import React from 'react';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <section class="main layout--center">
            <div class="main__content layout--wrapped">
                {this.props.children}
            </div>
        </section>
      )
    }
  }

export default Main;