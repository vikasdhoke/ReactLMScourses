import React , { useEffect} from 'react';
import {Jumbotron , Container , Button} from 'reactstrap';

const Home=()=>{

    useEffect(()=>{
        document.title="Home || code with vikas";
    } , []);

 
    return(
        <div>

            <Jumbotron className="text-center" >

                <h1> Learn code with Vikas</h1>

                <p>This is for learning purpose.
                This is for learning purpose.This is for learning purpose.This is for learning purpose.This is for learning purpose.This is for learning purpose.           
                </p>

                <Container>
                    <Button color="primary">Start using</Button>
                </Container>
            
            </Jumbotron>

        </div>
    );
};

export default Home;