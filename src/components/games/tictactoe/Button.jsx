export default function Button({ name = "btn", click }) {
  return (
    <button
      className="transition rounded-md bg-emerald-500 text-center p-2 cursor-pointer "
      onClick={click}
    >
      {name}
    </button>
  );
}
