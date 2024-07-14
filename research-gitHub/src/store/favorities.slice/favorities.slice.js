import { createSlice } from "@reduxjs/toolkit";

const favorites = createSlice({
    id: 1,
    name: 'favorites',
    initialState: [],
    reducers: {
        toggleAddFavorite: (state, {payload: favorites}) => {
            const isExists = state.some(b => b.id === favorites.id)

            if(isExists){
                const index = state.findIndex(b => b.id === favorites.id);

                if(index !== -1){
                    state.splice(index, 1);
                }

            }
            else{
                state.push(favorites)
            }
        }
        
    }
})
export const {actions, reducer} = favorites