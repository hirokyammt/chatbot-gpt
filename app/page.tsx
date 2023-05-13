'use client';

import React from 'react';

export default function Page() {
  // States
  const [value, setValue] = React.useState<string>("")
  const [messages, setMessages] = React.useState<string[]>([])

  const handleInput = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
    },
    []
  );

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setMessages([...messages, value]);
      setValue('');
      // const chatHistory = [...messages, { role: "user", content: value }]
      // const response = await fetch("/api/openAIChat", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ messages: chatHistory }),
      // })
      // const data = await response.json()
      // setMessages([...messages, data.result.choices[0].message.content])
    }
  };

  return (
    <div className="space-y-8">
      <h1 className="text-xl font-medium text-gray-300">Please type your prompt</h1>

      <div className="space-y-10 text-white">
        <input 
          className='w-full rounded p-2 border-white'
          placeholder='Type here'
          value={value}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
        />

      </div>
      <div className='textarea'>
        {messages.map((message, index) => (
          <div key={index} className='mb-2'>
            {message}
          </div>
        ))}
      </div>
    </div>
  );
}
