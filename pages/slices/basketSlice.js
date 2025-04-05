import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            // Debug add
            console.log('[ADD] Current items:', JSON.parse(JSON.stringify(current(state.items))));
            console.log('[ADD] Adding item:', action.payload);
            state.items.push(action.payload);
        },
        removeFromBasket: {
            reducer: (state, action) => {
                // Debug before removal
                console.log('[REMOVE PRE] Full state:', JSON.parse(JSON.stringify(current(state))));
                console.log('[REMOVE PRE] Items:', JSON.parse(JSON.stringify(current(state.items))));
                console.log('[REMOVE PRE] Removing ID:', action.payload);
                
                // Force string conversion for reliable comparison
                const idToRemove = String(action.payload);
                
                // Create new array reference
                state.items = state.items.filter(item => {
                    const match = String(item.id) === idToRemove;
                    console.log(`Checking item ${item.id} (${typeof item.id}): ${match ? 'REMOVING' : 'KEEPING'}`);
                    return !match;
                });
                
                // Debug after removal
                console.log('[REMOVE POST] Remaining items:', JSON.parse(JSON.stringify(current(state.items))));
            },
            prepare: (id) => {
                // Ensure payload is consistently formatted
                return { payload: String(id) };
            }
        },
    },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Enhanced selector with deep logging
export const selectItems = state => {
    const items = state.basket.items;
    console.log('[SELECTOR] Current items:', JSON.parse(JSON.stringify(items)));
    return items;
};

export default basketSlice.reducer;