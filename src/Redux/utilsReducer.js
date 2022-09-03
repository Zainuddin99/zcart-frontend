const initialState = {
    pageActive:{dailyEssential:'', homeFurnitures:''},
    loading: false,
    errorMessage: '',
    modal: {open: false, content: ''},
    loggedUser: null
}

export const utilsReducer = (state=initialState, action) =>{
    switch(action.type){
        case 'SWITCH TO PAGE':
            if(action.payload === "products"){
                return {...state, dailyEssential:'active', homeFurnitures:''}
            }
            if(action.payload === 'furnitures'){
                return {...state, dailyEssential:'', homeFurnitures:'active'}
            }
            return {...state, dailyEssential:'', homeFurnitures:''}
        case 'START LOADING': 
        return {
            ...state, loading: true
        }
        case 'STOP LOADING': return {
            ...state, loading: false
        }
        case 'HANDLE ERROR': return{
            ...state, loading: false, errorMessage: action.payload
        }
        case 'CLEAR ERROR': return {
            ...state, errorMessage: ""
        }
        case 'OPEN MODAL': return {
            ...state, modal:{open: true, content: action.payload}
        }
        case 'CLOSE MODAL': return {
            ...state, modal:{open: false, content: ''}
        }
        case 'ADD LOGGED USER': return {
            ...state, loggedUser: action.payload
        }
        case 'LOGOUT USER':
            return{
            ...state, loggedUser: null
        }
        default:return state
    }
}