import { Tag } from './Tag'

/**
 * 文章详情的元信息
 * 标题、作者、分类、标签、创建日期等等。
 */
export const PostMeta = props => {
  const { post } = props

  return (
    <section className='flex flex-col mt-16 text-center'>
      <h1 className='text-3xl sm:text-4xl font-bold text-gray-800'>{post?.title}</h1>
      {post?.type !== 'Page' && (
        <div className='my-6 text-gray-300 flex flex-row justify-center'>
          <span className='text-gray-300 text-sm sm:text-base font-normal flex justify-center items-center'>
            {post?.date?.start_date || post?.createdTime}
          </span>

          <div className='ml-6 flex flex-row gap-2'>
            {post?.tags?.map(tag => (
              <Tag key={post.id + tag} name={tag}>{tag}</Tag>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
