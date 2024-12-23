import { useState } from "react";
import posts from "../data/posts"

function CardContent() {
    const [postsList, setPostList] = useState(posts)


    function deletePost(id) {

        setPostList(posts.filter((el) => el.id !== id))
    }

    return (
        <>
            <div className="d-flex justify-content-center gap-3 m-4">
                {
                    postsList.map((posts) => posts.published && (
                        <div className="card" style={{ width: '18rem' }} key={posts.id}>
                            <img className="card-img-top" src={posts.image} alt={posts.title}></img>
                            <div className="card-body">
                                <h5 className="card-title">{posts.title}</h5>
                                <p className="card-text">{posts.content}</p>
                                <a href="#" className="btn btn-primary" >Leggi di più</a>
                                <button onClick={() => deletePost(posts.id)} className="btn btn-primary">Delete</button>

                            </div>
                        </div>
                    ))
                }

            </div >
        </>
    )
};

export default CardContent