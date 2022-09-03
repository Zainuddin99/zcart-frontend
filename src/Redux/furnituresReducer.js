const initialState = {
    loading: false,
    items: [],
    error: '',
    categories:[],
    filteredItems:[],
    searchInput:"",
    currentCategory:"All categories",
    currentPrice:100
}

export const furnitureReducer = (state = initialState, action) => {

    const evaluate=(item)=>{
        var re = new RegExp(state.searchInput,"ig");
        const evaluateCategory = state.currentCategory === "All categories" ? true : item.category === state.currentCategory
        return evaluateCategory && item.price <= state.currentPrice && re.test(item.name)
}

    switch (action.type) {

        case 'FETCH FURNITURE': return {
            ...state, loading: true
        }

        case 'FETCH FURNITURE SUCCESS':
            const categories = new Set(action.payload.map((item)=>item.category))
            return {
                ...state, loading: false, items: action.payload, error: '',categories:["All categories",...Array.from(categories)], filteredItems:action.payload
            }

        case 'FETCH FURNITURE FAIL': return {
            ...state, loading: false, error: action.payload
        }

        case 'FILTER FURNITURE ITEMS':
            const priceFilterItems = state.items.filter((item)=>evaluate(item))
            return {
                ...state, filteredItems: priceFilterItems
            }

        case 'UPDATE FURNITURE INPUT':
            return {...state, searchInput:action.payload}

        case 'UPDATE FURNITURE CATEGORY':
            return {...state, currentCategory:action.payload, searchInput:""}

        case "UPDATE FURNITURE PRICE": return {
            ...state, currentPrice: action.payload
        }
        default: return state
    }
}