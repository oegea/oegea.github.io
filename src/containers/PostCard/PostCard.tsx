import * as React from 'react';
import './PostCard.css';
import Post from '../../interfaces/Post';

class PostCard extends React.Component<Post> {
    render() {
        return (
            <article className="post-card">
                <a className="no-style" href={`blog/${this.props.url}`}>
                    <div className="post-card-header">
                        <div className="post-card-title-container">
                            <div className="post-card-title"> {this.props.title} </div>
                        </div>
                        
                        <div className="post-card-photo">
                            <img src={this.props.photo} />
                        </div>
                    </div>
                    <div className="post-card-container">

                        <div className="post-card-category">
                            {this.props.category}
                        </div>

                        <div className="post-card-text">
                            {this.props.intro}
                        </div>
                    </div>
                </a>
            </article>
        );
    }
}

export default PostCard;