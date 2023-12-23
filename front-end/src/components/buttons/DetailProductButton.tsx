const DetailProductButton = ({ onclick }: { onclick: () => void }) => {
  return (
    <button
      onClick={onclick}
      className="bg-cyan-600 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded-lg w-full"
    >
      <span>Detail</span>
    </button>
  );
};

export default DetailProductButton;
