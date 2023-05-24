const createInput = (type, className, placeholder) => {
  const input = document.createElement('input');
  input.type = type;
  input.classList.add(className);
  input.placeholder = placeholder;
  return input;
};

export default createInput;