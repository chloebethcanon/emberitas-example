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
			this.send('saveModel');
		},
		setColor(newColor) {
			this.set('model.color', newColor);
			this.send('saveModel');
		},
		saveModel() {
			this.get('model').save().then(()=> {
				console.log('Promise fulfilled - the model was saved.');
			}).catch(()=> {
				console.log('Promise rejected or error caught.');
			}).finally(()=> {
				console.log('This happens whether the promise thens or catches.');
			});
		}
	}
});
