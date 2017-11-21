interface Post {
    key?: string;
    url: string;
    title: string;
    photo: string;
    category: string;
    intro: string;
    content?: string;
    date?: Date;
}

export default Post;