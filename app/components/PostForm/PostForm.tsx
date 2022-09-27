import type { Props } from "./types";

function PostForm({error, fields, method="post", ...props}: Props) {
  // if (error) console.log(error);
  return (
    <form className="flex flex-col gap-4" method={method} {...props}>
      <div className="flex flex-col">
        <label htmlFor="title" className="mb-2 text-gray-600">
          Title
        </label>
        <input defaultValue={fields?.title} name="title" className="p-4" placeholder="Title of your post" />
        {error?.fieldErrors?.title && <p className="text-red-500">{error.fieldErrors.title}</p>}
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="body" className="mb-2 text-gray-600">
          Body
        </label>
        <textarea 
          defaultValue={fields?.body} 
          name="body" 
          className="p-4" 
          placeholder="Write something amazing" 
        />
        {error?.fieldErrors?.body && <p className="text-red-500">{error.fieldErrors.body}</p>}
      </div>
        {error?.formErrors && <p className="text-red-500">{error.formErrors}</p>}
      <button 
        type="submit" 
        className="transition rounded text-blue-700 font-bold py-4 px-6 transparent hover:bg-gray-100"
      >
        Create Post
      </button>
    </form>
  )
};

export default PostForm;