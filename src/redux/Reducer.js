

export const reducer = (state = { appdata: {}, generaldata: {}, purposedata: {}, additionaldata: {}, adddata: [] }, action) => {

    switch (action.type) {

        case 'appdata':

            return { ...state, appdata: action.payload }

        case 'generaldata':

            return { ...state, generaldata: action.payload }

        case 'purposedata':

            return { ...state, purposedata: action.payload }

        case 'additionaldata':

            return { ...state, additionaldata: action.payload }

        case 'adddata':

            return { ...state, adddata: action.payload }
        default:

            return state

    }

}