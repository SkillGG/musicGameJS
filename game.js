class Game {
	constructor({canvas, music, sheet}){
		
		this.canvas = canvas || document.querySelector(`canvas`)
		if(!this.canvas){
			this.canvas = document.createElement('canvas');
			this.canvas.id = "playroom";
			document.body.append(this.canvas);
		}
		this.music = music;
		this.sheet = sheet;
	}
	play(){
		if(!this.music || !this.sheet)
			throw "Cant play empty music!";
		// processSheet();
		this.prepareCanvas();
		this.playAudio();
	}
	prepareCanvas(){
		// canvasData
		this.cdata = {context: canvas.getContext("2d")};
		
	}
	playAudio(){
		if(this.audio){
			delete this.audio;
			this.audio.pause();
		}
		this.audio = new Audio(this.music.URL);
		this.canvas.style.display = "block";
		this.audio.oncanplaythrough = ()=>{
			this.audio.play();
		}
	}
}


const adds = Array.from(document.querySelectorAll(`li.add`));
const addi = Array.from(document.querySelectorAll(`input[type='file']`));
const infs = Array.from(document.querySelectorAll(`span`));
const play = document.querySelector(`button`);

const canvas = document.querySelectorAll("canvas");
const loadFiles = [null,null];

let game = null;

adds[0].onclick = ()=>addi[0].click();

addi[0].onchange = ()=>{
	if(addi[0].files.length){
		loadFiles[0] = {file:addi[0].files[0], URL:URL.createObjectURL(addi[0].files[0])};
		infs[0].innerText = `${loadFiles[0].file.name}`;
	}
}

adds[1].onclick = ()=>addi[1].click();

addi[1].onchange = ()=>{
	if(addi[1].files.length){
		loadFiles[1] = {file:addi[1].files[0], URL:URL.createObjectURL(addi[1].files[0])};
		infs[1].innerText = `${loadFiles[1].file.name}`;
	}
}


play.onclick = ()=>{
	if(loadFiles[0] && loadFiles[1]){
		// play game
		game = new Game({music: loadFiles[0], sheet:loadFiles[1]});
		game.play();
		document.querySelector(`nav`).style.display = "none";
		return;
	}
	if(!loadFiles[0])
		alert("Please select any music!")
	if(!loadFiles[1])
		alert("Please select any sheet!");
}