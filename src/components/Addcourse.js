import React, { Fragment, useEffect, useState } from 'react';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import base_url from "./../api/bootapi";



const Addcourse = () => {

    useEffect(() => {
        document.title = "Addcourse || code with vikas";
    }, []);

    const [course, setCourse] = useState({});

    // //form handler function      
    const handleForm = (e) => {
        e.preventDefault();      
        setCourse(course)
        console.log("course added") 
        console.log(course); 
        postDatatoServer(course);        
    };

    //creating function to post data on server   axios.get(`${base_url}/courses`)
    const postDatatoServer = async () => {
       await axios.post(`${base_url}/courses`,course).then(
            (response) => {
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

            <h1 className="text-center" my-5>Fill Course details</h1>

            <Form onSubmit={handleForm}>

                <FormGroup> 
                    <Label for="courseId" >Course ID</Label>
                    <Input type="text"
                        placeholder="Eneter here"
                        name="id"
                        // id="userId"        
                        onChange={(e) => {
                            setCourse({ ...course, id: e.target.value });
                        }}
                    />
                </FormGroup>


                <FormGroup>
                    <Label for="title" >Title</Label>
                    <Input type="text" placeholder="Eneter title here" name="title" //id="title"

                        onChange={(e) => {
                            setCourse({ ...course, title: e.target.value });
                        }}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="description" >Course Description</Label>
                    <Input
                        type="textarea" placeholder="Eneter description here" name="description" //id="description"
                        style={{ height: 200 }}
                        onChange={(e) => {
                            setCourse({ ...course, description: e.target.value });
                        }}
                    />
                </FormGroup>

                <Container className="text-center" >
                    <Button type="submit" color="success" >Addcourse</Button>
                    <Button type="reset" color="warning ml-3" >Clear</Button>        
                </Container>

            </Form>

        </Fragment>

    )

}

export default Addcourse;