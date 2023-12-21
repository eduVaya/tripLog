import React, { useState } from "react"



export default () => {
    const [imgSrc, setImg] = useState('');
    const [postForm, setPostForm] = useState({
        title: '',
        description: '',
        img: ''
    });

    return (
        <div>
            <form >
                <div className="mb-5">
                    <label className="form-label">Cover picture</label>
                    <input className="form-control" name="image" type="file" id="formFile" onChange={e => setImg(URL.createObjectURL(e.target.files[0]))} />
                    <button type="button" className="btn btn-danger mt-3" onClick={() => setImg('')}>Remove</button>
                    <img id="frame" src={imgSrc} className="img-fluid" />

                </div>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input name="title" type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label >Description</label>
                    <textarea name="description" className="form-control"></textarea>
                </div>
                <button type="submit" className="btn btn-success">Post</button>
            </form>
        </div>
    )
}