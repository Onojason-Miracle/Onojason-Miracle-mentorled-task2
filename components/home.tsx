import Image from "next/image";

export default function Homeimg() {
  return (
    <div className="homepage">
      <img
        src="https://res.cloudinary.com/blackgirlmagic/image/upload/v1750779966/task2/heroimage.png"
        alt="Mentorled header image"
        className="hero-image"
      />
    </div>
  );
}
