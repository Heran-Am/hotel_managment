import { defineField, FieldOptions } from 'sanity';

type ValidationFunction = (Rule: any) => any; // Adjust the type according to your validation rule

const defineFieldWithType = (
  name: string,
  title: string,
  type: string,
  validation: ValidationFunction,
  options: FieldOptions = {}
) =>
  defineField({
    name,
    title,
    type,
    validation,
    ...options,
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
      Rule => Rule.required(),
      { to: [{ type: 'user' }] }
    ),
    defineFieldWithType(
      'hotelRoom',
      'Hotel Room',
      'reference',
      Rule => Rule.required(),
      { to: [{ type: 'hotelRoom' }] }
    ),
    defineFieldWithType('text', 'Review Text', 'text', Rule => Rule.required()),
    defineFieldWithType(
      'userRating',
      'User Rating',
      'number',
      Rule =>
        Rule.required().min(1).max(5).error('Rating must be between 1 and 5')
    ),
  ],
};

export default review;
