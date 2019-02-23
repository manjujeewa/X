import React from 'react';
import Login from './Login';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick() {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
      }

    render() {
      return (
        <section class="header layout--center">
            <div class="header__content layout--wrapped">
                <div class="brand">
                    <a href="/"><div class="brand__name"><span>#</span>DEVRANT</div></a>
                </div>

                {/* User Profile */}
                <div class="profile layout--center hide">
                    <div class="profile__picture">
                        <svg height="36" width="36">
                            <circle cx="18" cy="18" r="18" fill="#5c5f6f"></circle>
                        </svg>
                    </div>
                    <div class="profile__name">Elon</div>
                </div>

                <div class="join">
                    <span onClick={this.handleClick}>Join</span>
                    <span>Sign Out</span>
                </div>
                <Login isOpen={this.state.isToggleOn ? true : false}/>
            </div>
        </section>
      )
    }
  }

export default Header;