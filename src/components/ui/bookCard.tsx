type BookCardProps = {
  id: number;
  image?: string;
  title: string;
  category: string;
  condition: string;
  description?: string;
  contactName?: string;
  contactNumber?: number;
  listingType: string;
  location: string;
  meetingLocation?: string;
  price?: string;
};
const BookCard = ({
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
  return (
    <div className="w-full h-[500px] border rounded-xl p-4 shadow-md border-[#CA9C72] overflow-hidden">
      <div className="w-full h-[220px] bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
        <img
        loading="lazy"
          src={image}
          alt={title}
          className="max-h-full max-w-full object-cover"
        />
      </div>

      <h2 className="font-bold text-xl mt-3">{title}</h2>

      <p>
        <span className="font-bold">Category: </span>
        {category}
      </p>

      <p>
        <span className="font-bold">Condition: </span>
        {condition}
      </p>
      <p>
        <span className="font-bold">Description:</span> {description}
      </p>
      <p>
        <span className="font-bold">Contact Name: </span>
        {contactName}
      </p>
      <p>
        <span className="font-bold">Contact Number: </span>
        {contactNumber}
      </p>

      <p>
        <span className="font-bold">Location:</span> {location}
      </p>
      <p>
        <span className="font-bold">Meeting Location:</span> {meetingLocation}
      </p>

      <span className="text-blue-600">{listingType}</span>

      {listingType === "sell" && <p>₦{price}</p>}
    </div>
  );
};

export default BookCard;
