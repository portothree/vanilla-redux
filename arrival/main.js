const arrivalP = document.querySelector(".arrival");
const usernameInp = document.querySelector(".username");

function arrivalReducer(state = {}, action) {
	switch (action.type) {
		case "CHANGE_ARRIVAL":
			// There's no need to actually copy the state here since
			// we are only dealing with one entrie ('arrival') in the object.
			return { ...state, arrival: action.arrival };
		default:
			return state;
	}
}

const store = Redux.createStore(arrivalReducer);

usernameInp.addEventListener("input", e => {
	const name = e.target.value;

	store.dispatch({
		type: "CHANGE_ARRIVAL",
		arrival: `${name} in the house! Welcome.`
	});
});

store.subscribe(() => {
	const state = store.getState();

	arrivalP.innerText = state.arrival;
});
