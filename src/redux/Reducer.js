

const purposedata = {
    crew: [''],
    passenger: [''],
    letter: [''],
    health:[''],
    signcard:[''],
    consignee:[''],
    airworthiness:[''],
    airoperator:[''],
    aircraftinsurance:['']
}

export const reducer = (state = { appdata: {}, generaldata: {}, purposedata, additionaldata: {} }, action) => {

    switch (action.type) {

        case 'appdata':

            return { ...state, appdata: action.payload }

        case 'generaldata':

            return { ...state, generaldata: action.payload }

        case 'purposedata':

            return { ...state, purposedata: action.payload }

        case 'additionaldata':

            return { ...state, additionaldata: action.payload }


        default:

            return state

    }

}