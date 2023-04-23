import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};    //  title이 app 컴포넌트안에 있고, app이 themeprovider안에 있어서 textColor를 불러올 수 있음
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor}; //  title이 app 컴포넌트안에 있고, app이 themeprovider안에 있어서 backgroundColor 불러올 수 있음
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello</Title>
    </Wrapper>
  );
}

export default App;

