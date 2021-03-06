import DS from 'ember-data';

export default DS.Model.extend({
    answer: DS.attr(),
    answerAuthor: DS.attr(),
    upvote: DS.attr(),
    question: DS.belongsTo('question', { async: true })
});
