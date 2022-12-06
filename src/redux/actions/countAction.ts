export const increment = () => {
    return {
        type: 'COUNTER_INCREMENT',
    }
}

export const decrement = () => {
    return {
        type: 'COUNTER_DECREMENT',
    }
}
 export const searchFilter = (search: string) => {
    return {
        type: 'SEARCH_FILTER',
        payload: search,
    }
 }