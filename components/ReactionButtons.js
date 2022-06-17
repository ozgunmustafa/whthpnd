



import React from 'react'
import { useDispatch } from 'react-redux'
import { reactionAdded } from '../src/features/categories/categorySlice';


const reactionEmoji = {
  thumbsUp: '👍',
  wow: '😮',
  heart: '❤️',
  rocket: '🚀',
  coffee: '☕',
}


const ReactionButtons = ({ category }) => {
  const dispatch = useDispatch();

  console.log('ReactionButtons post', category);


  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return(
      <button
        key={name}
        type='button'
        className='reaction-button'
        onClick={() => dispatch(reactionAdded({categoryId: category.id, reaction: name}))}
      >
        { emoji } {category.reactions[name]}
      </button>
    )
  })

  return (
    <div>{reactionButtons}</div>
  )
}

export default ReactionButtons