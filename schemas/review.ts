import { defineField } from 'sanity';

interface FieldOptions {
  to?: { type: string }[];
}

type ValidationFunction = (Rule: any) => any; // Adjust the type according to your validation rule

const defineFieldWithType = (
  name: string,
  title: string,
  type: string,
  options: FieldOptions = {},
  validation: ValidationFunction
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
