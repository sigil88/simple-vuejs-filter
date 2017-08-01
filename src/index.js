import Vue from 'vue';
import VueResource from 'vue-resource';
import config from '../config/config.js';

var apikey = config.apikey;

// Vue 
// TO DO: 
//  	- convert to using templates/components
//		- change from vue-resource to axios
Vue.config.devtools = true;
Vue.use(VueResource);

new Vue({
	el: '#feed',
	data: {
		newsFeed: "",
	},
	created: function() {
	    console.log('running');
	    this.getData()
	    .then(() => {
	    	this.filterAuthors();
	    	
	    });
	},
	computed: 
	{
		articles: function() {
			var articles = this.newsFeed.articles;
			return articles;
		},

		// authorsList: function() {
		// 	return authorsArray;
		// }
	}, 
	methods: 
	{
		getData: function() {
			return this.$http.get('https://newsapi.org/v1/articles?source=the-next-web&sortby=latest&apikey='+ apikey).then(response => {
				this.newsFeed = response.body;
			}, err => {
				console.error(error);
			});
		},

		filterAuthors: function() {

			var articles = this.articles; //computed
			var authorsArray = [];

			console.log(articles);

			// articles.forEach(function(article) {
			// 	// var authors = article.author;
			// 	// authorsArray.push(authors);
			// 	console.log(authors);
			// });

			// return authorsArray;


		}
	}
});