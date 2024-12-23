
import AddButton from "./AddButton";

function ProductForm({ onAdd }) {

  async function FormAction(formData) {
    await new Promise((res)=> setTimeout(res,3000))
    const newProduct = {
      title: formData.get("title"),
      price: formData.get("price"),
    };
    onAdd(newProduct);
  }

  return (
    <form
      action={FormAction}
      className="flex flex-col gap-5 max-w-xl p-8 mx-auto my-8 bg-slate-800 rounded-md"
    >
      <input
        name="title"
        type="text"
        placeholder="Title"
        className="p-2 bg-slate-600 outline-none rounded-md"
        id="title"
      />
      <input
        name="price"
        type="text"
        placeholder="Price"
        className="p-2 bg-slate-600 outline-none rounded-md"
        id="price"
      />

     <AddButton/>
      
    </form>
  );
}

export default ProductForm;
