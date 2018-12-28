window.onload = function() {
	main();
};

function main() {
	var canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');

	function line() {
		for(var x = 0; x <= 480; x = x + 40) {
			ctx.beginPath();
			ctx.moveTo(x, 0);
			ctx.lineTo(x, 480);
			ctx.moveTo(0, x);
			ctx.lineTo(480, x);
			ctx.strokeStyle = "#2B2B2B";
			ctx.lineWidth = 0;
			ctx.stroke();
		}
	}

	function draw() {
		//Earth
		ctx.beginPath();
		ctx.arc(240, 240, 60, -(Math.PI / 180) * (90), (Math.PI / 180) * (90), false);
		ctx.lineWidth = 0;
		ctx.fillStyle = "#090968";
		ctx.fill();
		ctx.beginPath();
		ctx.arc(240, 240, 60, (Math.PI / 180) * (90), -(Math.PI / 180) * (90), false);
		ctx.lineWidth = 0;
		ctx.fillStyle = "#121212";
		ctx.fill();
	}

	function loop() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		//line();
		draw();
	}
	loop();
	setInterval(loop, 1000);
}