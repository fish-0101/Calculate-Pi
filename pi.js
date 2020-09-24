/*var piElement = document.getElementById("pi");
let pi = 0;
let iterator = sequence();

setInterval(calculate, 1000);

function calculate() {
	pi += 4 /  iterator.next().value;
    pi -= 4 / iterator.next().value;
	piElement.innerHTML = pi;
}

function* sequence() {
    let i = 1;
    while(true){
      yield i;
      i += 2;
    }
}*/

var piElement = document.getElementById("pi");

setInterval(calculate, 10);
let digits = 2n;

function calculate() {
	let i = 1n;
	let x = 3n * (10n ** (19n + digits));
	let pi = x;
	while (x > 0) {
			x = x * i / ((i + 1n) * 4n);
			pi += x / (i + 2n);
			i += 2n;
	}
	//console.log(pi / (10n ** 20n));
	piElement.innerHTML = ("" + pi / (10n ** 20n)).substring(0, 1) + "." + ("" + pi / (10n ** 20n)).substring(1);
	digits++;
}
