import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TModal = {
  isOpen: boolean;
  modalComponent: null;
  content: string;
  entityId: string;
};

const initialState: TModal = {
  isOpen: false,
  modalComponent: null,
  content: '',
  entityId: ''

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
     openModalWithContent: (state, action: PayloadAction<any>) => {
       return {
         ...state,
         isOpen: true,
         modalComponent: action.payload.modalComponent,
         content: action.payload.content,
         entityId: action.payload.entityId,
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

 export const { closeModal, openModal, openModalWithContent } = modalSlice.actions;

 export default modalSlice.reducer;