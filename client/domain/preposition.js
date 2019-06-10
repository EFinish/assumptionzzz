import { Record } from 'immutable';
import { PREPOSITION_THIS } from '../constants';

const Preposition = Record({
	id: null,
	type: PREPOSITION_THIS,
	statements: []
});

export { Preposition };