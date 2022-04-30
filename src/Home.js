import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () =>
{
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
    // const handleDelete = (id) =>
    // {
    //     const newBlogs = blogs.filter((blog) => blog.id !== id);
    //     setBlogs(newBlogs)
    // }

    return (
        <div className="home">
            { error && <div> { error }</div> }
            { isPending && <div>Loading...</div> }
            {/* first blogs is from bloglist while the second blogs is from the home component */}
            { blogs && <BlogList blogs={blogs} title = "All Blogs" /> }
        </div>
    );
}
export default Home;