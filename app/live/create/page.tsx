import Button from "@/components/common/button";
import Input from "@/components/common/input";
import Layout from "@/components/common/layout";
import TextArea from "@/components/common/textarea";

export default function Create() {
  return (
    <Layout canGoBack title="Go Live">
      <form className=" space-y-4 py-10 px-4">
        <Input required label="Name" name="name" type="text" />
        <Input
          required
          label="Price"
          placeholder="0.00"
          name="price"
          type="text"
          kind="price"
        />
        <TextArea name="description" label="Description" />
        <Button text="Go live" />
      </form>
    </Layout>
  );
}
