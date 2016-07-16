import Ember from 'ember';

export default Ember.Controller.extend({
	name: 'Chloe',
	actions: {
		setName(newName) {
			this.set('name', newName);
		}
	}
});
