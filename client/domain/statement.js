import { Record } from 'immutable';

const Statement = Record({
	id: null,
	description: null,
	truth_value: false,
	valid_value: false,
	referents: []
});

export { Statement };