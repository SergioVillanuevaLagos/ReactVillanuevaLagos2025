import React, { Fragment, useRef, useState } from "react";
import "../css/style.css";
import { PostIt } from "./PostIt";

export function Info() {
    const [listadopostit, setPosit] = useState([
        { id: 1, titulo: "Firulais", texto: "Gato" },
        { id: 2, titulo: "Cartas", texto: "buscar carta de Mega Charizard EX exodia ultra rara shyni blue eyes dragon forma galar" },
        { id: 3, titulo: "Pasar a comprar", texto: "leche, pan, galletas" },
        { id: 4, titulo: "juegos por jugar", texto: "Silksong, hollowkknight" },
        { id: 5, titulo: "Shyni huanting", texto: "Sprigatito, Piplup, Tochic" },
    ]);

    const inputTitulo = useRef();
    const inputTexto = useRef();

    const agregarposit = () => {
        const inputTituloTexto = inputTitulo.current.value;
        const inputInfoTexto = inputTexto.current.value;

        // don't add empty posts
        if (!inputTituloTexto?.trim() && !inputInfoTexto?.trim()) {
            return;
        }

        setPosit((prevPostit) => {
            const nuevoPostit = {
                id: Date.now(),
                titulo: inputTituloTexto,
                texto: inputInfoTexto,
            };

            inputTitulo.current.value = "";
            inputTexto.current.value = "";

            return [...prevPostit, nuevoPostit];
        });
    };

    const eliminarPostIt = (id) => {
        setPosit((prevPostit) => {
            return prevPostit.filter((posit) => posit.id !== id);
        });
    }

    return (
        <Fragment>
            <div >
                <h1>Post It Simulator!</h1>

                <div className="input-group gap-3 ">
                    <div className="col-md-4">
                        <input ref={inputTitulo} className="form-control" type="text" placeholder="Titulo" />
                    </div>
                    <div className="col-md-4">
                        <input ref={inputTexto} className="form-control" type="text" placeholder="Descripcion" />
                    </div>
                    <div className="col-md-2">
                        <button onClick={agregarposit} className="btn btn-dark"><i>Agregar</i></button>
                    </div>

                </div>

                <ul>
                    {listadopostit.map((postItActual) => (
                        <PostIt
                            props={postItActual}
                            key={postItActual.id}
                            funcionEnviada={eliminarPostIt}
                        />
                    ))}
                </ul>

            </div>
        </Fragment>
    );
}
