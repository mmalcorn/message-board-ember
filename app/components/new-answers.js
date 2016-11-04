import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    saveAnswer(params) {
      var params = {
        answer: this.get('answer-input'),
        answerAuthor: this.get('answer-author')
      };
    }
  }
});
