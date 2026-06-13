import { useEffect, useState } from "react";
import BookCard from "../components/ui/bookCard";

import { NavBar, navlinks } from "../components/ui/nav";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/ui/input";

const categories = [
  "JSS1",
  "JSS2",
  "JSS3",
  "SS1",
  "SS2",
  "SS3",

  "WAEC",
  "NECO",
  "JAMB",
  "NABTEB",
];

const defaultBooks = [
  {
    id: 1,
    title: "New General Mathematics",
    category: "JSS1",
    condition: "Used",
    description: "This is a very good used book and it will serve you well",
    contactName: "Ade Eze",
    contactNumber: 900000000,
    listingType: "donate",
    location: "Lagos",
    image: "/maths.jfif",
  },
  {
    id: 2,
    title: "Biology Textbook",
    category: "SS2",
    condition: "New",
    description: "This is a very good used book and it will serve you well",
    contactName: "Ade Eze",
    contactNumber: 900000000,
    listingType: "sell",
    price: "2500",
    location: "Yaba",
    image: "/biology.jfif",
  },
  {
    id: 3,
    title: "New General Mathematics",
    category: "SS1",
    condition: "Used",
    description: "This is a very good used book and it will serve you well",
    contactName: "Ade Eze",
    contactNumber: 900000000,
    listingType: "donate",
    location: "Lagos",
    image: "/maths.jfif",
  },
  {
    id: 4,
    title: "WAEC Past Questions",
    category: "WAEC",
    condition: "New",
    description: "This is a very good used book and it will serve you well",
    contactName: "Ade Eze",
    contactNumber: 900000000,
    listingType: "sell",
    price: "2000",
    location: "Yaba",
    image: "/waec.jpg",
  },
];

export const Products = () => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState(defaultBooks);

  const [listingType, setListingType] = useState("");

  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const filteredBooks = books.filter((book) => {
    return (
      book.title.toLowerCase().includes(search.toLowerCase()) &&
      (listingType === "" || book.listingType === listingType) &&
      (category === "" ||
        book.category.toLowerCase() === category.toLowerCase())
    );
  });

  useEffect(() => {
    const booksString = localStorage.getItem("books");

    const storedBooks = booksString ? JSON.parse(booksString) : [];

    setBooks([...defaultBooks, ...storedBooks]);
    // localStorage.setItem("books", JSON.stringify(books));

    navigate("/books");
  }, []);

  console.log(filteredBooks);

  return (
    <div className="bg-blue-100">
      <NavBar
        logoImg="/Edushare logo.png"
        logoText1="Edu"
        logoText2="Share"
        navlinks={navlinks}
      />

      <div className="pt-32 px-10   space-y-10   ">
        <h1 className="text-6xl  font-600 text-center text-[#CA9C72] max-sm:text-3xl">
          Browse your Learning World
        </h1>
        <p className="text-center text-2xl  max-sm:text-[16px] md:text-[18px] ">
          Find Knowledge, Share the Wealth-Explore books for Sale or for free
          Donation
        </p>

        <p className="text-[#0d5e93] text-2xl">Find Your Next Book</p>

        <div className="grid md:flex-row gap-4 mb-8 w-[80%]">
          <Input
            value={search}
            placeholder="Search by title..."
            className="border p-3 rounded-lg"
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="border border-gray-300 rounded-md outline-0  p-3   hover:focus:border-blue-400"
            onChange={(e) => setListingType(e.target.value)}
          >
            <option value="">All Listings</option>

            <option value="donate">Donation</option>

            <option value="sell">For Sale</option>
          </select>

          <select
            className="border border-gray-300 rounded-md outline-0  p-3 hover:focus:border-blue-400 "
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>

            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 space-y-7 space-x-7">
          {" "}
          {filteredBooks.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
      </div>
    </div>
  );
};
