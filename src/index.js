import Vue from 'vue';
import VueResource from 'vue-resource';
import config from '../config/config.js';

var apikey = config.apikey;

Vue.config.devtools = true;
Vue.use(VueResource);

new Vue({
	el: '#app',
	data: {
		newsFeed: ""
	},
	computed: {
		source: function() {
			var source = this.newsFeed.source;
			return source;
		}
	}, 
	methods: 
	{
		getData: function() {
			var newsFeed = this.$http.get('https://newsapi.org/v1/articles?source=the-next-web&sortby=latest&apikey='+ apikey).then(response => {
				this.newsFeed = response.body;
			}, response => {
				console.error(error);
			});
		},
	}
});