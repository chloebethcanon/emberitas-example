import Ember from 'ember';

export default Ember.Controller.extend({
	name: '',
	color: Ember.computed.readOnly('model.color'),
	someInformation: Ember.computed('model.name', 'model.color', function(){
		return 'Your name is ' + this.get('model.name') + ' and your favorite color is ' + this.get('model.color') + ".";
	}),
	colorStyle: Ember.computed('color', function(){
		// Not necessarily browser compatible
		let color = CSS.escape(this.get('color'));
		return Ember.String.htmlSafe('color: ' + color);
	}),
	actions: {
		setName(newName) {
			this.set('model.name', newName);
			this.get('model').save();
			alert('The model was saved.');
		},
		setColor(newColor) {
			this.set('model.color', newColor);
			this.get('model').save();
			alert('The model was saved.');
		}
	}
});
