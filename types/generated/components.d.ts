import type { Schema, Attribute } from '@strapi/strapi';

export interface DataQuiz extends Schema.Component {
  collectionName: 'components_data_quizzes';
  info: {
    displayName: 'Quiz';
    description: '';
  };
  attributes: {
    question: Attribute.String & Attribute.Required;
    answer: Attribute.Component<'data.list', true>;
  };
}

export interface DataList extends Schema.Component {
  collectionName: 'components_data_lists';
  info: {
    displayName: 'List';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    value: Attribute.Integer & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'data.quiz': DataQuiz;
      'data.list': DataList;
    }
  }
}
