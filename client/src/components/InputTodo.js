import React, { Fragment, useState } from "react";

const InputTodo = () => {

    const [description, setDescription] = useState("");
    const onSubmitForm = async(e) => {
        e.preventDefault();
        try {
            const body = { description };

            // proxy is only in use in developmeny so it will be ignored in production
            // if there is no http://localhost:5000 the by default it is going to use heroku domain
            // this heroku app is just our server serving the build static content and also
            // holding the restful api


            const response = await fetch('/todos', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            window.location = "/";
        } catch (err) {
            console.error(err.message)
        }
    }

    return(
        <Fragment>
            <h1 className="text-center mt-5">Pern Todo List</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input 
                type="text" 
                className="form-control" 
                value={description} 
                onChange={e => setDescription(e.target.value)} 
            />
            <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    )
}

export default InputTodo;