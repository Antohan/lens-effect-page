import StartButton from './StartButton';

export default function Hero() {
  return (
    <div className="text-center leading-none">
      <h1 className="font-heading text-[calc(var(--index)*3.5)] uppercase tracking-[calc(var(--index)*-.15)]">
        Rain Forest
        <span className="block text-[calc(var(--index)*2)]">
          NextJS / Tailwindcss
        </span>
      </h1>
      <p className="font-body text-[calc(var(--index)*.7)] leading-loose">
        3D page with a ‘lens effect’
      </p>
      <StartButton />
    </div>
  );
}
