import { useState } from "react"

const newPost = {
    id: 0,
    title: "",
    image: "",
    content: "",
    tags: [],
    published: true,
};

function AddPost() {
    const [formData, setFormData] = useState(newPost)


    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);


    }


    function handleInput(e) {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormData({ ...formData, [e.target.name]: value })
    }
    return (

        <section className="my-4">
            <h2>Aggiungi nuovo post</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <h5>Titolo del post</h5>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={formData.title}
                        onChange={handleInput}
                        name="title"
                    />
                </div>

                <div className="mb-3">
                    <h5>Immagine del post</h5>
                    <input
                        type="text"
                        className="form-control"
                        id="image"
                        value={formData.image}
                        onChange={handleInput}
                        name="image"
                    />
                </div>

                <div className="mb-3">
                    <h5>Contenuto del post</h5>
                    <input
                        type="text"
                        className="form-control"
                        id="content"
                        value={formData.content}
                        onChange={handleInput}
                        name="content"
                    />
                </div>

                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="published"
                        name="published"
                        onChange={handleInput}
                        value={formData.published}
                        checked={formData.published}
                    />
                    <label className="form-check-label" htmlFor="avaiable">
                        Pubblica Post
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </section>

    )
}

export default AddPost