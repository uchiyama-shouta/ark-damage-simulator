import type { NextPage } from "next";
import Autocomplete from "components/Autocomplete";

import Layout from "components/Layout";
import { data } from "utiles/data";
import { useTotalDamage } from "hooks/useTotalDamage";

const Home: NextPage = () => {
  const {
    name,
    setName: handleName,
    melee,
    handleMelee,
    totalDamage,
  } = useTotalDamage();
  return (
    <Layout>
      <Autocomplete
        label="恐竜の名前"
        value={name}
        onChange={handleName}
        data={data.map((data) => data.dinosaur)}
      />
      
      <div className="h-5" />
      <label className="block font-medium">
        攻撃力(%の入力は不要)
        <div className="mt-1">
          <input
            type="number"
            className="py-1 w-full text-xl font-medium rounded-md border-gray-400 focus:border-[#339af0] focus:ring-[#339af0]"
            value={melee || ""}
            onChange={handleMelee}
          />
        </div>
      </label>
      <p className="mt-7 text-center">
        トータルダメージ＝
        <span className="text-lg font-bold">{totalDamage}</span>
      </p>
    </Layout>
  );
};

export default Home;
