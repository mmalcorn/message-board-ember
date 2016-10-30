import Ember from 'ember';

export default Ember.Component.extend({

actions: {
  update(question, params) {
    this.sendAction('update', question, params);
    },
  }
});
//Don't think I need this route anymore--update is being referenced in question-route now; not question-display.  We'll see
