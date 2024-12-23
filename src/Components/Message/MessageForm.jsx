// import { useRef } from "react";

// function MessageForm({ addOptimisticMessage, sendMessage }) {
//   const formRef = useRef();

//   async function FormAction(formData) {
//     addOptimisticMessage(formData.get("Message"));
//     formRef.current.reset();


//     await sendMessage(formData);
//   }
//   return (
//     <form
//       action={FormAction}
//       ref={formRef}
//       className="flex flex-col gap-5 max-w-xl p-8 mx-auto my-8 bg-slate-800 rounded-md"
//     >
//       <input
//         name="Message"
//         type="text"
//         placeholder="Message"
//         className="p-2 bg-slate-600 outline-none rounded-md"
//         id="Message"
//       />
//       <button className="p-2 bg-slate-900 text-slate-100 rounded-md">
//         Send
//       </button>
//     </form>
//   );
// }

// export default MessageForm;


import { useRef } from "react";

function MessageForm({ addOptimisticMessage, sendMessage }) {
  const formRef = useRef();

  async function FormAction(event) {
    event.preventDefault(); // جلوگیری از ارسال پیش‌فرض فرم

    const formData = new FormData(formRef.current);
    const message = formData.get("Message"); // دریافت مقدار پیام

    addOptimisticMessage(message);
    await sendMessage({ message }); // ارسال پیام به MessageCard

    formRef.current.reset(); // ریست کردن فرم
  }

  return (
    <form
      onSubmit={FormAction}
      ref={formRef}
      className="flex flex-col gap-5 max-w-xl p-8 mx-auto my-8 bg-slate-800 rounded-md"
    >
      <input
        name="Message"
        type="text"
        placeholder="Message"
        className="p-2 bg-slate-600 outline-none rounded-md"
        id="Message"
      />
      <button className="p-2 bg-slate-900 text-slate-100 rounded-md">
        Send
      </button>
    </form>
  );
}

export default MessageForm;
