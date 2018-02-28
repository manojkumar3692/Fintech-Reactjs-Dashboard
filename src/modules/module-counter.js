const initialState = {
	text:'',
	component:'Home'
}

export const increment = 'CLICKED';

export default (state = initialState,action) => {
	switch (action.type) {
		case increment:
			return {
				...state,text:'Next Component'
			};

		default:
			return state
	}
}