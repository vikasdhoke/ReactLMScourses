

import React, { Fragment, useEffect, useState } from 'react';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import base_url from "./../api/bootapi";


const Updatecourse = (userId) => {

    useEffect(() => {
        document.title = "Updatecourse || code with vikas";
    }, []);

    const [course, setCourse] = useState({});

    // //form handler function      
    const handleForm = (e) => {
        setCourse(course)
        console.log("test3") 
        console.log(course); 
        postDatatoServer(course);
        e.preventDefault();
    };

    //creating function to post data on server
    const postDatatoServer = (data) => {
        axios.post(`${base_url}/courses`, data).then(
            (response) => {

                //success
                console.log(response);
                console.log('success');
                // console.log(response.data);
                toast.success("course has been Added");
                // setCourse({id:"",title : "",description :""})
                
            },

            (error) => {
                //error
                console.log(error);
                console.log('error');
                toast.success("something went wrong");
            },
        )


    }

    return (
        <Fragment >

            <h1 className="text-center" my-5>Update Course details</h1>

            <Form onSubmit={handleForm}>

                <FormGroup>
                    <Label for="userId" >Course ID</Label>
                    <Input type="text"
                        placeholder="Eneter here"
                        name="userId"
                        id="userId"
   
                        onChange={(e) => {
                            setCourse({ ...course, id: e.target.value });
                        }}

                    />

                </FormGroup>


                <FormGroup>
                    <Label for="title" >Title</Label>
                    <Input type="text" placeholder="Eneter title here" name="title" id="title"

                        onChange={(e) => {
                            setCourse({ ...course, title: e.target.value });
                        }}
                    />

                </FormGroup>

                <FormGroup>
                    <Label for="description" >Course Description</Label>
                    <Input
                        type="textarea" placeholder="Eneter description here" name="description" id="description"

                        style={{ height: 200 }}

                        onChange={(e) => {
                            setCourse({ ...course, description: e.target.value });
                        }}

                    />

                </FormGroup>

                <Container className="text-center" >
                    <Button type="submit" color="success" >Update</Button>
                    <Button type="reset" color="warning ml-3" >Clear</Button>        
                </Container>

            </Form>

        </Fragment>

    )

}

export default Updatecourse;