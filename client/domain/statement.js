import { Record } from 'immutable';

const Statement = Record({
	id: null,
	description: null,
	truth_value: false,
	referents: [],
	valid_value: true
});

// Object.defineProperty(Statement.prototype, 'valid_value', {
//     get: function () {
// 		const referents = this.get('referents');
// 		if (referents.length === 0) {
//             return false;
//         }
// 		return true;
//     }
// });

export { Statement };