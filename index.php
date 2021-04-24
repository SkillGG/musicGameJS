<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="Pragma" content="no-cache">
	<meta http-equiv="Cache-control" content="no-cache">
	<title>Music Game maybe?</title>
	<script src="game.js" defer></script>
	<link rel="stylesheet" href="music.css">

</head>
<body>
	<nav id='menu'>
		Menu
		<ul>
			<li class='playlist'>Select&nbsp;from&nbsp;Playlist</li>
			<li class='add'>Select Music</li>
			<li class='add'>Select Sheet</li>
		</ul>
		<hr>
		<div>Music: <span id='title'></span></div>
		<div>Sheet: <span id='sheet'></span></div>
		<hr>
		<button id='playbtn'>Play!</button>
	</nav>
	<canvas id='playroom' style='display:none;'></canvas>
	<div style='display: none;'>
		<input type="file" accept="audio/*" id='music'>
		<input type="file" filter=".sheet" id='sheet'>
	</div>
</body>
</html>