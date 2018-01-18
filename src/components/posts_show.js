import React, { Component } from 'react';
// import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchPost } from '../actions';


class PostsShow extends Component {

    componentDidMount() {
        if(!this.props.post){
        const { id } = this.props.match.params;
        // const id =189547;
        console.log(id);
        this.props.fetchPost(id);
        }
    }
    render() {
        const { post } = this.props;
        if(!post){
            return <div>loading</div>;
        }
        return (
            <div>
                <Link to="/">back to index</Link>
                <h3>{post.title}</h3>
                {post.categories}
            </div>
        )
    }
}
function mapStateToProps({ posts }, ownProps){
    return { post: posts[ownProps.match.params.id] }
}
export default connect(mapStateToProps, { fetchPost })(PostsShow)