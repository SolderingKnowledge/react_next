import Axios from "axios";
import Link from "next/link";
// import React, {Component} from "react";
// class First extends Component {
//     constructor(props){
//         super(props);
//         console.log("constructor here")//this will be in the client and server => twice

//     }
//     static async getInitialProps(){
//         const response = await Axios.get("https://jsonplaceholder.typicode.com/posts")
//         const {data} = response;
//         return {posts:data}
//     }
//     render(){
//         const { posts } = this.props;
//         return(
//             <div>
//                 {posts.map( item => (
//                     <p key={item.id}>{item.title}</p>
//                 )) }
//             </div>
//         )
//     }
// }
// export default First;


const first = ({id, comments}) => {//const first = (props) => {
    // console.log(props.posts)
    return (
        <div>
            <h1>Found id#{id}</h1>
            {comments.map((item)=>{
                return (
                    <Comment {...item} key={item.id} />
                )
            })}
        </div>
    )
}
const Comment = ({email, body})=>(
    <div>
        <h3>
            {email}
        </h3>
        <p>
            {body}
        </p>
    </div>
)

first.getInitialProps = async ({query}) => {
    const res = await Axios.get(
        `https://jsonplaceholder.typicode.com/comments?postid=${query.id}`
    );
    const {data} = res;
    return {...query, comments: data}
}

export default first;

