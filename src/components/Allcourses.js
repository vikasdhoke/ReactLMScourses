import React, { useState, useEffect } from 'react';
import Course from './Course';
import base_url from "./../api/bootapi";
import axios from 'axios';
import { toast } from 'react-toastify';
// import { Button } from 'reactstrap';

// import Course from './components/Course';

const Allcourses=()=>{    
    useEffect(()=>{
        document.title="All courses";
    }, []);


    // function to call server
    const getAllCoursesFromServer =()=>{

        axios.get(`${base_url}/courses`).then(
            (response)=>{
                //success
                // console.log(response);
                console.log(response.data);
                toast.success("courses have been loaded");
                setCourses(response.data);
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

//     useEffect(() => {
//         alert("testing")  ;
           
//    } );


    const [courses, setCourses]=useState([
        // {title:"Java Course" , description : "This demo Java Course"  },
        // {title: "Django Course" ,description : "This demo Django Course"  },
        // {title: "Python Course" ,description : "This demo Python Course"  },
        // {title: "Angular Course" ,description : "This demo Angular Course"  }    
    ]);

    const updateCourses1 =(id)=>{
        setCourses(courses.filter((c)=>c.id!=id))

    }

    return(

    <div>


        
            <h1>All courses</h1> 

            <p>List Of Courses are as follows </p>  

            {               
                courses.length>0
                ?  courses.map((item)=>(  <Course key={item.id} course={item} update ={updateCourses1} />    ))
                    : "No courses"

            } 

    </div>


    );

};

export default Allcourses;