import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    saveQuestion() {
      var params = {
        question: this.get('question-input'),
        questionAuthor: this.get('question-author'),
        additionalInfo: this.get('additional-info'),
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion1', params);
    }
  }
});
