export default function Header() {
  return (
    <div className="header">
      <div className="headerImg">
        <div className="image-round">
          <img
            src="https://res.cloudinary.com/blackgirlmagic/image/upload/v1750846710/task2/Photo_sodwjy.png"
            alt="Mentorled header image"
            className="image-round-img"
          />
        </div>
      </div>
      <div className="header-text">
        <div className=" header-textDiv">
          <h1>Coffee Store</h1>
          <p>Odessa, ON</p>
        </div>

        <div className="header-text-mini">
          <p>
            Location <br />
            (Pick Up):
          </p>
          <p>3 McAlpine St, Toronto, ON, CA, M5R 3T5</p>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Get Direction
          </a>
        </div>
      </div>

      <div className="header-profile">
        <div className="profileImgDiv">
          <img
            src="https://res.cloudinary.com/blackgirlmagic/image/upload/v1750846708/task2/Pic_wyodj6.png"
            alt="Mentorled header image"
            className=""
          />
        </div>

        <p>Owned by Lola and Coco</p>
      </div>
    </div>
  );
}
