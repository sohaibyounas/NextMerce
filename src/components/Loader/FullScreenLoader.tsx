"use client";

export default function FullScreenLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-black dark:border-t-white" />
    </div>
  );
}
