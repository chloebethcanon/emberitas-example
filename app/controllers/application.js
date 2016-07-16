import Ember from 'ember';

export default Ember.Controller.extend({
	name: 'Chloe',
	color: 'green',
	actions: {
		setName(newName) {
			this.set('name', newName);
		},
		setColor(newColor) {
			this.set('color', newColor);
		}
	}
});
