interface Props {
  title: string;
}

const MyButton = ({ title }: Props) => {
  return (
    <div className="">
      <button>{title}</button>
    </div>
  );
};

export default MyButton;
