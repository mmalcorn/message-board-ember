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
    },
    delete(answer) {
      if(confirm('Are you sure you want to delete this answer?')) {
      this.sendAction('destroyAnswer', answer);
      }
    }
  }
});
