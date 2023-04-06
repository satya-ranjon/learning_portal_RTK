import { useEffect, useState } from "react";
import InputCheck from "../checkbox";
import Input from "../Input";
import { DeleteIcon } from "../../../constant/icon";

/**
 * @param {Number} limit // Limit of Option
 * @param {function} optionsFun  // Provide function ,then this function return option value
 * @param {function} initialData  initialData Options data If any previous information will be added
 * @returns JSX & option value JSON
 */

const copyAddOption = ({
  limit,
  optionsFun = () => {},
  clearOption = false,
  initialData = [],
}) => {
  const [addOption, setAddOption] = useState(0);
  const [initialInputValue, setInitialInputValue] = useState([]);
  const [inputValue, setInputValue] = useState([]);

  /// load initialData  previous information
  useEffect(() => {
    setAddOption(initialData?.length || 0);
    setInitialInputValue(initialData || []);
  }, []);

  // Clear value
  useEffect(() => {
    if (clearOption) {
      setAddOption(0);
      setInputValue([]);
      setInitialInputValue([]);
      console.log("clearOption");
    }
  }, [clearOption]);

  // send data
  useEffect(() => {
    if (!(inputValue?.length === 0)) {
      optionsFun(inputValue);
    } else {
      optionsFun(initialInputValue);
    }
  }, [inputValue, initialInputValue]);

  // Handle Options
  const incrementAddOption = () => {
    setAddOption((prv) => prv + 1);
    const id = Math.random().toString(36).substring(2, 9);
    setInitialInputValue([
      ...initialInputValue,
      { id: id, option: "", isCorrect: false },
    ]);
  };

  const handleChange = ({ value, id, name }) => {
    const indexNum = initialInputValue.findIndex((item) => item.id === id);
    let oldData = initialInputValue[indexNum];
    if (name == "option") {
      oldData.option = value;
    } else {
      oldData.isCorrect = value;
    }
    const updateData = (initialInputValue[indexNum] = oldData);
    const notUpdate = initialInputValue?.filter((item) => item.id !== id);

    setInputValue([...notUpdate, updateData]);
  };

  // Delete option handle
  const deleteOption = (id) => {
    setAddOption((prv) => prv - 1);
    const updateDate1 = inputValue.filter((item) => item.id != id);
    const updateDate2 = initialInputValue.filter((item) => item.id != id);
    setInputValue(updateDate1);
    setInitialInputValue(updateDate2);
  };

  // what render decided

  const Options = () => {
    return initialInputValue?.map((item) => {
      return (
        <div key={item.id} className="flex gap-4  mt-4">
          <Input
            value={item.option}
            name="option"
            style={{ width: "85%" }}
            onChange={(e) =>
              handleChange({
                value: e.target.value,
                name: e.target.name,
                id: item.id,
              })
            }
          />
          <InputCheck
            cls="py-1"
            label="True"
            name="isCorrect"
            id={item.id}
            checked={item.isCorrect}
            onChange={(e) =>
              handleChange({
                value: e.target.checked,
                name: e.target.name,
                id: item.id,
              })
            }
          />

          <DeleteIcon type="button" onClick={() => deleteOption(item.id)} />
        </div>
      );
    });
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

export default copyAddOption;
