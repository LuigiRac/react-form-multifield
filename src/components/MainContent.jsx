import CardContent from "./CardContent";
import Form from "./Form";
import AddPost from "./AddPost";
// import posts from "../data/posts";

function MainContent() {



    return (
        <>
            <main className="container ">
                <CardContent />

                <Form />
                <AddPost />
            </main>
        </>
    );
};



export default MainContent