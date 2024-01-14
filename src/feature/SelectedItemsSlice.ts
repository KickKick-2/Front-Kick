import { createSlice } from '@reduxjs/toolkit';
import produce from 'immer'; // immer 라이브러리 import
import { cardData } from '@/lib/interface';

export interface SelectedItemsState {
  house: cardData[];
  food: cardData[];
  attraction: cardData[];
}
export interface SelectedItemCheck {
  itemList: SelectedItemsState;
}

const initialState: SelectedItemsState = {
  house: [],
  food: [],
  attraction: [],
};

const SelectedItemsSlice = createSlice({
  name: 'selecteditem',
  initialState,
  reducers: {
    SelectedHouseItem: (state, action) => {
      const place = action.payload;
      const hasDuplicate = state.house.some(
        (item) => item.title === place.name,
      );

      if (!hasDuplicate) {
        return produce(state, (draft) => {
          draft.house.push(place);
        });
      }
      return state;
    },
    SelectedFoodItem: (state, action) => {
      const place = action.payload;
      const hasDuplicate = state.food.some(
        (item) => item.title === place.title,
      );

      if (!hasDuplicate) {
        return produce(state, (draft) => {
          draft.food.push(place);
        });
      }
    },
    SelectedAttractionItem: (state, action) => {
      const place = action.payload;
      const hasDuplicate = state.attraction.some(
        (item) => item.title === place.title,
      );

      if (!hasDuplicate) {
        return produce(state, (draft) => {
          draft.attraction.push(place);
        });
      }
    },
    removeSelectedItem: (state, action) => {
      const { category, itemToRemove } = action.payload;

      return produce(state, (draft) => {
        if (category === 'house') {
          draft.house = draft.house.filter(
            (item) => item.title !== itemToRemove.title,
          );
        } else if (category === 'food') {
          draft.food = draft.food.filter(
            (item) => item.title !== itemToRemove.title,
          );
        } else if (category === 'attraction') {
          draft.attraction = draft.attraction.filter(
            (item) => item.title !== itemToRemove.title,
          );
        }
      });
    },
    removeAll: (state) => {
      return produce(state, (draft) => {
        draft.house = [];
        draft.food = [];
        draft.attraction = [];
      });
    },
  },
});
export default SelectedItemsSlice.reducer;
export const {
  SelectedHouseItem,
  SelectedFoodItem,
  SelectedAttractionItem,
  removeSelectedItem,
  removeAll,
} = SelectedItemsSlice.actions;
