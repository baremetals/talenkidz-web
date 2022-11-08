import { Field } from "formik";
import styled from "styled-components";

export const RadioFormInput = styled(Field)`
    width: 18px;
    height: 18px;
    padding: 0;
    margin: 5px;
    &:checked {
        border-width: 4px;
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
