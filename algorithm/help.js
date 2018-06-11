// 生成随机数组, len 为数组长度

const randomGenerator = (len) => {
	const arr = [];
	for (let i = 0; i < len; ++i) {
		let random = Math.random() * 1000;
		arr.push(parseInt(random, 10));
	}
	return arr;
}