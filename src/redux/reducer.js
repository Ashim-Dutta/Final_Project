
import { GET_ITEM, SWITCH_MODE } from "./actioType";



const initialState = {
    mode : true ,
    item:{
        "label": "The Legend of Hanuman",
        "video": "https://res.cloudinary.com/dbbuqesjg/video/upload/v1705235945/Desney_hotstar/trailers/the_legend_of_hanuman_xdjv8y.mp4",
        "src": "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/9666/1649666-v-e994faa3b7bf",
        "children": [
          {
            "subLabel": "2024 | 3 season | 7 languages | U/A 7+",
            "label": "Setting his mighty foot on Lanka, Hanuman unleashes himself against Ravan. Watch the legendary hero and the demon king go head to head in this ultimate war.Setting his mighty foot on Lanka, Hanuman unleashes himself against Ravan. Watch the legendary hero and the demon king go head to head in this ultimate war.",
            "src": "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/9668/1649668-i-3d1bf67b1bcf",
            "href": "#"
          }
        ]
      }
}

export const reducer = (state = initialState, action)=>{
    const {type,payload} = action
    switch (type) {
        case SWITCH_MODE:
            return {
                ...state,
                mode:!state.mode 
            }
        case GET_ITEM:
            return {
                ...state,
                item:payload
            }
        default:
            return state;
    }
}