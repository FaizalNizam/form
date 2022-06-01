
//application information
export const appData = (appdata) => (dispatch) => {
    console.log(appdata);
    dispatch({ type: 'appdata', payload: appdata })

}

//general inforamtion
export const generalData = (generaldata) => (dispatch) => {
    console.log(generaldata);
    dispatch({ type: 'generaldata', payload: generaldata })
}


//purpose and documents
export const purposeData = (purposedata) => (dispatch) => {
    console.log(purposedata);
    dispatch({ type: 'purposedata', payload: purposedata })
}

//additional documents
export const additionalData = (additionaldata) => (dispatch) => {
    console.log(additionaldata);
    dispatch({ type: 'additionaldata', payload: additionaldata })
}

export const addData = (adddata) => (dispatch) => {
    console.log(adddata);
    dispatch({ type: 'adddata', payload: adddata })
}