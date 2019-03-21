(function (window) {

	// Your starting point. Enjoy the ride!
	new Vue({
		el: '#app',
		data: {
			allFlag: false,
			flag: null,
			params: 'all',
			text: '',
			lists: [
				{ id: 0, check: false, text: '美食' },
				{ id: 1, check: false, text: '影视' },
				{ id: 2, check: false, text: '棋牌' },
			]
		},
		methods: {
			mouseenter(n) {
				this.flag = n
			},
			mouseleave() {
				this.flag = null
			},
			pick(str) {
				switch (str) {
					case 'active':
						return this.lists.filter(n => !n.check)
					case 'completed':
						return this.lists.filter(n => n.check)
					case 'clear':
						this.lists = this.lists.filter((v, i, arr) => {
							return !v.check
						})
						return this.lists
					default:
						return this.lists
				}
			},
			add() {
				this.lists.push({ id: Date.now(), check: false, text: this.text })
				this.text = ''
			},
			del(n) {
				this.lists.splice(n, 1)
			},
			selectAll() {
				this.lists.map(n => n.check = this.allFlag)
			}
		},
		computed: {
			'length': function () {
				return this.lists.filter(n => !n.check).length
			},
			'currentList': function () {
				return this.pick(this.params)
			}
		}
	})
})(window);
