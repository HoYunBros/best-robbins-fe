export type Flavor = {
  id: number;
  flavorName: string;
  imageUrl: string;
};

export type Recipe = {
  id: number;
  recipeName: string;
  flavors: Flavor[];
};

export type Cover = {
  id: number;
  title: string;
  subTitle: string;
  imageUrl: string;
};

export type Recommendation = {
  cover: Cover;
  recipe: Recipe;
};

export type Size = {
  id: number;
  name: string;
  imageUrl: string;
  value: number;
};

export type UserSelect = {
  sizeId: number;
  ingredientIds: number[];
};
