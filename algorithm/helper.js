const helper = {
	// 生成随机数组, len 为数组长度
	random(len) {
		const arr = [];
		for (let i = 0; i < len; ++i) {
			let random = Math.random() * 1000;
			arr.push(parseInt(random, 10));
		}
		return arr;
	},

	// 生成排好序的数组
	sort(len) {
		return this.random(len).sort((a, b) => a - b);
	}
};

module.exports = helper;