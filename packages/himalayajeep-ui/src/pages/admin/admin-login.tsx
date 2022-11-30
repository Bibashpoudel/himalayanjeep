import { P } from "react-with-native";
import { Layout } from "../../components/Layout";
import { MainPageProps, RWNPage } from "../../types";

export const AdminLogin: RWNPage = (props: MainPageProps) => {
  return (
    <Layout pages={props.pages}>
      <P>adminlgin</P>
    </Layout>
  );
};
AdminLogin.options = {};
