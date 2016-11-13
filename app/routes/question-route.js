import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('question', params.question_id);
  },

  actions: {
    update(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key,params[key]);
        }
    });
    question.save();
    this.transitionTo('index');
  },

    destroyQuestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
    },

    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question-route', question);
    },

    destroyAnswer(answer) {
      answer.destroyRecord();
      this.transitionTo('question-route');
    },
    upvote(answer) {
      var vote = answer.get('upvote');
      vote += 1;
      answer.set('upvote', vote);
      answer.save();
      this.transitionTo('question-route');
    },
    downvote(answer) {
      var vote = answer.get('upvote');
      vote -= 1;
      answer.set('upvote', vote);
      answer.save();

    },
    wipeVote(answer){
      var vote = answer.get('upvote');
      vote = 0;
      answer.set('upvote', vote);
      answer.save();
      this.transitionTo('question-route');
    }

    }
  });
