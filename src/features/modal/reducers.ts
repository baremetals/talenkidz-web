import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TModal = {
  isOpen: boolean;
  modalComponent: null;
};

const initialState: TModal = {
  isOpen: false,
  modalComponent: null,
};

 const modalSlice = createSlice({
   name: 'modal',
   initialState,
   reducers: {
     openModal: (state, action: PayloadAction<any>) => {
       return {
         ...state,
         isOpen: true,
         modalComponent: action.payload,
       };
     },
     closeModal: (state) => {
       return {
         ...state,
         ...initialState,
       };
     },
   },
 });

 export const { closeModal, openModal } = modalSlice.actions;

 export default modalSlice.reducer;