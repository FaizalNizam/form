
//application information
export const appData = (data) => (dispatch) => {
    console.log(data);
    dispatch({ type: 'appdata', payload: data })

}

//general inforamtion
export const generalData = (data) => (dispatch) => {
    dispatch({ type: 'generaldata', payload: data })
}


