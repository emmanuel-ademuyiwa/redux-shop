import { apiCall } from "../../api/api";

export const add = () => { 
    return { 
        type : 'ADD'
    }
}

export const remove = () => { 
    return { 
        type: 'REMOVE'
    }
}

export const del = () => { 
    return { 
        type: 'DEL'
    }
}

export const requestProducts = () => (dispatch) => {
    dispatch({ type: 'REQUEST_ROBOTS_PENDING' })
    apiCall('https://fakestoreapi.com/products')
      .then(data => dispatch({ type: 'REQUEST_ROBOTS_SUCCESS', payload: data }))
      .catch(error => dispatch({ type: 'REQUEST_ROBOTS_FAILED', payload: error }))
  }