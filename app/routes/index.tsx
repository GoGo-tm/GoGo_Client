import Button from "~/components/common/Button";
import Card from "~/components/common/Card";

export default function Home() {
  return (
    <main className="w-full">
      {/* <span className="ml-5">안녕하세요</span> */}
      <Card />
      <Button event={() => console.log("click")}>Click</Button>
    </main>
  );
}
