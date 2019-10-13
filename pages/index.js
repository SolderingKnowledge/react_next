import React, {Component} from "react";
class First extends Component {
    constructor(props){
        super(props);
        console.log("constructor here")//this will be in the client and server => twice

    }
    static async getInitialProps(){
        console.log("It is like componentWillMount()will execute on the server only for the first time");
        //second time will only be executed on the client when navigating to a different via Link
        //if you don't return object it usually complains that it returned 'undefined'
    }
    render(){
        return(
            <div>Ok</div>
        )
    }
}
export default First;
// const first = () => {
//     return (
//         <div>
//             Function component
//         </div>
//     )
// }
// first.getInitialProps = async () => {
//     console.log("Lifecycle")
// }

// export default first;

