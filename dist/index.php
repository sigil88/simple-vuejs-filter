<html>
	<head>
		<title>Vue &amp; Webpack</title>
		<link rel="stylesheet" type="text/css" href="styles.css">
	</head>
	<body>
		<main id="feed" class="newsfeed newsfeed__container" >
			<section class="hero is-primary">
				<div class="hero-body">
					<div class="container">
						<h1 class="title">Feed source: {{ newsFeed.source }}</h1>
						<h2 v-show="selected" class="subtitle">Filtering articles by: {{ selected }}</h2>
					</div>
				</div>
			</section>
			<div class="section newsfeed__section">
				<div class="columns newsfeed__articles--columns">
					<div class="column is-3">
						<aside class="menu">
							<p class="menu-label">
								Filter options
							</p>
							<div class="field">
								<label class="label">Choose an author</label>
								<div class="control">
									<div class="select">
										<select v-model="selected">
											<option disabled value="">Filter by author</option>
											<option v-for="author in authorsList" :value="author">
												{{author}}
											</option>
										</select>
									</div>
								</div>
							</div>
						</aside>
					</div>
					<div class="column is-9">
						<div class="columns is-multiline">
							<div class="column articles" v-show="article.author == selected" v-for="article in articles" >
								<div class="card">
									<div class="card-img-featured" :style="{ 'background-image' : 'url(' + article.urlToImage + ')' }"></div>
									<div class="card-content">
										<div class="media">
											<div class="media-content">
												<h4 class="subtitle">{{article.author}}</h4>
												<h3 class="title is-6">{{article.title}}</h4>
												<a class="button is-primary is-outlined" target="_blank" :href="article.url">READ MORE&nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
											</div>
										</div>
										
									</div>
								</div>
							</div>
							<div class="column articles" v-if="!selected">
								<div class="card card--none">
									<div class="card-content">
										<div class="media">
											<div class="media-content">
												<h2 class="title">Choose an author</h2>
												<p>Try choosing an option from the dropdown.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
					</div>
					
				</div>
			</div>
		</main>
		<script src="app.js"></script>
	</body>
</html>