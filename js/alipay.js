new Vue({
	el: '#pay',
	data: {
		money: '',
		from: ''
	},
	/*mounted: function(){
		this.getImg()
	},*/
	methods: {
		pay: function() {
			this.$http.get('http://localhost:8903/alipay/pay').then(function(res) {
				console.log(res);
				// this.from = res;
				const newWin = window.open('','_black');
				newWin.document.write(res.data);
			}, function() {
				console.log("请求失败处理");
			})
		}
	}
});