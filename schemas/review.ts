import { defineField } from 'sanity';

const defineReferenceField = (name, title, to, validation) =>
  defineField({
    name,
    title,
    type: 'reference',
    to,
    validation,
  });

const defineTextField = (name, title, validation) =>
  defineField({
    name,
    title,
    type: 'text',
    validation,
  });

const defineNumberField = (name, title, validation) =>
  defineField({
    name,
    title,
    type: 'number',
    validation,
  });

const review = {
  name: 'review',
  title: 'Review',
  type: 'document',
  fields: [
    defineReferenceField(
      'user',
      'User',
      [{ type: 'user' }],
      Rule => Rule.required()
    ),
    defineReferenceField(
      'hotelRoom',
      'Hotel Room',
      [{ type: 'hotelRoom' }],
      Rule => Rule.required()
    ),
    defineTextField('text', 'Review Text', Rule => Rule.required()),
    defineNumberField('userRating', 'User Rating', Rule =>
      Rule.required().min(1).max(5).error('Rating must be between 1 and 5')
    ),
  ],
};

export default review;
