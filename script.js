window.onload = function() {
	main();
};

function main() {
	var canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');
	var distanceEarthMoon = 150;
	var lunation = 29.530589; //The period of time from one new moon to the next; 29 dias, 12 horas, 44 minutos e 2,9 segundos
	var xAxis, yAxis;
	var day = 0;

	function line() {
		//Draw lines
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

	function drawArc() {
		return(Math.PI / 180) * (90); // 90 degree to rad
	}

	function update() {
		//seno = cateto oposto / hipotenusa
		//cateto oposto = hipotenusa=>distanceEarthMoon * seno=>Math.cos(Math.PI*2*(1/4))
		//x = distanceEarthMoon*Math.cos(Math.PI*2*(1/4)); //divide a circunferencia em 4 partes, cada parte igual a um dia.
		xAxis = distanceEarthMoon * Math.cos(Math.PI * 2 * (day / lunation));
		yAxis = distanceEarthMoon * Math.sin(Math.PI * 2 * (day / lunation));
		day = day + 0.416;
	}

	function draw() {
		//Earth
		ctx.beginPath();
		ctx.arc(240, 240, 36, drawArc(), -(drawArc()), true);
		ctx.lineWidth = 0;
		ctx.fillStyle = "#090968";
		ctx.fill();
		ctx.beginPath();
		ctx.arc(240, 240, 36, drawArc(), -(drawArc()), false);
		ctx.lineWidth = 0;
		ctx.fillStyle = "#121212";
		ctx.fill();
		//Moon
		ctx.beginPath();
		ctx.arc(240 + xAxis, 240 - yAxis, 9, drawArc(), -(drawArc()), true);
		ctx.lineWidth = 0;
		ctx.fillStyle = "#4D4D4D";
		ctx.fill();
		ctx.beginPath();
		ctx.arc(240 + xAxis, 240 - yAxis, 9, drawArc(), -(drawArc()), false);
		ctx.lineWidth = 0;
		ctx.fillStyle = "#121212";
		ctx.fill();
	}

	function loop() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		//line();
		update();
		draw();
	}
	loop();
	setInterval(loop, 100);
}