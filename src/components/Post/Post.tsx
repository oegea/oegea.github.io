import * as React from 'react';
import BlogAPI from '../../api/Blog';
import PostInterface from '../../interfaces/Post';

interface PostParams {
    match: {
        params: {
            post: string
        }
    };
}

class Post extends React.Component<PostParams, PostInterface> {
    constructor(params: PostParams) {
        super(params);
        this.state = {
            url: '',
            key: '',
            title: '',
            intro: '',
            photo: '',
            category: '',
        };
    }
    getPosts() {
        let api = new BlogAPI();
        let postId = this.props.match.params.post;

        api.getPost(postId).then((response) => {
            this.setState(response);
        });
    }
    componentDidMount() {
        this.getPosts();
    }
    render() {
        return(
            <div>
                <h1>{this.state.title}</h1>
                <div>
                    <img src={this.state.photo} />
                    
                    <p>{this.state.intro}</p>
                </div>
            </div>
        );
    }
}

export default Post;