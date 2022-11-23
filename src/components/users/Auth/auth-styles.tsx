import { Field } from "formik";
import styled from "styled-components";

export const RadioFormInput = styled(Field)`
    width: 15px;
    height: 15px;
    padding: 0;
    margin: 5px;
    &:checked {
        border-width: 2px;
        border-color: #E4DFDF;
        background-color: #BC70AD;
        padding: 3px;
        & + label {

        }
    } 
`;

export const RadioFormGroup = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;
