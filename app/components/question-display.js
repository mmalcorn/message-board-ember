import Ember from 'ember';

export default Ember.Component.extend({
   favoriteQuestion: Ember.inject.service(),

   answerToQuestion: Ember.computed(function() {
    var answers_per_question = this.get('question.answers.length');
    return answers_per_question;
}),


actions: {
  update(question, params) {
    this.sendAction('update', question, params);
    },
    markFavQuestion(question) {
      this.get('favoriteQuestion').add(question);
      this.transitionTo('index');
    },
  }
});
