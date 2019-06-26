import { Record } from 'immutable';

const PrepositionType = Record({
	id: null,
	value: null,
	label: null,
	label_full: null,
	amount_statements: 0,
	calculation: (statements) => {}
});

export { PrepositionType };