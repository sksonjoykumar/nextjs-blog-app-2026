export default function Loading() {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <div className="flex h-20 w-20 animate-spin items-center justify-center rounded-full border-8 border-indigo-400 border-t-indigo-600 text-4xl text-indigo-400"></div>
        </div>
      </div>
    </>
  );
}
