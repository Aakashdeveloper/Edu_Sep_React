export default function(state={},action){
    switch(action.type){
        case 'GET_LATEST':
            return{...state,lNews:action.payload}
        case 'GET_ARTICLE':
            return{...state,aNews:action.payload}
        case 'GET_SELECTED_NEWS':
            return{...state,selected:action.payload}
        case 'CLEAR_SELECTED_NEWS':
            return{...state,selected:action.payload}
        default:
            return state
    }
}

/*
var a = [];
a.push('abc')
*/