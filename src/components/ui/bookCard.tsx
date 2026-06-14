import { useNavigate, useParams } from "react-router-dom";

type BookCardProps = {
  id: number;
  image?: string;
  title: string;
  category: string;
  condition: string;
  description?: string;
  contactName?: string;
  contactNumber?: string;
  listingType: string;
  location: string;
  meetingLocation?: string;
  price?: string;
};
const BookCard = ({
  id,
  image,
  title,
  category,
  condition,
  description,
  contactName,
  contactNumber,
  listingType,
  location,
  meetingLocation,
  price,
}: BookCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="w-full h-fit border rounded-xl p-4 shadow-md border-[#CA9C72] "
      onClick={() => navigate(`/products/${id}`)}
    >
      <div className="w-full h-[220px] bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
        <img
          loading="lazy"
          src={image}
          alt={title}
          className="max-h-full max-w-full object-cover"
        />
      </div>

      <h2 className="font-bold text-xl mt-3 ">{title}</h2>

      <p className="">
        <span className="font-bold text-[#CA9C72]">Category: </span>
        {category}
      </p>

      <p>
        <span className="font-bold text-[#CA9C72]">Condition: </span>
        {condition}
      </p>
      <p>
        <span className="font-bold text-[#CA9C72]">Description:</span>{" "}
        {description}
      </p>
      <p>
        <span className="font-bold text-[#CA9C72]">Contact Name: </span>
        {contactName}
      </p>
      <p>
        <span className="font-bold text-[#CA9C72]">Contact Number: </span>
        {contactNumber}
      </p>

      <p>
        <span className="font-bold text-[#CA9C72]">Location:</span> {location}
      </p>
      <p>
        <span className="font-bold text-[#CA9C72]">Meeting Location:</span>{" "}
        {meetingLocation}
      </p>

      <span className="text-blue-600 font-bold">{listingType}</span>

      {listingType === "sell" && <p>₦{price}</p>}
    </div>
  );
};

export default BookCard;
