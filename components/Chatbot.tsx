import { useState } from 'react';
import styled from 'styled-components';
import { FaRobot } from 'react-icons/fa';
import React from 'react';

const ChatbotContainer = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
`;

const ChatbotButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  font-size: 32px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

const ChatWindow = styled.div`
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 300px;
  height: 400px;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ChatbotContainer>
      {isOpen && (
        <ChatWindow>
          {/* Hier könnte ein einfacher Chatbot mit statischen Antworten implementiert werden */}
          <p>Hallo! Wie kann ich dir helfen?</p>
          {/* Weitere Chatbot-Funktionalität */}
        </ChatWindow>
      )}
      <ChatbotButton onClick={toggleChatbot}>
        <FaRobot />
      </ChatbotButton>
    </ChatbotContainer>
  );
};

export default Chatbot;
