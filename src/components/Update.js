import React, { Fragment, useEffect, useState } from 'react';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import base_url from "./../api/bootapi";
import { useHistory, useParams } from 'react-router';



function Update() {

    useEffect(() => {
        document.title = "UpdateCourse || code with vikas" ;
    }, []);
    let history = useHistory();
    const {id} = useParams();
    //alert(id);
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
       await axios.put(`${base_url}/courses/${id}`,course).then(
            (response) => {
                console.log(response);
                console.log('success');                
                toast.success("course has been updated");
                history.push("/view-courses")
            },

            (error) => {
                //error
                console.log(error);
                console.log('error');
                toast.success("something went wrong");
            },
        )
    }

     //get employee from server
     const loadCourse = async () => {
        const result = await axios.get(`${base_url}/courses/${id}`);  //${base_url}
        console.log(result);
        setCourse(result.data);
    }

    useEffect(() => {
        loadCourse();
    },[]);


    return (
        <Fragment >     

            <h1 className="text-center" my-5>Update Course details</h1>

            <Form onSubmit={handleForm}>

                <FormGroup> 
                    <Label for="courseId" >Course ID</Label>
                    <Input type="text"
                        placeholder="Eneter here"
                        value={course.id} 
                        name="id"
                        // id="userId"        
                        onChange={(e) => {
                            setCourse({ ...course, id: e.target.value });
                        }}
                    />
                </FormGroup>


                <FormGroup>
                    <Label for="title" >Title</Label>
                    <Input type="text" 
                    placeholder="Eneter title here"
                    value={course.title} 
                    name="title" //id="title"

                        onChange={(e) => {
                            setCourse({ ...course, title: e.target.value });
                        }}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="description" >Course Description</Label>
                    <Input
                        type="textarea" 
                        placeholder="Eneter description here"
                        value={course.description} 
                        name="description" //id="description"
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

export default Update
