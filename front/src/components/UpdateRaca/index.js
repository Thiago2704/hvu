import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./index.module.css";
import VoltarButton from "../VoltarButton";
import { CancelarWhiteButton } from "../WhiteButton";
import EspeciesList from "@/hooks/useEspecieList";
import { updateRaca, getRacaById } from "../../../services/racaService";

function UpdateRaca() {
    const router = useRouter();
    const { id } = router.query;

    const { especies } = EspeciesList();
    const [raca, setRaca] = useState({
        nome: "",
        porte: "",
        descricao: "", 
        especie: { id: null }
    });
    const [selectedEspecie, setSelectedEspecie] = useState(null);

    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                try {
                    const racaData = await getRacaById(id);
                    setRaca({
                        nome: racaData.nome,
                        porte: racaData.porte,
                        descricao: racaData.descricao,
                        especie: { id: racaData.especie.id }
                    });
                    setSelectedEspecie(racaData.especie.id);

                    console.log("racaData:", racaData)
                    console.log("raca antes:", raca);
                } catch (error) {
                    console.error('Erro ao buscar raça:', error);
                }
            };
            fetchData();
        }
    }, [id]);

    const handleEspecieSelection = (event) => {
        const selectedEspecieId = event.target.value;
        setSelectedEspecie(selectedEspecieId);
    };
    console.log("especie:", selectedEspecie);

    const handleRacaChange = (event) => {
        const { name, value } = event.target;
        setRaca({ ...raca, [name]: value });
    };
    console.log("raca depois:", raca);

    const handleRacaUpdate = async () => {
        if (!selectedEspecie || !raca.nome || !raca.porte) {
            alert("Erro: Espécie, nome e porte são obrigatórios.");
            return;
        }
    
        const racaToUpdate = {
            nome: raca.nome,
            porte: raca.porte,
            descricao: raca.descricao,
            especie: { 
                id: parseInt(selectedEspecie) 
            }
        };
    
        try {
            const response = await updateRaca(id, racaToUpdate);
            if (response.status === 200) {
                console.log("Raça editada com sucesso!");
                router.push("/gerenciarRacas");
            } else {
                console.error("Erro ao editar raça:", response.data);
                alert("Erro ao editar raça. Por favor, tente novamente.");
            }
        } catch (error) {
            console.error("Erro ao editar raça:", error);
            alert("Erro ao editar raça. Por favor, tente novamente.");
        }
    };

    return (
        <div className={styles.container}>
            <VoltarButton />
            <h1>Editar raça</h1>
            <form className={styles.inputs_container}>
                <div className={styles.inputs_box}>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="especie" className="form-label">Espécie</label>
                            <select
                                className={"form-select"}
                                name="especie"
                                aria-label="Selecione uma espécie"
                                value={selectedEspecie || ""}
                                onChange={handleEspecieSelection}
                                disabled
                            >
                                <option value="">Selecione a espécie</option>
                                {especies.map((especie) => (
                                    <option key={especie.id} value={especie.id}>
                                        {especie.nome}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="col">
                            <label htmlFor="nome" className="form-label">Raça</label>
                            <input
                                type="text"
                                className={"form-control"}
                                name="nome"
                                value={raca.nome}
                                onChange={handleRacaChange}
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="porte" className="form-label">Porte</label>
                            <input
                                type="text"
                                className={"form-control"}
                                name="porte"
                                value={raca.porte}
                                onChange={handleRacaChange}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.button_box}>
                    < CancelarWhiteButton />
                    <button type="button" className={styles.criar_button} onClick={handleRacaUpdate}>
                        Editar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default UpdateRaca;
