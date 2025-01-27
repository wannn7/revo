function hitung() {
	const Tb = document.getElementById("inputTb").value;
	const Bb = document.getElementById("inputBb").value;

	const result = Bb / Tb;

	document.getElementById("result").innerText = result;
}
