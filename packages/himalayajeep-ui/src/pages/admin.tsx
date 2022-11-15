import { P } from "react-with-native";
import { Layout } from "../components/Layout";
import { MainPageProps, RWNPage } from "../types";

export const Admin: RWNPage = (props: MainPageProps) => {
  return (
    <Layout pages={props.pages}>
      <P></P>
    </Layout>
  );
};
Admin.options = {};
