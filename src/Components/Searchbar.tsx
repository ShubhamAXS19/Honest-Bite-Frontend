import React, { useState, useEffect } from "react";
import { IoSearchSharp } from "react-icons/io5";
import styled from "styled-components";

const SearchContainer = styled.div`
  position: relative;
  margin: 0.5rem;
`;

const SearchInput = styled.input`
  padding-left: 2.5rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  width: 100%;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border: 1px solid #e2e8f0;
  &:focus {
    outline: none;
    --tw-ring-color: rgba(59, 130, 246, 0.5);
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0
      var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0
      calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
      var(--tw-shadow, 0 0 #0000);
    border-color: #3b82f6;
  }
`;

const SearchIcon = styled(IoSearchSharp)`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #6b7280;
`;

const PlaceholderContainer = styled.div`
  position: absolute;
  left: 2.5rem;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
  pointer-events: none;
  overflow: hidden;
  height: 1.5em;
`;

const PlaceholderText = styled.div`
  transition: transform 0.3s ease;
  transform: translateY(${(props) => props.offset}%);
`;

const Searchbar = () => {
  const foodSuggestions = [
    "pizza",
    "burger",
    "sushi",
    "pasta",
    "tacos",
    "salad",
    "steak",
    "ice cream",
  ];

  const [currentSuggestion, setCurrentSuggestion] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset(-100);
      setTimeout(() => {
        setCurrentSuggestion((prev) => (prev + 1) % foodSuggestions.length);
        setOffset(0);
      }, 300); // This should match the transition duration
    }, 3000); // Change suggestion every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <SearchContainer>
      <SearchIcon size={20} />
      <SearchInput
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder=" "
      />
      {!inputValue && (
        <PlaceholderContainer>
          <PlaceholderText offset={offset}>
            Search {foodSuggestions[currentSuggestion]}
          </PlaceholderText>
        </PlaceholderContainer>
      )}
    </SearchContainer>
  );
};

export default Searchbar;
