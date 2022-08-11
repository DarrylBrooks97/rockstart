import Counter from '~/components/Counter';

export default function Home() {
  return (
    <main className="bg-black h-screen w-screen p-3">
      <div className="p-3 flex flex-col justify-center items-center h-full w-full">
        <h1 className="text-white text-5xl p-3">Testing SolidJS !</h1>
        <Counter />
        <p>
          Visit{' '}
          <a href="https://solidjs.com" target="_blank">
            solidjs.com
          </a>{' '}
          to learn how to build Solid apps.
        </p>
      </div>
    </main>
  );
}
