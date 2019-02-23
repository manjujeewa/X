import React from 'react';

class Header extends React.Component {
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
                    <span>Join</span>
                    <span>Sign Out</span>
                </div>
            </div>
        </section>
      )
    }
  }

export default Header;