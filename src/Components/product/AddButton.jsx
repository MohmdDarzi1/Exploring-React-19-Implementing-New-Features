import { useFormStatus } from "react-dom"

function AddButton() {
   const  {pending} = useFormStatus()
  return (
    <button className="p-2 bg-slate-900 text-slate-100 rounded-md">
 {pending ? "adding..." : "Add product" }
  </button>
  )
}

export default AddButton