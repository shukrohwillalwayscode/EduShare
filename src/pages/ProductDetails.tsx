import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../components/ui/button";

const defaultBooks = [
  {
    id: 1,
    title: "New General Mathematics",
    category: "JSS1",
    condition: "Used",
    description: "This is a very good used book and it will serve you well",
    contactName: "Ade Eze",
    contactNumber: "900000000",
    listingType: "donate",
    location: "Lagos",
    image: "/maths.jfif",
    meetingLocation: "Ikeja Mall",
  },
  {
    id: 2,
    title: "Biology Textbook",
    category: "SS2",
    condition: "New",
    description: "This is a very good used book and it will serve you well",
    contactName: "Ade Eze",
    contactNumber: "900000000",
    listingType: "sell",
    price: "2500",
    location: "Ilorin",
    image: "/biology.jfif",
    meetingLocation: "Ilorin Mall",
  },
  {
    id: 3,
    title: "New General Mathematics",
    category: "SS1",
    condition: "Used",
    description: "This is a very good used book and it will serve you well",
    contactName: "Ade Eze",
    contactNumber: "900000000",
    listingType: "donate",
    location: "Lagos",
    image: "/maths.jfif",
    meetingLocation: "Ikeja Mall",
  },
  {
    id: 4,
    title: "WAEC Past Questions",
    category: "WAEC",
    condition: "New",
    description: "This is a very good used book and it will serve you well",
    contactName: "Ade Eze",
    contactNumber: "900000000",
    listingType: "sell",
    price: "2000",
    location: "Ilorin",
    image: "/waec.jpg",
    meetingLocation: "Ilorin Mall",
  },
];
const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const storedBooks = JSON.parse(localStorage.getItem("books") || "[]");

  const allBooks = [...defaultBooks, ...storedBooks];

  const book = allBooks.find((item) => item.id === Number(id));

  if (!book) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold">Book not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-8">
      <Button size="back" onClick={() => navigate(-1)}>
        Back
      </Button>
      <div className="w-full bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-[500px] object-contain rounded-xl"
        />
      </div>

      <h1 className="text-4xl text-[#CA9C72] font-bold mt-6">{book.title}</h1>

      <p className="mt-2">
        <strong>Category:</strong> {book.category}
      </p>

      <p>
        <strong>Condition:</strong> {book.condition}
      </p>

      <p>
        <strong>Listing Type:</strong> {book.listingType}
      </p>

      {book.listingType === "sell" && (
        <p>
          <strong>Price:</strong> ₦{book.price}
        </p>
      )}

      <p className="mt-3">
        <strong>Description:</strong>
      </p>

      <p>{book.description}</p>

      <hr className="my-6" />

      <h2 className="text-2xl text-[#CA9C72] font-bold">
        Seller / Donor Information
      </h2>

      <p>
        <strong>Name:</strong> {book.contactName}
      </p>

      <p>
        <strong>Location:</strong> {book.location}
      </p>

      <p>
        <strong>Meeting Point:</strong> {book.meetingLocation}
      </p>

      <a
        href={`tel:${book.contactNumber}`}
        className="inline-block mt-5 bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        📞 Contact Seller
      </a>

      <div className="mt-10 bg-yellow-50 border border-yellow-300 rounded-xl p-6">
        <h2 className="text-xl font-bold">Safety Tips</h2>

        <ul className="list-disc ml-5 mt-3 space-y-2">
          <li>Meet in a public place.</li>
          <li>Meet during daylight hours.</li>
          <li>Inspect the book before payment.</li>
          <li>Tell someone where you are meeting.</li>
          <li>Avoid sending money before receiving the book.</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;
