import Button from "@/components/common/button";
import Layout from "@/components/common/layout";
import TextArea from "@/components/common/textarea";

export default function Write() {
  return (
    <Layout canGoBack title="Write Post">
      <form className="p-4 space-y-4">
        <TextArea required placeholder="Ask a question!" />
        <Button text="Submit" />
      </form>
    </Layout>
  );
}

Write;
