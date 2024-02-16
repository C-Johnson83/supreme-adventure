import {UPDATE_THEME, UPDATE_USERDATA} from './actions'


export const reducer = (state, action) =>{
 switch (action.type){
	case UPDATE_THEME:
		return {
			...state,
			darkMode: !state.darkMode
		}
	case UPDATE_USERDATA: 
		return {
			...state,
			userData: action.payload
		}
		default:
			return state
 }
}