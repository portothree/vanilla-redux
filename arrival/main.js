const arrivalP = document.querySelector(".arrival");
const usernameInp = document.querySelector(".username");

usernameInp.addEventListener("input", e => {
	const name = e.target.value;

	arrivalP.innerText = `${name} in the house!`;
});
