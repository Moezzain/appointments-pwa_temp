export default function Button({
  title,
  click,
}: {
  title: String;
  click: Function;
}) {
  return (
    <button
      onClick={() => click()}
      className='bg-white w-40 h-12 m-2 rounded-xl text-blue-700 font-semibold'
    >
      {title}
    </button>
  );
}
