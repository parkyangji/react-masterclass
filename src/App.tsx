import { FormEvent, useState } from "react";


function App() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: {value}, 
    } = event;
    setValue(value); //type=text => string
  };
  // any는 타입스크립트의 타입, 무엇이든 될 수 있다 but 지양
  // 타입스크립트는 target > currentTarget
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(value);
  };
  // <HTMLInputElement> <HTMLFormElement> 어떤 녀석이 이 이벤트를 만들고 발생 시키겠는가
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
        value={value} 
        onChange={onChange} 
        type="text" 
        placeholder="username"/>
        <button>Log in</button>
      </form>
    </div>
  );
}

export default App;

