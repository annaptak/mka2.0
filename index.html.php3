<?php
	header('Content-Type: text/html; charset=utf-8');
	header("Expires: Mon, 26 Jul 1990 05:00:00 GMT");
	header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
	header("Cache-Control: no-store, no-cache, must-revalidate");
	header("Cache-Control: post-check=0, pre-check=0", false);
	header("Pragma: no-cache");
?>
<!Doctype HTML>
<html lang="pl">
<head>
	<script data-main="scripts/main" src="scripts/require.js"></script>
	<link rel="stylesheet" href="css/main.css"></link>
	<link rel="stylesheet" type="text/css" href="css/detal.css">
    <meta charset="utf-8"/>
	<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="application-name" content="Onet.pl"/> 
    <meta name="HandheldFriendly" content="true" />
    <title>Onet - wersja mobilna</title>	
</head>
<body>
	<div id="header">
		<img src="img/logosg.png" />
		<img src="img/mail.png" class="mailIcon" />
	</div>
	<div id="wrapper">

		
	</div>	

	<script type="text/template" id="sgDetail">
		
			<a href="#detail/<%=id %>">
				<img src="<%=image %>" />
				<div class="label <%= servicePath.split('.')[0] %>"><%=   mainTopic %></div>
				<div class="newsTitle"><%=title %></div>
			</a>
		
	</script>
	
	<script type="text/template" id="lead">
		<a href="#detail/<%=id %>">
			<div class="topNews" style="background-image:url(<%=image %>)">
				<div class="topNewsTitle"><%=title %></div>
			</div>
		</a>
	</script>
	<script type="text/template" id="index">

		<div class="slide">
			<div id="sg" class="content">
				<div id="topNews">
				</div>
				<div class="menuTiles">
					<div class="menuTile wiadomosci ">Wiadomości</div>
					<div class="menuTile sport">Sport</div>
					<div class="menuTile styl-zycia">Styl życia</div>
					<div class="menuTile biznes disabledCategory">Biznes</div>
					<div class="menuTile rozrywka">Rozrywka</div>
					<div class="menuTile gadzety">Technologie i Gry</div>
					<div class="menuTile moto disabledCategory">Moto</div>
					<div class="menuTile wiedza-swiat">Wiedza i kultura</div>
				</div>
				<div id="newsList" class="newsList">

				</div>
			</div>
		</div>
	</script>

	<script type="text/template" id="detail">
		<div class="slide newHidden">
			<div class="wraper">
				<div class="detailTop">
					<img src="http://m.ocdn.eu/_m/b77ff14ddb4d67fea0d27054a97bf3be,31,1,0-52-2000-600-0.jpg" alt="%opis foto" class="mainImage">
					<div class="prevButton"></div><div class="nextButton"></div>
					<!--<div class="titleOverlay"></div>-->
					<h1 class="title"><%= meta.title %></h1>
				</div>
				<article class="mainText">
					<% _.each(manifest.ref_0.content.blocks, function(v, i) { %>
						<p class="<% if (i === 0) { %>articleFirst<% } else { %>article<% } %>"><%= v.data.text %></p> 
					<% }); %>
				</article>
				<aside class="moreArticles">
					<h2>Więcej na temat</h2>
					<div class="newsList">
							<div class="newsTile">
								<img src="img/newsImg.jpg" />
								<div class="label">Sport</div>
								<div class="newsTitle">Wimbledon: historia tworzy się na naszych oczach</div>
							</div>
							<div class="newsTile">
								<img src="img/newsImg.jpg" />
								<div class="label">Wiadomości</div>
								<div class="newsTitle">Wimbledon: historia tworzy się na naszych oczach</div>
							</div>
							<div class="newsTile">
								<img src="img/newsImg.jpg" />
								<div class="label">Styl życia</div>
								<div class="newsTitle">Wimbledon: historia tworzy się na naszych oczach</div>
							</div>
							<div class="newsTile">
								<img src="img/newsImg.jpg" />
								<div class="label">Styl życia</div>
								<div class="newsTitle">Wimbledon: historia tworzy się na naszych oczach</div>
							</div>
							<div class="placeholder">
							</div>
						</div>
				</aside>
			</div>
		</div>
	</script>
</body>
</html>