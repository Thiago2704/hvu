import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../src/app/components/formularioagendarretorno.module.css"
import {Header04} from "../src/app/components/header/header";
import Footer from "../src/app/components/footer/Footer";
import FormularioAgendarRetorno from "../src/app/components/formularioagendaretorno/formularioagendarretorno"
import AgendarRetorno from "../src/app/components/formularioagendaretorno/formularioagendarretorno"
import Calendario from "../src/app/components/calendario/calendario"

function PageAgendarConsulta(){
    return(
        <div>
            <Header04/>
            <div>
                <h1 className={styles.titulocadastro}>Agendar Retorno</h1>
            </div>
        <AgendarRetorno/>
        <Footer/>
        </div>
    )
}

export default PageAgendarConsulta;