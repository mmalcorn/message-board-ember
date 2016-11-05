import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    saveAnswer() {
      var params = {
        answer: this.get('answer-input'),
        answerAuthor: this.get('answer-author')
      };
      this.sendAction('saveAnswer', params);
    }
  }
});
