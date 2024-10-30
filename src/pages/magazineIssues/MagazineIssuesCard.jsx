/* eslint-disable react/prop-types */


const MagazineIssuesCard = ({ magazin }) => {
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <img
          src={magazin?.img } // Use optional chaining with a fallback image
          alt={magazin?.title || "Magazine Cover"}
        />
        <div className="card-body">
          <h2 className="card-title">{magazin?.title || "Untitled"}</h2>
          <p>{magazin?.time || "No date provided"}</p>
        </div>
      </div>
        // <div className="card card-compact bg-base-100 w-96 shadow-xl">

        //     <img
        //         src={magazin.img} ></img>

        //     <div className="card-body">
        //         <h2 className="card-title">{magazin.title}</h2>
        //         <p>{magazin.time}</p>
        //     </div>
        // </div>
    )
}

export default MagazineIssuesCard;
