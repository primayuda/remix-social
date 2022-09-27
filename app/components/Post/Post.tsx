import type { Props } from './types';

function Post({header, children}: Props) {
  return (
    <div className='flex flex-col p-6 my-2 max-w-md border rounded'>
      {header && <h2 className='font-bold text-3xl text-gray-900'>{header}</h2>}
      <p className='text-xl text-gray-600 mt-4'>{children}</p>
    </div>
  )
}

export default Post;