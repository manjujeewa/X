import React from 'react';
import Main from "../components/Main";
import PostList from "../components/Postlist";
import Post from  "../components/Post";
class RantDetails extends React.Component {
    constructor(props) {
        super(props);
        //this.state = {isLoading: false};
        //this.state.isLoading
    }

    render() {
        const { params } = this.props.match
        return (
            <Main isLoading={false}>
                <PostList>
                <h1>{params.rant_id}</h1>
                </PostList>
            </Main>
        )
      }
}

export default RantDetails;