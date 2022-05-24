import type { NextPage } from "next";
import { Autocomplete } from "@mantine/core";

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
      <div>
        <label>
          恐竜の名前
          <Autocomplete
            // id="name"
            onChange={handleName}
            value={name}
            data={data.map((data) => data.dinosaur)}
            classNames={{
              input: "text-xl",
            }}
          />
        </label>

        <div className="h-5" />
        <label className="block font-medium">
          攻撃力(%の入力は不要)
          <div className="mt-1">
            <input
              type="number"
              className="block py-1 w-full text-xl font-medium rounded-md border-gray-300 focus:border-[#339af0] focus:ring-[#339af0]"
              value={melee || ""}
              onChange={handleMelee}
            />
          </div>
        </label>
      </div>
      <p className="mt-7 text-center">
        トータルダメージ＝
        <span className="text-lg font-bold">{totalDamage}</span>
      </p>
    </Layout>
  );
};

export default Home;
