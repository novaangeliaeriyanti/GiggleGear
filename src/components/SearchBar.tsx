import { Search } from "lucide-react"

const SearchBar = () => {
  return (
    <div className="hidden sm:flex items-center gap-2 rounded-lg ring-1 ring-gray-200 py-2 px-3 lg:py-3 lg:px-4">
        <Search className="w-4 h-4 text-gray-500" />
        <input id="search" placeholder="Search products..." className="text-sm outline-0"></input>
    </div>
  )
}

export default SearchBar