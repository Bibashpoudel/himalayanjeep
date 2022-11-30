import { Div, P } from "react-with-native";
import { Layout } from "../components/Layout";
import { MainPageProps, RWNPage } from "../types";
import { useRouter } from "react-with-native-router";

export const IndexPage: RWNPage = (props: MainPageProps) => {
  const router = useRouter();

  return (
    <Layout pages={props.pages}>
      <Div className="font-bold text-lg">Home page</Div>
      <P className="bg-gray-500 ">
        Hello Himalaya. Home page. Show all jeeps in the Himalaya on a map, if
        the user provides his/her location, zoom into that location..,
      </P>
    </Layout>
  );
};

IndexPage.options = {};
