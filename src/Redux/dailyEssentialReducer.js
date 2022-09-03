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

export const dailyEssentialReducer = (state = initialState, action) => {

    const evaluate=(item)=>{
        var re = new RegExp(state.searchInput,"ig");
        const evaluateCategory = state.currentCategory === "All categories" ? true : item.category === state.currentCategory
        return evaluateCategory && item.price <= state.currentPrice && re.test(item.title)
}

    switch (action.type) {

        case 'FETCH PRODUCT': return {
            ...state, loading: true
        }

        case 'FETCH SUCCESS':
            const categories = new Set(action.payload.map((item)=>item.category))
            return {
                ...state, loading: false, items: action.payload, error: '',categories:["All categories",...Array.from(categories)], filteredItems:action.payload
            }

        case 'FETCH FAIL': return {
            ...state, loading: false, error: action.payload
        }

        case 'FILTER ITEMS':
            const priceFilterItems = state.items.filter((item)=>evaluate(item))
            return {
                ...state, filteredItems: priceFilterItems
            }

        case 'UPDATE INPUT':
            return {...state, searchInput:action.payload}

        case 'UPDATE CATEGORY':
            return {...state, currentCategory:action.payload, searchInput:""}

        case "UPDATE PRICE": return {
            ...state, currentPrice: action.payload
        }
        default: return state
    }
}