/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
import InitialData from '../InitialData.js'

const foodReducer = (currData = InitialData,action) =>{
     switch(action.type) {
         case 'FOOD' : {
             currData = {
                 ...currData,
                 foodInfo :action.payload
             }
             break;
         }
         case 'POST': {
             currData = {
                 ...currData,
                 postInfo:action.payload
             }
         }
     }

     return currData
}

export default foodReducer