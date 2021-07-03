import React from 'react';
import axios from "axios";
import {Card ,
    CardBody,
    CardTitle,
    CardText,
    Button,
    Container
} from 'reactstrap';
import base_url from "./../api/bootapi";
import { toast } from 'react-toastify';

const Course=({course , update })=>{

  const deleteCourse =(id) => {
    axios.delete(`${base_url}/courses/${id}`).then(
      (response)=>{
          //success
          console.log(response);
          console.log('success');
          // console.log(response.data);
          toast.success("course has been deleted"); 
          update(id);
          // setCourse({})
          // setCourses(response.data);
      },

      (error) =>{
          //error
          console.log(error);
          console.log('error');
          toast.success("Not deleted ,something went wrong");       
      },
  )
  }

   return(       
    <div>
      <Card>
        
            <CardBody className="text-center">
                <CardTitle className="font-weight-bold">{course.title}</CardTitle>
                
                <CardText> {course.description} </CardText>

                <Container className="text-center">
                        <Button color="danger" onClick={()=>{
                          deleteCourse(course.id)
                        }} 
                        >Delete</Button>

                        <Button color="warning ml-3"  >Update</Button>

                </Container>
            </CardBody>
      </Card>
    </div>

   );
}

export default Course;