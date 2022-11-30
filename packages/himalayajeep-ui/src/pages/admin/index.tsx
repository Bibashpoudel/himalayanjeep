import { Div, P } from "react-with-native";
import { Layout } from "../../components/Layout";
import { MainPageProps, RWNPage } from "../../types";
import { useRouter } from "react-with-native-router";

export const IndexPageAdmin: RWNPage = (props: MainPageProps) => {
  const router = useRouter();

  return (
    <Layout pages={props.pages}>
      <Div className="font-bold text-lg">admin page</Div>
      <P className="bg-gray-500 ">This is the admin page</P>
    </Layout>
  );
};

IndexPageAdmin.options = {};
