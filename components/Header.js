import Link from "next/link";
const first = () => {
    return (
        <div>
            {/* <Link href="/detail">Go to detail page</Link> --before it used to be like that*/}
            <Link href="/detail"><a>Go to detail page</a></Link>
            <Link href="/detail"><button>Go to detail page</button></Link> 
            <Link href="/detail"><span>Go to detail page</span></Link>
            <Link href="/detail"><div>Go to detail page</div></Link> 
            You can replace those with antything that accepts onClick attribute
            & we're in Header component
        </div>
    )
}
export default first;