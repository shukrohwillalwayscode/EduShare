import { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { NavBar, navlinks } from "../components/ui/nav";
import { useNavigate } from "react-router-dom";

export const Listing = () => {
  const [listingType, setListingType] = useState("donate");

  const [image, setImage] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    condition: "",
    description: "",

    contactName: "",
    contactNumber:"",
    location: "",
    meetingLocation: "",
    price: "",
  });
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result as string);
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newListing = {
      id: Date.now(),
      ...formData,
      image,
      listingType,
    };

    const booksString = localStorage.getItem("books");

    const existingBooks = booksString ? JSON.parse(booksString) : [];

    existingBooks.push(newListing);

    localStorage.setItem("books", JSON.stringify(existingBooks));
    navigate("/books");
  };
  return (
    <>
      <NavBar
        logoImg="/Edushare logo.png"
        logoText1="Edu"
        logoText2="Share"
        navlinks={navlinks}
      />
      <main className="max-w-xl mx-auto py-30 p-6  bg-white max-sm:p-8 ">
        <h1 className="text-2xl text-[#CA9C72] font-bold mb-8 text-center">
          Share Your Books, Empower Minds | Upload to EduShare{" "}
        </h1>

        {/* Toggle */}

        <div className="flex gap-3 mb-6   ">
          <Button
            type="button"
            size="back"
            onClick={() => setListingType("donate")}
            className={`px-5 py-2 rounded ${
              listingType === "donate" ? "bg-blue-600 text-white" : "border"
            }`}
          >
            Donate
          </Button>

          <Button
            type="button"
            size="back"
            onClick={() => setListingType("sell")}
            className={`px-5 py-2 rounded ${
              listingType === "sell" ? "bg-blue-600 text-white" : "border"
            }`}
          >
            Sell
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Image */}

          <div className="grid">
            <Input
              label=" Upload Book Image"
              required
              type="file"
              accept="image/*"
              onChange={handleImage}
            />

            {image && (
              <img
                src={image}
                className="w-32 h-32 object-cover mt-3 rounded"
              />
            )}
          </div>

          <Input
            label="Book Title"
            placeholder="Enter book title"
            required
            name="title"
            onChange={handleChange}
          />

          <Input
            label="Author"
            placeholder="Book author"
            required
            name="author"
            onChange={handleChange}
          />

          {/* Category */}
          <label htmlFor="">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md outline-0 p-3  hover:focus:border-blue-400"
          >
            <option value="">Select Category</option>
            <option value="JSS1">JSS1</option>
            <option value="JSS2">JSS2</option>
            <option value="JSS3">JSS3</option>
            <option value="SS1">SS1</option>
            <option value="SS2">SS2</option>
            <option value="SS3">SS3</option>
            <option value="WAEC">WAEC</option>
            <option value="NECO">NECO</option>
            <option value="JAMB">JAMB</option>
            <option value="NABTEB">NABTEB</option>
          </select>

          {/* Condition */}
          <label htmlFor="">Condition</label>
          <select
            name="condition"
            required
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md outline-0 w-full hover:focus:border-blue-400"
          >
            <option>Book Condition</option>

            <option value="new">New</option>

            <option value="used">Used</option>
          </select>
          <label htmlFor="">Description</label>
          <textarea
            name="description"
            placeholder="Describe the book"
            onChange={handleChange}
            className="border border-gray-300 rounded-md outline-0 p-3 w-full hover:focus:border-blue-400"
          />

          <Input
            label="Contact Name"
            placeholder="Ade Eze"
            required
            name="contact-name"
            onChange={handleChange}
          />
          <Input
            label="Contact Number"
            placeholder="080xxxxxxx"
            required
            name="contact"
            onChange={handleChange}
          />

          <Input
            label="Your Location"
            placeholder="e.g Lagos, Ikeja"
            required
            name="location"
            onChange={handleChange}
          />

          <Input
            label="Preferred Meeting Location"
            required
            placeholder="e.g Ikeja City Mall"
            name="meetingLocation"
            onChange={handleChange}
          />

          {listingType === "sell" && (
            <Input
              label="Price"
              placeholder="Enter amount"
              name="price"
              onChange={handleChange}
            />
          )}

          <Button type="submit">Publish Listing</Button>
        </form>
      </main>
    </>
  );
};
