import style from "./style.module.css";

const InputCheck = ({ cls, id, label, ...argument }) => {
  return (
    <div className={cls}>
      <div className={style.formGroup}>
        <input type="checkbox" id={id} {...argument} />
        <label htmlFor={id}>{label}</label>
      </div>
    </div>
  );
};

export default InputCheck;
