const handleInputChange = (
  inputValue: string | object,
  setInputValue: React.Dispatch<React.SetStateAction<object | string>>
) => {
  return (text: string, name?: string) => {
    if (typeof inputValue === "object") {
      const updatedInputValue = { ...inputValue };
      updatedInputValue[name] = text;
      setInputValue(updatedInputValue);
    } else {
      setInputValue(text);
    }
  };
};

export default handleInputChange;
