import WordCount from '@/components/WordCount'

export const PostHeader = props => {
  const { post } = props

  return (
    <section className='flex flex-col mt-16'>
      <h1 className='text-3xl sm:text-4xl font-bold text-gray-800'>{post?.title}</h1>
      {post?.type !== 'Page' ? (
        <div className='mt-6 mb-8 text-gray-300 flex flex-row'>
          <span className='mr-3 text-gray-300 text-sm sm:text-base font-normal flex justify-center items-center'>
            {post?.date?.start_date || post?.createdTime}
          </span>
          <WordCount/>
        </div>
      ) : (
        <div className='my-6'></div>
      )}
    </section>
  )
}
