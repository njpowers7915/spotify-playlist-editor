import React from 'react'

const SearchSongForm = ({onSubmit}) =>
  let input
  return (
    <div>
      <form onSubmit={e => { onSubmit(input.value) }}>
        <input ref={node => {input = node}} />
        <button type="submit">Search</button>
      </form>
    </div>
  )

export default SearchSongForm
