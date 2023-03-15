import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TArticleFormContent } from './modalSpec';

type TModal = {
  isOpen: boolean;
  modalComponent: null;
  content: string;
  entityId: string;
  articleFormContent: TArticleFormContent | null;
};

const initialState: TModal = {
  isOpen: false,
  modalComponent: null,
  content: '',
  entityId: '',
  articleFormContent: null,
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
     openEditArticalModal: (state, action: PayloadAction<any>) => {
       return {
         ...state,
         isOpen: true,
         modalComponent: action.payload.modalComponent,
         articleFormContent: action.payload.content,
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

 export const { closeModal, openModal, openModalWithContent, openEditArticalModal } =
   modalSlice.actions;

 export default modalSlice.reducer;