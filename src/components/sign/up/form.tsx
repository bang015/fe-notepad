"use client";
import { Paper } from "@mui/material";

const Sign_up_form: React.FC = () => {
  function handleSignup() {}
  return (
    <div>
      <Paper>
        <form onSubmit={handleSignup}>
          <div>
            <input type="email" placeholder="이메일을 입력해주세요." />
          </div>
          <div>
            <input type="password" placeholder="비밀번호를 입력해주세요." />
          </div>
          <div>
            <input type="text" placeholder="이름을 입력해주세요" />
          </div>
          <div>
            <button type="submit">회원가입</button>
          </div>
        </form>
      </Paper>
    </div>
  );
};

export default Sign_up_form;