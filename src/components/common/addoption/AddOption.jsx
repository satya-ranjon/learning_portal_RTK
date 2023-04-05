import { useEffect, useState } from "react";
import InputCheck from "../checkbox";

/**
 * @param {Number} limit // Limit of Option
 * @param {function} optionsFun  // Provide function ,then this function return option value
 * @returns JSX & option value JSON
 */

const AddOption = ({ limit, optionsFun = () => {}, clearOption = false }) => {
  const [addOption, setAddOption] = useState(0);
  const [inputValue, setInputValue] = useState([]);

  useEffect(() => {
    if (clearOption) {
      setAddOption(0);
      setInputValue([]);
    }
  }, [clearOption]);

  useEffect(() => {
    optionsFun(inputValue);
  }, [inputValue]);

  // Handle Options
  const incrementAddOption = () => {
    setAddOption((prv) => prv + 1);
    setInputValue([
      ...inputValue,
      { id: addOption, option: "", isCorrect: false },
    ]);
  };

  const handleChange = ({ value, id, name }) => {
    const indexNum = inputValue.findIndex((item) => item.id === id);
    let oldData = inputValue[indexNum];
    if (name == "option") {
      oldData.option = value;
    } else {
      oldData.isCorrect = value;
    }
    const updateData = (inputValue[indexNum] = oldData);
    const notUpdate = inputValue?.filter((item) => item.id !== id);

    setInputValue([...notUpdate, updateData]);
  };

  const deleteOption = (id) => {
    setAddOption((prv = prv - 1));
    const updateDate = inputValue.filter((item) => item.id !== i);
    setInputValue(updateDate);
  };

  // what render decided
  const Options = () => {
    return Array.from({ length: addOption }, (_, i) => (
      <div key={i} className="flex gap-4  mt-4">
        <input
          type="text "
          className="login-input"
          name="option"
          style={{ width: "88%" }}
          onChange={(e) =>
            handleChange({ value: e.target.value, name: e.target.name, id: i })
          }
        />
        <InputCheck
          cls="py-1"
          label="True"
          name="isCorrect"
          id={i}
          onChange={(e) =>
            handleChange({
              value: e.target.checked,
              name: e.target.name,
              id: i,
            })
          }
        />
      </div>
    ));
  };

  return (
    <div>
      {Options()}

      {addOption !== Number(limit) && (
        <div
          className="w-full flex justify-center py-2 px-4 text-sm font-medium rounded-md text-white bg-slate-900 cursor-pointer hover:bg-slate-600 mt-4"
          onClick={incrementAddOption}>
          Add Option
        </div>
      )}
    </div>
  );
};

export default AddOption;
