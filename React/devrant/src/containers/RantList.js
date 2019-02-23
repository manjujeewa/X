import React from 'react';
import Main from "../components/Main";
import PostList from "../components/Postlist";
import Post from  "../components/Post";
import Login from "../components/Login"
class RantList extends React.Component {
    constructor(props) {
        super(props);
        //this.state = {isLoading: false};
        //this.state.isLoading
    }

    render() {

        return (
            <Main isLoading={false}>
                <PostList>
                <Post/><Post/>
                </PostList>
                <Login isOpen={false}/>
            </Main>
        )
      }
}

export default RantList;