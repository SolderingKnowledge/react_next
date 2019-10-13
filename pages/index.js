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






const first = ({posts}) => {//const first = (props) => {
    // console.log(props.posts)
    return (
        <div>
            {posts.map((item, i)=>{
                return (
                    <Link href={`/blog?id=${item.id}`}>
                        <button key={i}>{item.title}</button>
                    </Link>
                )
            })}
        </div>
    )
}
first.getInitialProps = async () => {
    const response = await Axios.get("https://jsonplaceholder.typicode.com/posts")
    const {data} = response;
    return {posts:data}
}

export default first;

