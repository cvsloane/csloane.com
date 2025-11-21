"use client";

export function SubstackSubscribe() {
  return (
    <div className="flex justify-center w-full my-8">
      <iframe
        src="https://cvsloane.substack.com/embed"
        width="480"
        height="320"
        style={{ border: "1px solid #EEE", background: "white" }}
        frameBorder="0"
        scrolling="no"
        className="max-w-full rounded-lg shadow-sm"
      />
    </div>
  );
}
