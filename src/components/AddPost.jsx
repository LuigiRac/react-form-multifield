import { useState } from "react"
const newPost = {
    id: 0,
    title: "",
    image: '',
    content:
        "",
    tags: ["html", "css"],
    published: true,
}

function AddPost() {
    const [formData, setFormData] = useState(newPost)


    function handleSubmit() {

    }


    function handleInput() {

    }
    return (

        <section className="input-group my-4">
            <form className="d-flex " onSubmit={handleSubmit}>
                <input type="text"
                    className="form-control"
                    id="name"
                    value={formData.title}
                    onChange={handleInput}
                    name="name"
                />
                <button className="btn btn-outline-secondary" type="submit">Insert</button>
            </form>

            <form className="d-flex " onSubmit={handleSubmit}>
                <input type="text"
                    className="form-control"
                    id="image"
                    value={formData.image}
                    onChange={handleInput}
                    name="image"
                />
                <button className="btn btn-outline-secondary" type="submit">Insert</button>
            </form>

            <form className="d-flex " onSubmit={handleSubmit}>
                <input type="text"
                    className="form-control"
                    id="content"
                    value={formData.content}
                    onChange={handleInput}
                    name="content"
                />
                <button className="btn btn-outline-secondary" type="submit">Insert</button>
            </form>

            <form className="d-flex " onSubmit={handleSubmit}>
                <input type="checkbox"
                    className="form-control"
                    id="published"
                    value={formData.published}
                    onChange={handleInput}
                    name="published"
                />
                <button className="btn btn-outline-secondary" type="submit">Insert</button>
            </form>
        </section>

    )
}

export default AddPost