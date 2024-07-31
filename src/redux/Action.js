export const increment = () => {
    return {
        type: "INCREMENT"
    }
}
export const decrement = () => {
    return {
        type: "DECREMENT"
    }
}

export const addFormData = (Formdata) => {
    return {
        type: "ADD_ITEM",
        payload: Formdata
    }
}