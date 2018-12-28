window.onload = function() {
	main();
};

function main() {
	var canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');
	ctx.fillRect(25, 25, 100, 100);
	ctx.clearRect(45, 45, 60, 60);
	ctx.strokeRect(50, 50, 50, 50);
}