// S E L E C T O R S

let stopwatch = document.querySelector('.stopwatch');
let min = document.querySelector('.min');
let sec = document.querySelector('.sec');
let mils = document.querySelector('.mils');
let minutes = document.querySelector('#minutes');
let seconds = document.querySelector('#seconds');
let miliseconds = document.querySelector('#miliseconds');
let btnStart = document.querySelector('#st');
let btnStop = document.querySelector('#sp');
let btnReset = document.querySelector('#rst');
let m = 0;
let s = 0;
let ms = 0;
let int;

// E V E N T S

btnStart.addEventListener('click' , st);
btnStop.addEventListener('click' , sp);
btnReset.addEventListener('click' , rst);

// F U N C T I O N S

function st(){
	btnStart.removeEventListener('click' , st);
	int = setInterval(function(){
		ms++;
		(ms < 10) ? ms = '0' + ms : ms	
		if (ms === 100) {
			ms = 0;
			s++;
			(s < 10) ? s = '0' + s : s
			if (s === 60) {
				s = 0;
				m++;
				(m < 10)? m = '0' + m : m
				minutes.innerHTML = m;
			}
			seconds.innerHTML = s;
		}
		miliseconds.innerHTML = ms;	
	}, 10)
}

function sp(){
	clearInterval(int);
	btnStart.addEventListener('click' , st);
}

function rst(){
	m = 0;
	s = 0;
	ms = 0;
	minutes.innerHTML = '0' + m;
	seconds.innerHTML = '0' + s;
	miliseconds.innerHTML = '0' + ms;
	btnStart.addEventListener('click' , st);
}