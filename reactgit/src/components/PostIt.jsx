import React, { Fragment } from "react";
import "../css/style.css";


export function PostIt({ props, funcionEnviada }) {
    return (
        <Fragment>
            <li className="col-xs-12 post-it">
                <div>
                    <h2>{props.titulo}</h2>
                    <p>{props.texto}</p>
                    <button onClick={() => funcionEnviada(props.id)} className="btn btn-danger position-absolute top-0 end-0 m-2"> <i className="bi bi-trash"></i> </button>
                </div>

            </li>
        </Fragment>
    );
}
