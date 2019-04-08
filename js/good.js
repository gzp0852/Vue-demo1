new Vue({
	el: '#good',
	data: {
		items: []
	},
	/*mounted: function(){
		this.getImg()
	},*/
	methods: {
		getImg: function() {
			this.$http.get('http://localhost:8901/goods/queryGoodById/1').then(function(res) {
				this.items = res.data.data.fileEntities;
				console.log(res);
			}, function() {
				console.log("请求失败处理");
			})
		}
	}
});
new Vue({
	el: '#login',
	data: {
		username: "",
		password: ""
	},
	/*mounted: function(){
		this.getImg()
	},*/
	methods: {
		login: function() {
			this.$http.post('http://localhost:8900/login', {
				username: this.username,
				password: this.password
			}, {
				emulateJSON: true
			}).then(function(res) {
				console.log(res);
			}, function() {
				console.log("请求失败处理");
			})
		}
	}
})