import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${props => props.bgColor};
  border-radius: 50%;
`;

interface CircleProps {   // interface는 object가 어떤식으로 보일지를 설명
  bgColor: string;
}

function Circle({bgColor}: CircleProps) {   //bgColor의 타입은 Circleprops의 object이다 1.App.js에 보냄, 2.return Container 컴포넌트에 보냄
  return <Container bgColor={bgColor} />;
}

export default Circle; 

// PropTypes => 코드 실행 후 에러 확인
// Interface => TypeScript 코드가 실행되기 전 확인