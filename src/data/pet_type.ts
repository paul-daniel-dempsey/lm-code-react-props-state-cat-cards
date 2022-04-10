export const PETS = ['CAT', 'DOG'] as const;
export type PetType = typeof PETS[number];