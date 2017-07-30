<html>
  <head>
    <title>Vue &amp; Webpack</title>
  </head>
  <body>
  	<main id="app">

  		<h1>{{ message }}</h1>

  		<h2>Feed source: {{ source }}</h2>
 
  		<pre v-bind="getData()"></pre>
  		<div class="articles" v-for="newsPost in newsFeed.articles" >
  			
  		<h3>{{newsPost.title}}</h3>

  		</div>
  	</main>
    <script src="app.js"></script>
  </body>
</html>
