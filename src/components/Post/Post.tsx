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

interface PostState {
    post: PostInterface;
    error: Boolean;
    isLoading: Boolean;
}

class Post extends React.Component<PostParams, PostState> {
    constructor(params: PostParams) {
        super(params);
        this.state = {
            post: {
                url: '',
                key: '',
                title: '',
                intro: '',
                photo: '',
                category: '',
            },
            error: false,
            isLoading: true
        };
    }
    getPosts(): void {
        let api = new BlogAPI();
        let postId = this.props.match.params.post;

        api.getPost(postId)
            .then((response) => {
                this.setState({post: response, error: false, isLoading: false});
            })
            .catch(() => {
                this.setState({error: true, isLoading: false});
            });
    }
    componentDidMount(): void {
        this.getPosts();
    }
    render(): JSX.Element {
        let result: JSX.Element = ( <div /> );

        if (this.state.isLoading === true) {
            result = (
                <div>
                    <p>Loading...</p>
                </div>
            );
        } else if (this.state.error === true) {
            result = (
                <div>
                    <p>An error has ocurred! =(</p>
                </div>
            );
        } else {
            result = (
                <div>
                    <h1>{this.state.post.title}</h1>
                    <div>
                        <img src={this.state.post.photo} />
                        
                        <p>{this.state.post.intro}</p>
                    </div>
                </div>
            );
        }

        return result;
    }
}

export default Post;