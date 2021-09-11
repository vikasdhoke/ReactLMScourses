import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'reactstrap';

const Menus = () => {

    return (
        <div>

            <ListGroup>
                <Link className="list-group-item list-group-item-action" tag="a" to="/" action>
                    Home</Link>

                <Link className="list-group-item list-group-item-action" tag="a" to="/add-course" action>Add course</Link>


                <Link className="list-group-item list-group-item-action" tag="a" to="/view-courses" action>Veiw courses</Link>

                {/* <Link className="list-group-item list-group-item-action" tag="a" to="#!" action>Delete course</Link> */}

                {/* <Link className="list-group-item list-group-item-action" tag="a" to="#!" action >About</Link>

                <Link className="list-group-item list-group-item-action" tag="a" to="#!" action >Contact</Link> */}
            </ListGroup>


        </div>
    );
};

export default Menus;
