var btn_jogador1 = document.getElementById("btn_jogador_1");
var btn_jogador2 = document.getElementById("btn_jogador_2");
var btn_parar1 = document.getElementById("btn_parar_1");
var btn_parar2 = document.getElementById("btn_parar_2");
var pontoJogador1 = document.getElementById("jogador1");
var pontoJogador2 = document.getElementById("jogador2");

$(btn_jogador1).attr('disabled', 'disabled');
$(btn_parar1).attr('disabled', 'disabled');
$(btn_jogador2).attr('disabled', 'disabled');
$(btn_parar2).attr('disabled', 'disabled');
$(btn_reiniciar).attr('disabled', 'disabled');


function iniciar() {
	var btn_jogador1 = document.getElementById("btn_jogador_1");
	var btn_reiniciar = document.getElementById("btn_reiniciar");
	var btn_parar1 = document.getElementById("btn_parar_1");
	var btn_iniciar = document.getElementById("btn_iniciar");

	$(btn_jogador1).removeAttr('disabled');
	$(btn_parar1).removeAttr('disabled');
	$(btn_reiniciar).attr('disabled', 'disabled');
	$(btn_iniciar).attr('disabled', 'disabled');

}



var pontos_A = 0;
var pontos_B = 0;
var pontuação1 = 0;


function results() {
	
	if (pontos_B < pontos_A && pontos_A <= 21) {
		document.getElementById("resultado").innerHTML = "jogador1 venceu";
	} else if (pontos_B > pontos_A && pontos_B <= 21) {
		document.getElementById("resultado").innerHTML = "jogador 2 venceu";

	} else if (pontos_A > 21 && pontos_B < 21) {
		document.getElementById("resultado").innerHTML = "jogador 2 venceu";

	} else if (pontos_A < 21 && pontos_B > 21) {
		document.getElementById("resultado").innerHTML = "jogador1 venceu";

	} else if (pontos_A > 21 && pontos_B > 21 || pontos_A == pontos_B) {
		document.getElementById("resultado").innerHTML = "empate";
	}
	else if (pontos_A == 21 && pontos_B > 21) {
		document.getElementById("resultado").innerHTML = "jogador 1 venceu";
	}
	else if (pontos_A == 21 && pontos_B < 21) {
		document.getElementById("resultado").innerHTML = "jogador 1 venceu";
	}
	else if (pontos_B == 21 && pontos_A > 21) {
		document.getElementById("resultado").innerHTML = "jogador 2 venceu";
	}
	else if (pontos_B == 21 && pontos_A < 21) {
		document.getElementById("resultado").innerHTML = "jogador 2 venceu";
    }
}

function sorteio1(jogar) {
	var jogo = Math.floor(Math.random() * 12 + 1);
	var num = 0;
	var total_pontos = 0;

	switch (jogo) {
		case 1:
			var num = 1;
			document.getElementById("cartas1").src = "/images/1.png";
			total_pontos += 1;
			break;
		case 2:
			var num = 2;
			document.getElementById("cartas1").src = "/images/2.png";
			total_pontos += 2;
			break;
		case 3:
			var num = 3;
			document.getElementById("cartas1").src = "/images/3.png";
			total_pontos += 3;
			break;
		case 4:
			var num = 4;
			document.getElementById("cartas1").src = "/images/4.png";
			total_pontos += 4;
			break;
		case 5:
			var num = 5;
			document.getElementById("cartas1").src = "/images/5.png";
			total_pontos += 5;
			break;
		case 6:
			var num = 6;
			document.getElementById("cartas1").src = "/images/6.png";
			total_pontos += 6;
			break;
		case 7:
			var num = 7;
			document.getElementById("cartas1").src = "/images/7.png";
			total_pontos += 7;
			break;
		case 8:
			var num = 8;
			document.getElementById("cartas1").src = "/images/8.png";
			total_pontos += 8;
			break;
		case 9:
			var num = 9;
			document.getElementById("cartas1").src = "/images/9.png";
			total_pontos += 9;
			break;
		case 10:
			var num = 10;
			document.getElementById("cartas1").src = "/images/10.png";
			total_pontos += 10;
			break;
		case 11:
			var num = 11;
			document.getElementById("cartas1").src = "/images/11.png";
			total_pontos += 11;
			break;
		case 12:
			var num = 12;
			document.getElementById("cartas1").src = "/images/12.png";
			total_pontos += 12;
			break;
		case 13:
			var num = 13;
			document.getElementById("cartas1").src = "/images/13.png";
			total_pontos += 13;
			break;
		default:
			break;

	}
	if (jogar == 1) {
		pontos_A += total_pontos;
	}
	else {
		pontos_B += total_pontos;
	}
}


function sorteio2(jogo) {
	var jogo = Math.floor(Math.random() * 12 + 1);
	var num2 = 0;
	var total_pontos = 0;

	switch (jogo) {
		case 1:
			var num2 = 1;
			document.getElementById("cartas2").src = "/images/1.png";
			total_pontos += 1;
			break;
		case 2:
			var num2 = 2;
			document.getElementById("cartas2").src = "/images/2.png";
			total_pontos += 2;
			break;
		case 3:
			var num2 = 3;
			document.getElementById("cartas2").src = "/images/3.png";
			total_pontos += 3;
			break;
		case 4:
			var num2 = 4;
			document.getElementById("cartas2").src = "/images/4.png";
			total_pontos += 4;
			break;
		case 5:
			var num2 = 5;
			document.getElementById("cartas2").src = "/images/5.png";
			total_pontos += 5;
			break;
		case 6:
			var num2 = 6;
			document.getElementById("cartas2").src = "/images/6.png";
			total_pontos += 6;
			break;
		case 7:
			var num2 = 7;
			document.getElementById("cartas2").src = "/images/7.png";
			total_pontos += 7;
			break;
		case 8:
			var num2 = 8;
			document.getElementById("cartas2").src = "/images/8.png";
			total_pontos += 8;
			break;
		case 9:
			var num2 = 9;
			document.getElementById("cartas2").src = "/images/9.png";
			total_pontos += 9;
			break;
		case 10:
			var num2 = 10;
			document.getElementById("cartas2").src = "/images/10.png";
			total_pontos += 10;
			break;
		case 11:
			var num2 = 11;
			document.getElementById("cartas2").src = "/images/11.png";
			total_pontos += 11;
			break;
		case 12:
			var num2 = 12;
			document.getElementById("cartas2").src = "/images/12.png";
			total_pontos += 12;
			break;
		case 13:
			var num2 = 13;
			document.getElementById("cartas2").src = "/images/13.png";
			total_pontos += 13;
			break;
		default:
			break;
	}
	if (jogo == 1) {
		pontos_A += total_pontos;
	}
	else {
		pontos_B += total_pontos;
	}
}

function jogador1() {

	sorteio1(1);
	

	if (pontos_A <= 21) {
		document.getElementById("jogador1").innerHTML = pontos_A;
		if (pontos_A == 21) {
			var btn_jogador1 = document.getElementById("btn_jogador_1");
			var btn_parar1 = document.getElementById("btn_parar_1");
			var btn_jogador2 = document.getElementById("btn_jogador_2");
			var btn_parar2 = document.getElementById("btn_parar_2");

			$(btn_jogador1).attr('disabled', 'disabled');
			$(btn_parar1).attr('disabled', 'disabled');

			$(btn_jogador2).removeAttr('disabled');
			$(btn_parar2).removeAttr('disabled');
			$(btn_reiniciar).removeAttr('disabled');
		}
	}
	else {
		document.getElementById("jogador1").innerHTML = pontos_A;

		var btn_jogador1 = document.getElementById("btn_jogador_1");
		var btn_parar1 = document.getElementById("btn_parar_1");
		var btn_jogador2 = document.getElementById("btn_jogador_2");
		var btn_parar2 = document.getElementById("btn_parar_2");

		$(btn_jogador1).attr('disabled', 'disabled');
		$(btn_parar1).attr('disabled', 'disabled');

		$(btn_jogador2).removeAttr('disabled');
		$(btn_parar2).removeAttr('disabled');

	}

		
	
}

function jogador2() {

	sorteio2(2);

	if (pontos_B <= 21) {
		document.getElementById("jogador2").innerHTML = pontos_B;

		if (pontos_B == 21) {
			var btn_jogador2 = document.getElementById("btn_jogador_2");
			var btn_parar2 = document.getElementById("btn_parar_2");

			$(btn_jogador2).attr('disabled', 'disabled');
			$(btn_parar2).attr('disabled', 'disabled');
			$(btn_reiniciar).removeAttr('disabled');
			results();
		}
		
	}

	else{
		document.getElementById("jogador2").innerHTML = pontos_B;

		var btn_jogador2 = document.getElementById("btn_jogador_2");
		var btn_parar2 = document.getElementById("btn_parar_2");

		$(btn_jogador2).attr('disabled', 'disabled');
		$(btn_parar2).attr('disabled', 'disabled');
		$(btn_reiniciar).removeAttr('disabled');
		results();
	}
	
}

function parar1() {

	var btn_jogador1 = document.getElementById("btn_jogador_1");
	var btn_jogador2 = document.getElementById("btn_jogador_2");
	var btn_parar1 = document.getElementById("btn_parar_1");
	var btn_parar2 = document.getElementById("btn_parar_2");

	$(btn_jogador1).attr('disabled', 'disabled');
	$(btn_parar1).attr('disabled', 'disabled');

	$(btn_jogador2).removeAttr('disabled');
	$(btn_parar2).removeAttr('disabled');
}

function parar2() {

	var btn_jogador2 = document.getElementById("btn_jogador_2");
	var btn_jogador1 = document.getElementById("btn_jogador_1");
	var btn_parar2 = document.getElementById("btn_parar_2");
	var btn_parar1 = document.getElementById("btn_parar_1");
	var btn_reiniciar = document.getElementById("btn_reiniciar");

	$(btn_jogador2).attr('disabled', 'disabled');
	$(btn_parar2).attr('disabled', 'disabled');
	$(btn_reiniciar).removeAttr('disabled');

	results();
}

function reiniciar() {

	var btn_iniciar = document.getElementById("btn_iniciar");
	var btn_reiniciar = document.getElementById("btn_reiniciar");

	$(btn_iniciar).removeAttr('disabled');
	$(btn_reiniciar).attr('disabled', 'disabled');

	document.getElementById("cartas2").src = "/images/0.png";
	document.getElementById("cartas1").src = "/images/0.png";


	document.getElementById("jogador1").innerHTML = pontos_A = 0;
	document.getElementById("jogador2").innerHTML = pontos_B = 0;
	document.getElementById("resultado").innerHTML = "X";
}