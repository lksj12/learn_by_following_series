"use strict";
// class Post {
//     private id: number;
//     protected title: string;
//     constructor(id: number, title: string) {
//         this.id = id;
//         this.title = title;
//     }
//     getPost() {
//         return `postId ${this.id}, postTitle: ${this.title}`;
//     }
// }
class Post {
    constructor(id, title, contents) {
        this.id = id;
        this.title = title;
        this.contents = contents;
        this.id = id;
        this.title = title;
    }
    getPost() {
        return `postId ${this.id}, postTitle: ${this.title}`;
    }
}
class PostB extends Post {
    getPost() {
        // console.log(this.id);
        console.log(this.title);
        console.log(this.contents);
        return this.title;
    }
}
const post = new Post(1, "title1", "contents");
// post.id;
// post.title;
post.contents;
