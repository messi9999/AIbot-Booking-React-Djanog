import axios from "axios";

export async function AskTOOpenAI(prom) {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_OPENAI_KEY}`
    }
  };
  const reqestBody = {
    model: "text-davinci-003",
    prompt: prom,
    max_tokens: 500,
    temperature: 0.1,
    n: 1
  };
  var answer;
  var iserror;
  const response = await axios
    .post("https://api.openai.com/v1/completions", reqestBody, config)
    .catch((error) => {
      iserror = true;
    });
  if (iserror) {
    answer = "OpenAI failed!";
  } else {
    const data = await response;
    answer = data.data.choices[0].text;
  }
  return answer;
}

// eslint-disable-next-line import/no-anonymous-default-export
// export default { AskTOOpenAI };
