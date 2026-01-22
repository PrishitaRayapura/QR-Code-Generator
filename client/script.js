const form = document.getElementById("qr-form");
const qrResult = document.getElementById("qr-result");

form.addEventListener("submit", function (e) {
	e.preventDefault(); // ⭐ THIS FIXES THE ISSUE

	const id = document.getElementById("qr-id").value;
	const price = document.getElementById("qr-price").value;

	if (!id || !price) {
		alert("Please fill all fields");
		return;
	}

	const qrData = `ID: ${id}, Price: ${price}`;

	qrResult.innerHTML = `
		<img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrData)}" alt="QR Code">
	`;
});
