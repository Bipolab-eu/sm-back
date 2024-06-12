import type { Schema, Attribute } from '@strapi/strapi';

export interface DataAnswer extends Schema.Component {
  collectionName: 'components_data_answers';
  info: {
    displayName: 'Answer';
  };
  attributes: {
    answer: Attribute.String & Attribute.Required;
    value: Attribute.Integer & Attribute.Required;
  };
}

export interface DataQuestion extends Schema.Component {
  collectionName: 'components_data_questions';
  info: {
    displayName: 'Question';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    kind: Attribute.Enumeration<['zeroToTen', 'yesOrNo', 'checklist']> &
      Attribute.Required;
    answer: Attribute.Component<'data.answer', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'data.answer': DataAnswer;
      'data.question': DataQuestion;
    }
  }
}
