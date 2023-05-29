export const handleKeyUp = (target, fn) => {
	return function (e) {
		if (target === e.key) fn.call(this, e);
	};
};
