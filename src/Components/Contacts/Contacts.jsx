
import React from 'react'
import { useForm } from "react-hook-form";
import './Contacts.css'

const Contacts = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div id='contacts'>
            <div className='container py-5'>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <h1 className='title text-center'>Contact Us</h1>
                        <p className='sub text-center'>
                            Open Console To View Your Response.
                        </p>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-group">
                                <label for="formGroupExampleInput">Your Name</label>
                                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"
                                    {...register("firstName", { required: true, maxLength: 20 })} />
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput2">Your Email</label>
                                <input type="email" class="form-control" id="formGroupExampleInput2" placeholder="Another input"
                                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                />
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput2">Your Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                    {...register("message", { required: true, maxLength: 100 })}
                                ></textarea>
                            </div>
                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts
