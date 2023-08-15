import {ChangeEvent, FormEvent, useState} from 'react'

interface SearchBarProps {
  onSearch: (query :string) => void;
}

const SearchBar = ({ onSearch } :SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleChange = (e :ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }

  const handleSubmit = (e :FormEvent) => {
    e.preventDefault();
    onSearch(query);
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-screen  max-w-3xl">
      <input
        className="text-black border border-gray-300 rounded-l py-2 px-4 w-full focus:outline-none focus:border-blue-400"
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="What movie you are looking for?"
      />
      <button
        type='submit'
        className="m-0 border border-white border-l-0 bg-blue-500 text-white rounded-r py-2 px-6 hover:bg-blue-600 focus:outline-none focus:border-white"
      >Search</button>
    </form>
  )
}

export default SearchBar
