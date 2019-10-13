// const Blog = (props)=> <h1>Blog # {props.id}</h1>
// const Blog = ({id})=> <h1>Blog # {id}</h1>

// Blog.getInitialProps = async ({query})=> {
//     return query;
// }
// export default Blog;

import {withRouter} from "next/router";

const Blog = (props)=> <h1>Blog # {props.router.query.id}</h1>
export default withRouter(Blog);