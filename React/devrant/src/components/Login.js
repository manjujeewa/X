import React from 'react';
import Loader from './Loader';
class Login extends React.Component {
    constructor(props) {
        super(props); 
        
    }


    render() {
      return (
        <div class={"popup " + (this.props.isOpen? 'popup--open' : '')}>
            <div class="popup__header">
                <div title="Close" class="close layout--center" onClick={this.props.onclick}>
                    X
                </div>
            </div>
            <div class="popup__body layout--center">
                <div class="popup__body-inner">

                    <div class="form">
                        <div class="form__title">
                            JOIN <span class="highlight">#</span>DEVRANT
                        </div>
                        <div class="form__description">
                            Vote and comment on others' rants. Post your own.
                        </div>
                        <form name="login">
                            <div class="login">

                                <input type="text" placeholder="USERNAME" ref={input => input && input.focus()}/>
                                <input type="password" placeholder="PASSWORD" />

                                <Loader isLoading={false}/>

                                <div class="form__error">
                                    Some fields are missing !
                                </div>
                                
                                <input type="submit" value="LET ME IN" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      )
    }
  }

export default Login;