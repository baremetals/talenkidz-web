import styled from 'styled-components';

import { MdExpandMore, MdDeleteForever, MdEdit } from 'react-icons/md';

const Dropdown = ({ showDropdown, slug, id, children, ...props }: any) => {
  return (
    <>
      {showDropdown && (
        <CardContainer showDropdown={showDropdown} {...props}>
          <DropdownCard>{children}</DropdownCard>
        </CardContainer>
      )}
    </>
  );
};

export default Dropdown;

export const CommentCard = styled.div`
  padding: 1.875rem;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 0.625rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  @media (max-width: 991px) {
    padding: 1rem;
  }
`;

export const CommentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

export const CommentLeftWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const UserProfileImge = styled.img`
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 0.75rem;
  object-fit: cover;
  margin-right: 1rem;
  @media (max-width: 991px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const CommentText = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  flex: 1 0 0%;
  align-self: center;
  @media (max-width: 991px) {
    font-size: 0.75rem;
  }
`;

// export const CommentDate = styled.span`
//   font-size: 0.75rem;
//   color: #253ad8;
//   align-self: center;
//   padding-left: 0.5rem;
//   @media (max-width: 767px) {
//     min-width: 100%;
//     padding-left: 3.5rem;
//   }
// `;
export const CommentDate = styled.span`
  font-size: 0.75rem;
  color: #b5b5b5;
  display: block;
  font-weight: normal;
  @media (max-width: 991px) {
    font-size: 0.625rem;
  }
`;

export const PostDropdown = styled.div`
  position: relative;
  .DropDownIcon {
    cursor: pointer;
  }
`;

export const UserName = styled.span`
  font-size: 1rem;
  font-weight: 600;
  display: block;
  cursor: pointer;
  margin-bottom: 0.25rem;
  @media (max-width: 991px) {
    font-size: 0.875rem;
  }
`;
export const CommentTopRightWrap = styled.div``;

export const ExpandIcon = styled(MdExpandMore)`
  font-size: 1.25rem;
  cursor: pointer;
`;

export const CommentHorizontalRule = styled.hr`
  width: 100%;
  height: 1px;
  border-radius: 1rem;
  border: none;
  background-color: #d9d9d9;
  margin: 1.5rem auto;
`;

export const CardContainer = styled.div`
  display: flex;
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 10;
`;

export const DropdownCard = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  margin-top: 0px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  width: 6rem;
`;

export const ItemWrapper = styled.div`
  display: flex;
  padding: 0.375rem 0.5rem;
  width: 100%;
  border-bottom: 1px solid #e9e9e9;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: #e9e9e9;
    cursor: pointer;
  }
`;
export const ItemText = styled.span`
  font-size: 12px;
  margin-left: 5px;
`;
export const EditIcon = styled(MdEdit)`
  font-size: 15px;
`;
export const DeleteIcon = styled(MdDeleteForever)`
  font-size: 15px;
`;

export const LeaveComment = styled.div`
  position: relative;
  max-width: 90%;
  button {
    background: #39007e;
    border-radius: 0px 20px 20px 20px;
    position: absolute;
    top: 0;
    right: 0;
    width: 62px;
    height: 57px;
    padding: 0;
  }
`;

export const StyledInput = styled.textarea`
  background: #f1faff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  width: 100%;
  min-height: 57px;
  padding: 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 20px;
  }
  &::placeholder {
    color: #3c1a9899;
    font-weight: 100;
    font-size: 1rem;
  }
`;

export const StyledEditInput = styled.textarea`
  background: #f1faff;
  border-radius: 20px;
  min-height: 282px;
  max-width: 100%;
  width: 100%;
  padding: 0;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  padding: 20px 20px 20px 0;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 20px;
  }
  &::placeholder {
    color: #3c1a9899;
    font-weight: 100;
    font-size: 1rem;
  }
`;

export const EditCommentWrapper = styled.div`
  background: #f1faff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  position: relative;
  max-width: 90%;
  max-width: 967px;
  padding: 30px 60px 30px 40px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  button {
    background: #39007e;
    border-radius: 0px 20px 0px 20px;
    position: absolute;
    top: 0;
    right: 0;
    width: 62px;
    height: 57px;
    padding: 0;
  }
`;

export const EditCommentInner = styled.div`
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.13);
  background-color: #fff;
  border-radius: 0.625rem;
  padding: 2rem 1.875rem;
  /* margin-top: .2rem; */
`;

export const EditBlock = styled.div`
  display: flex;
  align-items: center;
  color: #39007e;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 17px;
  text-align: center;
  svg {
    margin-right: 9px;
    background: transparent;
    path {
      fill: #39007e;
    }
  }
`;

export const ButtonBlock = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  button {
    position: relative;
    border-radius: 20px 0px 0px 0;
    width: 74px;
    height: 74px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: flex;
    font-size: 8px;
    div {
      text-align: center;
    }
    svg {
      margin-bottom: 5px;
    }
  }
`;
export const ButtonBlockClose = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  button {
    position: relative;
    border-radius: 0 20px 0px 20px;
    width: 74px;
    height: 74px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: flex;
    font-size: 8px;
    div {
      text-align: center;
    }
    svg {
      margin-bottom: 5px;
    }
  }
`;

export const DeleteCommentWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  position: relative;
  max-width: 90%;
  max-width: 235px;
  min-height: 147px;
  padding: 20px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #0f021f;
  button {
    background: #39007e;
    border-radius: 10px;
    padding: 0 10px;
    min-width: 105px;
    height: 29px;
    margin-top: 10px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      margin-right: 4px;
      background: transparent;
      path {
        fill: #fff;
      }
    }
  }
`;
