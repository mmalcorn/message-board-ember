import Ember from 'ember';

export default Ember.Component.extend({
   favoriteQuestion: Ember.inject.service(),

actions: {
  update(question, params) {
    this.sendAction('update', question, params);
    },
    markFavQuestion(question) {
      this.get('favoriteQuestion').add(question);
      console.log('favoriteQuestion');
    },
  }
});
