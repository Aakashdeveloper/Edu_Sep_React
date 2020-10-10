import reducer from '../reducers';
import article_reducers from '../reducers/article_reducers'

describe('Reducer Testing',() => {
    it('Should return the inital state',() =>{
        expect(JSON.stringify(reducer(undefined,{}))).toEqual(JSON.stringify({
            article:{},
            gallery:{}
        }))
    })
    test('return correct state',() => {
        const action = {type:'GET_LATEST',payload:[
            {
              "id": 2,
              "title": "Sed do eiusmod tempor incididunt ut labore et dolore ",
              "body": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
              "category": "Sports",
              "img": "2.jpg",
              "date": "21/21/1944",
              "author": "Mary Bottom",
              "views": 456,
              "likes": [
                73,
                18
              ]
            }
          ]};
        const expectedState = {lNews:[
            {
              "id": 2,
              "title": "Sed do eiusmod tempor incididunt ut labore et dolore ",
              "body": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
              "category": "Sports",
              "img": "2.jpg",
              "date": "21/21/1944",
              "author": "Mary Bottom",
              "views": 456,
              "likes": [
                73,
                18
              ]
            }
          ]};
        expect(article_reducers(undefined,action)).toEqual(expectedState);
    })
    it('Reducer with action',() => {
        let state={
            article:[],
            gallery:[]
        }

        state = reducer(state,{action:'GET_LATEST'})

        expect(state).toEqual({
            article:[],
            gallery:[]
        })
    })
})

