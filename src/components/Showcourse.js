import React, { Fragment, useEffect, useState } from 'react';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import base_url from "../api/bootapi";


const Showcourse = () => {

    useEffect(() => {
        document.title = "Showcourse || code with vikas";
    }, []);

    const [course, setCourse] = useState({course});

    // //form handler function      
    const handleForm = (e) => {
        setCourse(course)
        console.log("test3") 
       
        // postDatatoServer(course);
        // e.preventDefault();
    };

    //creating function to post data on server
    const getDatafromServer = (id) => {
        axios.get(`${base_url}/courses/${id}`).then(
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

    getDatafromServer();

  

    return (
        <Fragment >

            <h1 className="text-center" my-5>Update Course details</h1>

            <Form onSubmit={handleForm}>

                <FormGroup>
                    <Label for="userId" >Course ID</Label>
                    <Input type="text"
                        
                        value={course.id}
                        // name="userId"
                        // id="userId"
   
                        onChange={(e) => {
                            setCourse({ ...course, id: e.target.value });
                        }}

                    />

                </FormGroup>


                <FormGroup>
                    <Label for="title" >Title</Label>
                    <Input type="text" value={course.title} 
                    // name="title" id="title"

                        onChange={(e) => {
                            setCourse({ ...course, title: e.target.value });
                        }}
                    />

                </FormGroup>

                <FormGroup>
                    <Label for="description" >Course Description</Label>
                    <Input
                        type="textarea" value={course.description}
                        //  name="description" id="description"

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

export default Showcourse;