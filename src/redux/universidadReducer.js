const initialState = {
    universidad: {text: "Universidad Nacional de Quilmes", carreras: ["TPI", "Biotecnología"]}
}

const ssu_reducer = (state = initialState, action) => {
    switch (action.type) {
        case "select_universidad": {
            return {...state, universidad: action.universidad }
        }
        case "select_carrera" : {
            return {...state, carrera: action.carrera }
        }
        default: {
            return state
        }
    }
}

export default ssu_reducer