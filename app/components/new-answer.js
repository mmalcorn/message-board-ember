import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    saveAnswer() {
      var params = {
        answer: this.get('userAnswer'),
        answerAuthor: this.get('userAnswerAuthor'),
        question: this.get('question')
      };
      this.sendAction('saveAnswer', params);
    }
  }
});
