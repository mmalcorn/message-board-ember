import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('question-route', {path: '/question-route/:question_id'});
  this.route('favorite-questions-route');
});

export default Router;
