import Layout from "./components/Layout/layout";
import Search from "./components/search/search";
import Section from "./components/section/section";
import { SectionsContent } from "./config/sections/data";

export default function Home() {
    return (
        <Layout>
            <Search />
            {SectionsContent.map(({ ...props }) => (
                <Section key={props.id} {...props} />
            ))}
        </Layout>
    );
}
