import * as React from 'react';
import PostCard from '../../containers/PostCard/PostCard';
import BlogAPI from '../../api/Blog';
import Post from '../../interfaces/Post';

interface BlogState {
    posts: Post [];
}

class Blog extends React.Component<null, BlogState> {
    constructor(params: null) {
        super(params);
        this.state = {
            posts: [ ]
        };
    }
    getPosts() {
        let api = new BlogAPI();
        api.getPosts().then((response) => {
            this.setState({ posts: response });
        });
    }
    componentDidMount() {
        this.getPosts();
    }
    render() {
        return (
            <div>
                {
                    this.state.posts.map((post: Post) => {
                        return <PostCard 
                                key={post.url}
                                url={post.url}
                                photo={post.photo}
                                category={post.category} 
                                title={post.title}
                                intro={post.intro}
                        />;
                    })
                }
 
            </div>
        );
    }
}

export default Blog;