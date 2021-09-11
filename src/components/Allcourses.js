import React, { useState, useEffect } from 'react';
import Course from './Course';
import base_url from "./../api/bootapi";
import axios from 'axios';
import { toast } from 'react-toastify';
// import { Button } from 'reactstrap';

const Allcourses=()=>{
    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        document.title="All courses";
    }, []);

    // function to call server
    const getAllCoursesFromServer = async () =>{
       await axios.get(`${base_url}/courses`).then(
            (response)=>{                
                console.log(response.data);
                toast.success("courses have been loaded");
                setCourses(response.data.reverse());
            },
            (error) =>{
                //error
                console.log(error);
                toast.success("something went wrong");
            },
        )
    }   
// calling course function
    useEffect(() => {
         getAllCoursesFromServer()  ;            
    } , []);
    
    const updateCourses1 =(id)=>{
        setCourses(courses.filter((c)=>c.id!==id));
        
    }

    return(

    <div>        
            <h1>All courses</h1> 
            <p>List Of Courses are as follows </p>  
            {               
                courses.length>0
                ?  courses.map((item)=>(  <Course key={item.id} course={item}
                 update = {updateCourses1} 
                 />  ))
                    : "No courses"
            } 
    </div>
    );
};

export default Allcourses;