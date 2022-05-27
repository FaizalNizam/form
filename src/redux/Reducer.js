

export const reducer = (state = { appdata: {}, generaldata:{}}, action) => {

    switch (action.type) {

        case 'appdata':

            return { ...state, appdata: action.payload }
          
        case 'generaldata':
            
            return {...state, generaldata: action.payload }

        default:

            return state

    }

}