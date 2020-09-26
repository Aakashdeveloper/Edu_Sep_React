export function moviesList(){
    return{
        type:'MOVIES_LIST',
        payload:[
            {id:1,name:'Death Race'},
            {id:2,name:'Mad Max'},
            {id:3,name:'Avenger'}
        ]
    }
}