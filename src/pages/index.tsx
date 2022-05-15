import type { NextPage } from "next";
import { Autocomplete, Input } from "@mantine/core";

import Layout from "components/Layout";
import { data } from "utiles/data";
import { useTotalDamage } from "hooks/useTotalDamage";

const Home: NextPage = () => {
  const { name, setName, melee, handleMelee, totalDamage } = useTotalDamage();
  return (
    <Layout>
      <div>
        <div className="mb-5">
          恐竜の名前
          <Autocomplete
            // eslint-disable-next-line react/jsx-handler-names
            onChange={setName}
            value={name}
            data={data.map((data) => data.dinosaur)}
            placeholder=""
          />
        </div>
        <div>
          攻撃力(%の入力は不要)
          <Input type="number" value={melee || ""} onChange={handleMelee} />
        </div>
      </div>
      <p className="mt-7 text-center">
        トータルダメージ＝
        <span className="text-lg font-bold">{totalDamage}</span>
      </p>
    </Layout>
  );
};

export default Home;
