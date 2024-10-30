import { MagazineIssuesM } from "../../constants/MagazineIssuesM"
import MagazineIssuesLayout from "../../layouts/MagazineIssuesLayout"
import MagazineIssuesCard from "./MagazineIssuesCard"


const MagazineIssues = () => {
  return (
    <MagazineIssuesLayout>
      <div className="w-full flex justify-center md:pb-20 mt-10">
        <div className="w-[90%] flex flex-wrap justify-center gap-4">
          {MagazineIssuesM.map((magazin) => (
            <MagazineIssuesCard key={magazin.id} magazin={magazin} />
          ))}
        </div>
      </div>
    </MagazineIssuesLayout>

  )
}

export default MagazineIssues