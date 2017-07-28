import Vue from 'vue';

new Vue({
	el: '#app',
	data: {
		message: "Hello world"
	},
	computed: {
		test: function(){
			return 'test';
		}
	},
	methods: {
		getData: function() {

			 }
		},
});