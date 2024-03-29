import { defineField } from 'sanity';

const defineFieldWithType = (name, title, type, options = {}, validation) =>
  defineField({
    name,
    title,
    type,
    validation,
    ...options, // Moving options after validation
  });

const review = {
  name: 'review',
  title: 'Review',
  type: 'document',
  fields: [
    defineFieldWithType(
      'user',
      'User',
      'reference',
      { to: [{ type: 'user' }] },
      Rule => Rule.required()
    ),
    defineFieldWithType(
      'hotelRoom',
      'Hotel Room',
      'reference',
      { to: [{ type: 'hotelRoom' }] },
      Rule => Rule.required()
    ),
    defineFieldWithType('text', 'Review Text', 'text', {}, Rule => Rule.required()),
    defineFieldWithType(
      'userRating',
      'User Rating',
      'number',
      {},
      Rule =>
        Rule.required().min(1).max(5).error('Rating must be between 1 and 5')
    ),
  ],
};

export default review;
