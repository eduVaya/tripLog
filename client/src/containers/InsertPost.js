import axios from "axios";
import React, { useState } from "react"

export default () => {
    const [postForm, setPostForm] = useState({
        title: '',
        description: '',
        img: ''
    });
    const { title, description, img } = postForm;

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', img);
        formData.append('data', JSON.stringify({ title, description, formData }));
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }
        const response = await axios.post('/api/posts', formData, config);
    }
    return (
        <div>
            <form encType="multipart/form-data" onSubmit={e => onSubmit(e)}>
                <div className="mb-5">
                    <label className="form-label">Cover picture</label>
                    <input
                        className="form-control"
                        name="image"
                        type="file"
                        id="formFile"
                        onChange={e => setPostForm({ ...postForm, img: e.target.files[0] })} />
                    <button type="button" className="btn btn-danger mt-3" onClick={() => setPostForm({ ...postForm, img: '' })}>Remove</button>
                    <img id="frame" src={postForm.img ? URL.createObjectURL(postForm.img) : ''} className="img-fluid" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                        name="title"
                        type="text"
                        className="form-control"
                        onChange={e => setPostForm({ ...postForm, title: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <label >Description</label>
                    <textarea
                        name="description"
                        className="form-control"
                        onChange={e => setPostForm({ ...postForm, description: e.target.value })}
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-success">Post</button>
            </form>
        </div>
    )
}