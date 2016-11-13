import Ember from 'ember';

export default Ember.Service.extend({
  favorite_questions: [],

  add(question) {
    this.get('favorite_questions').pushObject(question);
  }
});
