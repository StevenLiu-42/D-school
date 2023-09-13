import axios from "axios";
import { useCookies } from "react-cookie";

const usePostSkills = () => {
  const [, setCookie] = useCookies(["studentId"]);
  return async (studentId, skills) => {
    try {
      await axios.post(`https://api.projectszero.tech/skills/${studentId}`, {
        "UIUX": skills["UIUX"],
        "backend": skills["backend"],
        "business analysis": skills["business analysis"],
        "design thinking": skills["design thinking"],
        "frontend": skills["frontend"]
      });
      setCookie("studentId", studentId);
      alert("送出成功");
    } catch (error) {
      alert(error);
    }
  };
};

export default usePostSkills;
