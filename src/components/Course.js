import React from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import {Card ,
    CardBody,
    CardTitle,
    CardText,
    Button,
    Container
} from 'reactstrap';
import base_url from "./../api/bootapi";
import { toast } from 'react-toastify';
// import Showcourse from './Showcourse';
// import { useEffect } from 'react/cjs/react.development';

// import Updatecourse from './Updatecourse';
const Course=({course,update})=>{
  let history = useHistory()   



  const deleteCourse =async (id) => {    
    await axios.delete(`${base_url}/courses/${id}`).then(
      (response)=>{         
          console.log(response);
          console.log('deleted ');
          {history.push('/view-courses')}
          // getAllCoursesFromServer()  ;  
          // console.log(response.data);
          // toast.success("course has been deleted"); 
          update(id);          
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

                        {/* <Button color="warning ml-3"  >Update</Button> */}                        

                        <Button color="warning ml-3"  onClick={
                          ()=>{
                        // <Showcourse course={course.id} />
                        history.push(`/update-course/${course.id}`)
                        }  
                        }                  
                          >Update</Button>

                </Container>
            </CardBody>
      </Card>
    </div>

   );
}

export default Course;