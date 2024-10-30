import TabTitleService from "../../services/TabTitleService";
import HomeLayout from "../../layouts/HomeLayout";
import { SportsFashionAndGear, HealthWellnessAndFitness } from "../../constants/LifeStyleData";
import News2 from "../../components/home/News2";

const LifeStyle = () => {
  TabTitleService.setTabTitle("Lifestyle | G&B");
  return (
    <HomeLayout>
      <div className="w-full h-fit flex justify-center">
        <div className="w-full md:w-[80%] my-6 flex flex-col gap-6">
          <section className="w-full h-fit p-4 bg-white rounded-xl shadow-md flex flex-col gap-4">
            <div className="w-full h-fit px-10 py-2 bg-primary rounded-lg">
              <p className="text-2xl text-secondary text-center font-semibold">
                Sports Fashion & Gear
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 3xl:grid-cols-3 gap-4">
              {SportsFashionAndGear.map((item) => (
                <News2 key={item.id} news={item} />
              ))}
            </div>
          </section>
          <section className="w-full h-fit p-4 bg-white rounded-xl shadow-md flex flex-col gap-4">
            <div className="w-full h-fit px-10 py-2 bg-primary rounded-lg">
              <p className="text-2xl text-secondary text-center font-semibold">
                Sports Fashion & Gear
              </p>
            </div>
            <div className="gap-4">
              <News2 news={HealthWellnessAndFitness[0]}  size={100} />
            </div>
          </section>
          <section className="w-full h-fit p-4 bg-white rounded-xl shadow-md flex flex-col gap-4">
            <div className="w-full h-fit px-10 py-2 bg-primary rounded-lg">
              <p className="text-2xl text-secondary text-center font-semibold">
                Food & Nutrition
              </p>
            </div>
            <div className="gap-4">
              <News2 news={HealthWellnessAndFitness[3]} size={100} />
            </div>
          </section>
        </div>
      </div>
    </HomeLayout>
  );
};

export default LifeStyle;
