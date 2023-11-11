import styled from "@emotion/styled";

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 50px;
  font-weight: 500;
  font-size: 24px;
`;
export const CarName = styled.p``;

export const CarUl = styled.ul`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CarLi = styled.li`
  padding: 10px;
  display: flex;
  align-items: center;
  background-color: #f7f7fb;
  border: 2px solid black;
  border-radius: 24px;
`;
export const CarBtnDel = styled.button`
  display: flex;
  width: 274px;
  height: 44px;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  background: #3470ff;
  margin-left: auto;
`;

export const CarImage = styled.img`
  width: 100px;
  height: 60px;
  border-radius: 15px;
  margin-left: 10px;
`;
