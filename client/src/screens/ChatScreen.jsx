import React, { useEffect, useRef, useState } from 'react'
import Header from '../components/Header'
import ChatAnswer from '../components/ChatAnswer';
import ChatQuestion from '../components/ChatQuestion';
import { LoadingButton } from '@mui/lab';
import SendIcon from '@mui/icons-material/Send';

import {AskTOOpenAI} from "../funcs/openai"


export default function ChatScreen() {

  const [loading, setLoading] = useState(false);

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [chats, setChats] = useState([]);

  const ref = useRef();
  const scrollToBottom1 = () => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom1();
  }, [chats]);


  const handleOnSend = async () => {
    setLoading(true);
    const chat_question = {
      isquestion: true,
      content: question
    };
    setQuestion("");
    setChats((chats) => [...chats, chat_question]);

    /*
    Axios here
    */
    AskTOOpenAI(chat_question.content).then(
      (res) => {
        setAnswer(res)
        const chat_answer = {
          isquestion: false,
          content: res
        };
        setChats((chats) => [...chats, chat_answer]);
        setLoading(false);
      }
    ).catch(
      (err) => {
        console.error(err)
      }
    )    
  }
  return (
    <>
        <div><Header /></div>
        <div className="bg-sky-300 h-screen p-20">
          <div className='bg-white w-11/12 h-5/6 rounded-xl p-10 overflow-y-auto scrollbar-hide'>
            {chats.map((chat, index) => {
                return (
                  <div key={index}>
                    {chat.isquestion ? (
                      <div>
                        <ChatQuestion content={chat.content} />
                      </div>
                    ) : (
                      <ChatAnswer content={chat.content} />
                    )}
                  </div>
                );
              })}
          </div>
          <div className='flex flex-row mt-5 w-11/12'>
            <div className='flex flex-row justify-start w-screen pe-4'> 
              <input className='w-full text-xl p-5 rounded-xl bg-slate-200 outline outline-slate-500' value = {question} placeholder="Ask some questions" onChange={e=>setQuestion(e.target.value)}></input>
            </div>
            <div className='flex justify-center align-items-center'>
              <LoadingButton
                  size="large"
                  onClick={handleOnSend}
                  endIcon={<SendIcon />}
                  loading={loading}
                  disabled={question === ""}
                  loadingPosition="end"
                  variant="contained"
                >
                  <span>Send</span>
                </LoadingButton>

            </div>
          </div>
        </div>
        <div ref={ref} />
    </>
  )
}
