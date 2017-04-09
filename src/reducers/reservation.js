const initialState = {
	users: [],
	email: []
} 

export default function (state=initialState, action) {
	switch (action.type) {
		case 'GET_USERS':
			return {...state, users:[...action.users]}
		default:
			return state
	}
}

export default function (state=initialState, action) {
	switch (action.type) {
		case 'GET_EMAIL':
			return {...state, email:[...action.email]}
		default:
			return state
	}
}