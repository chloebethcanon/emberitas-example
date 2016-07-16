import Ember from 'ember';

export default Ember.Controller.extend({
	name: 'Chloe',
	color: 'green',
	someInformation: Ember.computed('name', 'color', function(){
		return 'Your name is ' + this.get('name') + ' and your favorite color is ' + this.get('color') + ".";
	}),
	actions: {
		setName(newName) {
			this.set('name', newName);
		},
		setColor(newColor) {
			this.set('color', newColor);
		}
	}
});
