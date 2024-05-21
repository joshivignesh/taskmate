import React from 'react'

const AddTask = () => {
  return (
    <section className="addTask">
      <form >
        <input type="text" name="task"  autoComplete="off" maxLength="25"  placeholder="add task" />
        <button type="submit">Add</button>
      </form>
    </section>
  )
}

export default AddTask
