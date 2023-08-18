export default function StartButton() {
  return (
    <button
      className="
        mt-6
        rounded-[10em]
        border-2
        border-white/40
        bg-transparent
        px-[calc(var(--index)*2.2)]
        py-[calc(var(--index)*.5)]
        font-sans
        text-[calc(var(--index)*.8)]
        font-semibold
        uppercase
        text-white
        outline-none
        transition
        hover:border-transparent
        hover:bg-white/40
      "
    >
      Start
    </button>
  );
}
