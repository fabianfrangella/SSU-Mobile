const select_carrera = (universidad) => {
    return {
        type: "select_carrera",
        universidad
    }
}

export {select_carrera}