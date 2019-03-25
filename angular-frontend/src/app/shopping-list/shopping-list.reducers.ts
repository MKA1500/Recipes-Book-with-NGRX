import { Action } from '@ngrx/store';
import { Ingredient } from '../shared/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

const initialState = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Herbes de Provence', 1),
    new Ingredient('Onion', 2)
  ]
};

export function shoppingListReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ADD_INGREDIENT:
    return {
      ...state,
      ingredients: [...state.ingredients, action]
    }
  }
  return state;
}
