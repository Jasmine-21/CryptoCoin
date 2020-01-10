import React from 'react';
import './App.css';
import './Heading.css';

function Heading()
{
    return(
        <div className="display">
            <center>
                <h1>
                    Crypto Wiki
                </h1>
            </center>
            <div className="input-group input group-sm">
                <input type="text" placeholder="Enter the Crypto Currency Name" name="crypto" className="form-control"/>
                <button className="btn btn-success btn-sm">
                    Get info about coin
                </button>
            </div>
        </div>
    );
}
export default Heading;