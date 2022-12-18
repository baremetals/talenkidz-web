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