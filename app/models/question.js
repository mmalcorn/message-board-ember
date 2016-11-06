import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.attr(),
  questionAuthor: DS.attr(),
  additionalInfo: DS.attr(),
  answers: DS.hasMany('answer', { async: true })
});
